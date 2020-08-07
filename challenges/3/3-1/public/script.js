const modalOverlay = document.querySelector('.modal-overlay')/*usa-se o mesmo nome que o seletor do CSS*/ 
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener('click', function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe')
        .src = `https://www.rocketseat.com.br/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})
