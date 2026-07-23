import $ from "jquery";
import "jquery-ui/ui/widgets/progressbar";

const API_URL = process.env.REACT_APP_API_URL;

function scroll(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}

function showGameInHighlight(game) {
    let destaqueImagem = document.querySelector("body");
    let thumbnail = document.getElementById("thumbnail");
    destaqueImagem.style.backgroundImage = 'url(' + API_URL + '/src' + game.imagem + ')';
    thumbnail.style.backgroundImage = 'url(' + API_URL + '/src' + game.imagem + ')';

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

export { scroll, showGameInHighlight }