const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".mais-acessadas__card");

for (let card of cards) {
    card.addEventListener('click', function () {
        const fotoId = card.querySelector("img").getAttribute("alt");
        const title = card.querySelector("p.nome").textContent;
        const autor = card.querySelector("p.autor").textContent;

        card.querySelector("img").src = `./assets/${fotoId}.png`;
        card.querySelector("p.nome").innerHTML = title;
        card.querySelector("p.autor").innerHTML = autor;
        card.classList.add('active')
        card.querySelector('#mais-acessadas__card')
            .src = `#mais-acessadas__card`
    })
}

