import { $ } from 'jquery';

(function () {
    const serverResponse = $.post('../api/noticias/buscar-noticias.php', { page: 1, offset: 0, limit: 15 }, function (response) {
        if (serverResponse.status === 200) {
            const data = JSON.parse(response);
            for (let item of data.results) {
                $("#game-noticias").append($(`
            <div className="card" onclick="window.location.href = '/noticias.php?id=${item.id}'">
                <div className="img" style="background-image: url(${item.imagem})"></div>
                <strong>${item.titulo}</strong>
            </div>`))
            }
        }
    })
})()
function scroll(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}

function showGameInHighlight(game) {
    let destaqueImagem = document.querySelector("body");
    let thumbnail = document.getElementById("thumbnail");
    destaqueImagem.style.backgroundImage = 'url(' + game.imagem + ')';
    thumbnail.style.backgroundImage = 'url(' + game.imagem + ')';

    $('#game-details-content,#game-details-title,#play-button,#click-to-action').unbind('click').click(function (e) {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = game.url;
        }, 200);
    });


    document.getElementById('game-details-title').textContent = game.titulo;
    document.getElementById('game-details-content').innerHTML = game.descricao +
        `<div class="text-center" style="display: none;">
            <button class="btn btn-danger m-1 h-0" id="next" style="display: none; height: fit-content;" aria-label="Aria Right">
            <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>`;
}
document.addEventListener('DOMContentLoaded', function () {
    window.onclick = () => {
        window.onclick = () => {
            /*    abrirSmartlinkUmaVez(); */
            window.onclick = null;
        }
    }
    let gameItems = [];
    fetch('../api/jogos/obter.php').then(async response => {
        const data = await response.json();
        const recentesContainer = document.getElementById('jogos-recentes').querySelector('#lista');

        data.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';

            const gameLink = document.createElement('a');
            gameLink.href = '#';
            gameLink.setAttribute('data-game-url', game.url);
            gameLink.setAttribute('data-game-title', game.titulo);
            gameLink.setAttribute('data-game-desc', game.descricao);
            gameLink.setAttribute('data-game-imagem', game.imagem);

            const gameDiv = document.createElement('div');

            const gameTitle = document.createElement('h2');
            gameTitle.className = 'rounded-left bg-dark my-0 py-1 rounded';
            gameTitle.textContent = game.titulo;
            gameDiv.appendChild(gameTitle);

            const gameSubDiv = document.createElement('div');
            gameDiv.className = 'row min-vh-50 h-100 align-content-center';
            gameSubDiv.style.height = '150px';
            gameSubDiv.className = 'bg-dark border border-light';
            gameSubDiv.style.background = `url(${game.imagem})`;
            gameSubDiv.style.backgroundSize = `cover`;
            gameDiv.appendChild(gameSubDiv);

            gameLink.onclick = function () {
                setTimeout(() => {
                    window.location.href = game.url;
                }, 200);
            };
            gameItems.push(game);

            const gameDesc = document.createElement('p');
            gameDesc.innerHTML = game.descricao;

            const playButton = document.createElement('div');
            playButton.className = 'link btn my-2';
            playButton.textContent = 'Jogar';
            gameLink.appendChild(gameDiv);
            gameCard.appendChild(gameLink);
            recentesContainer.appendChild(gameCard);
        });
        let gamecards = $('.game-card');
        // Encontra o índice do primeiro jogo a ser exibido
        let gamecard = gamecards[0];
        let gameItemsIndex = -1;
        const gameLink = gamecard.querySelector('a');
        document.getElementById('game-details-title').textContent = gameLink.dataset.gameTitle;
        document.getElementById('game-details-content').innerHTML = gameLink.dataset.gameDesc;

        let interval = null;
        let progressInterval = null;
        let progress = 0;
        let duration = 15000;
        let stepTime = 200;
        let step = (stepTime / duration) * 100;

        function startProgress() {
            clearInterval(progressInterval);
            progress = 0;
            progressInterval = setInterval(() => {
                progress += step;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(progressInterval);
                    next();
                    startProgress();
                }
                $("#progressbar").progressbar("value", progress);
            }, stepTime);
        }

        function next() {
            gameItemsIndex++;
            if (gameItemsIndex >= gameItems.length) {
                gameItemsIndex = 0;
            }
            showGameInHighlight(gameItems[gameItemsIndex]);
            progress = 0;
            $("#progressbar").progressbar("value", progress);
        }

        function prev() {
            gameItemsIndex--;
            if (gameItemsIndex < 0) {
                gameItemsIndex = gameItems.length - 1;
            }
            showGameInHighlight(gameItems[gameItemsIndex]);
            progress = 0;
            $("#progressbar").progressbar("value", progress);
        }

        $('#next').click(() => {
            clearInterval(progressInterval);
            clearInterval(interval);
            next();
            startProgress();
            interval = setInterval(next, duration);
        });

        $('#prev').click(() => {
            clearInterval(progressInterval);
            clearInterval(interval);
            prev();
            startProgress();
            interval = setInterval(next, duration);
        });
        $('#next,#prev').show();

        if ($("#progressbar").progressbar) {
            // Inicializa o progressbar
            $("#progressbar").progressbar({
                value: 0
            });
        }

        if ($("#progressbar").progressbar) {
            startProgress();
        }
        let timeout;

        $('#next').click(() => {
            next();
            clearInterval(progressInterval);
            startProgress();

            clearInterval(interval);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                interval = setInterval(next, 15000);
                progressInterval = setInterval(() => {
                    $("#progressbar").progressbar({
                        value: interval
                    });
                }, 200);
            }, 30000);
        });

        $('#prev').click(() => {
            prev();
            clearInterval(progressInterval);
            startProgress();

            clearInterval(interval);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                interval = setInterval(prev, 15000);
                progressInterval = setInterval(() => {
                    $("#progressbar").progressbar({
                        value: interval
                    });
                }, 200);
            }, 30000);
        });
        (() => {
            next();
            clearInterval(progressInterval);
            startProgress();

            clearInterval(interval);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                interval = setInterval(next, 15000);
                progressInterval = setInterval(() => {
                    $("#progressbar").progressbar({
                        value: interval
                    });
                }, 200);
            }, 30000);
        })();
    });
    fetch('../api/jogos/obter-destaques.php').then(async response => {
        const data = await response.json();
        let destaqueItems = [];
        const container = document.getElementById('destaques');

        data.forEach(destaque => {
            const card = document.createElement('div');
            card.className = 'game-card';

            const destaqueLink = document.createElement('a');
            destaqueLink.href = '#';
            destaqueLink.setAttribute('data-game-url', destaque.url);
            destaqueLink.setAttribute('data-game-title', destaque.titulo);
            destaqueLink.setAttribute('data-game-desc', destaque.descricao);
            destaqueLink.setAttribute('data-game-imagem', destaque.imagem);

            const destaqueDiv = document.createElement('div');
            const destaqueSubDiv = document.createElement('div');

            destaqueDiv.className = 'row min-vh-50 h-100 align-content-center';
            destaqueSubDiv.style.height = '150px';
            destaqueSubDiv.className = 'bg-dark border border-light';
            destaqueSubDiv.style.background = `url(${destaque.imagem})`;
            destaqueSubDiv.style.backgroundSize = `cover`;

            const destaqueTitle = document.createElement('h2');
            destaqueTitle.className = 'rounded-left bg-dark my-0 py-1 rounded';
            destaqueTitle.textContent = destaque.titulo;

            destaqueLink.onclick = function () {
                setTimeout(() => {
                    window.location.href = destaque.url;
                }, 200);
            };
            destaqueItems.push(destaque);

            const destaqueDesc = document.createElement('p');
            destaqueDesc.innerHTML = destaque.descricao;

            const playButton = document.createElement('div');
            playButton.className = 'link btn my-2';
            playButton.textContent = 'Acessar';

            destaqueDiv.appendChild(destaqueTitle);
            destaqueLink.appendChild(destaqueDiv);
            destaqueDiv.appendChild(destaqueSubDiv);
            card.appendChild(destaqueLink);
            container.appendChild(card);
        });
    })
});

export { scroll, showGameInHighlight }