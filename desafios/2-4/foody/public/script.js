    const cards = document.querySelectorAll(".mais-acessadas__card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const fotoId = cards[i].querySelector("img").getAttribute("alt");
            const title = cards[i].querySelector("p.nome").textContent;
            const autor = cards[i].querySelector("p.autor").textContent;

            cards[i].querySelector("img").src = `./assets/${fotoId}.png`;
            cards[i].querySelector("p.nome").innerHTML = title;
            cards[i].querySelector("p.autor").innerHTML = autor;
            cards[i].querySelector('#mais-acessadas__card')
            // .src = `#mais-acessadas__card`
            // console.log(i);
            location.href = "http://localhost:5000/receitas/" + i;
        })
    }

    Document
    .querySelector('.button')
    .addEventListener('click', function(){
        if(button.innerHTML == 'Esconder'){
            button.innerHTML = 'Mostrar'
        }else{
            button.innerHTML = 'Esconder'
        }
    })
 
    Document
    .querySelector('.button')
    .addEventListener('click', function(){
        if(button.innerHTML == 'Mostrar'){
            button.innerHTML = 'Esconder'
        }else{
            button.innerHTML = 'Mostrar'
        }
    })

    Document.querySelector('.button').addEventListener('click', function(){
        console.log('botão clicado');
    })