
for (let card of cards) {
    card.addEventListener('click', function () {
        const fotoId = card.querySelector("img").getAttribute("alt");
        const title = card.querySelector("p.nome").textContent;
        const autor = card.querySelector("p.autor").textContent;

        modalOverlay.querySelector("img").src = `./assets/${fotoId}.png`;
        modalOverlay.querySelector("p.nome").innerHTML = title;
        modalOverlay.querySelector("p.autor").innerHTML = autor;
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('#mais-acessadas__card')
            .src = `#mais-acessadas__card`
    })
}


