const modalOverlay = document.querySelector('.modal-overlay')/*usa-se o mesmo nome que o seletor do CSS*/ 
const cards = document.querySelectorAll('.mais-acessadas__card')

for (let card of cards){
    card.addEventListener('click', function(e){
        const fotoId = card.querySelector("img").getAttribute("alt");
        console.log(fotoId)
        const title = card.querySelector("p.nome").textContent;
        const autor = card.querySelector("p.autor").textContent;

        modalOverlay.querySelector("img").src = `./assets/${fotoId}.png`;
        modalOverlay.querySelector("p.nome").innerHTML = title;
        modalOverlay.querySelector("p.autor").innerHTML = autor;
        
        modalOverlay.classList.add('active')
        
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    
})
