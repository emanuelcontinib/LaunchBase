    
    const modalOverlay = document.querySelector(".modal-overlay");
    const cards = document.querySelectorAll(".mais-acessadas__card");
    for (let i =0; i< cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const fotoId = cards[i].querySelector("img").getAttribute("alt");
            const title = cards[i].querySelector("p.nome").textContent;
            const autor = cards[i].querySelector("p.autor").textContent;
            
            cards[i].querySelector("img").src = `./assets/${fotoId}.png`;
            cards[i].querySelector("p.nome").innerHTML = title;
            cards[i].querySelector("p.autor").innerHTML = autor;
            cards[i].classList.add('active')
            cards[i].querySelector('#mais-acessadas__card')
            // .src = `#mais-acessadas__card`
            console.log(i);
            window.location.href="http://localhost:5000/receitas/"+i;
        })
    }