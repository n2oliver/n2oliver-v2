import { ultimaCarta } from "../platform/platform";

const background = {
    0: "abelha",
    1: "coruja",
    2: "elefante",
    3: "golfinho",
    4: "koala",
    5: "macaco",
    6: "pinguim",
    7: "tartaruga",
}

let imageIndex = 0;

const virar = (event) => {
    event.target.onclick = (event) => { };
    event.target.classList.remove('inverter');
    event.target.classList.add('inverter');
    setTimeout(() => {
        event.target.classList.remove('sem-fundo');
        event.target.src = `${window.API_URL}/src/img/jogos/combo-memo/card/${background[imageIndex]}.png`;
        imageIndex++;
        if (imageIndex > 7) imageIndex = 0;
    }, 300);
    setTimeout(() => {
        event.target.classList.remove('inverter');
        setTimeout(() => {
            event.target.classList.add('sem-fundo');
            event.target.src = `${window.API_URL}/src/img/jogos/combo-memo/card/card.png`;
            event.target.onclick = (target) => virar(target);
        }, 300);
    }, 3000)
}
function virarCarta(target) {
    target.classList.remove("inverter");
    target.classList.add("inverter");
    setTimeout(() => {
        target.classList.remove("sem-fundo");
    }, 300);
}
function esconderCarta(target) {
    target.classList.remove("inverter");
    setTimeout(() => {
        target.classList.add("sem-fundo");
    }, 300);
    ultimaCarta = null
}
function esconderTodasAsCartas() {
    for (let target of document.querySelectorAll(".card.inverter")) {
        if (target.dataset.acertou) {
            continue;
        }
        target.classList.remove("inverter");
        target.classList.add("sem-fundo");
    }
}
function embaralhar() {
    let arr = [];

    // Cria dois de cada número
    for (let i = 0; i < 8; i++) {
        arr.push(i);
        arr.push(i);
    }

    // Embaralha
    arr.sort(() => Math.random() - 0.5);
    console.log(arr);
    let i = 0;
    for (let target of document.querySelectorAll(".card")) {
        target.style.backgroundImage = `url(${window.API_URL}/src/img/combo-memo/card/${background[arr[i]]}.png)`;
        i++;
    }
}
export { virar, virarCarta, embaralhar, esconderCarta, esconderTodasAsCartas }