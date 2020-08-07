const cards = document.querySelectorAll('.card')

for (let card of cards){
    console.log('card');
    console.log(card);
    
    card.addEventListener('click', function(){
        const courseId = card.getAttribute("id"); 
        window.location.href = `/courses/${courseId}`
    })
}

