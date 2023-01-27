var cardI = document.querySelectorAll('.card');
var deck = document.querySelector('.deck');
var cardC = [];
var button = document.querySelector('#botao');
var cardSlided = false

button.addEventListener('click', slideCards)

for (let i = 0; i < cardI.length; i++){
    cardC.unshift(cardI[i])
}


function slideCards(){
   if (cardSlided){
    for (let i = 0; i < cardC.length; i++){
        cardC[i].style.left = 0
   }
   button.textContent = "Expandir"
   cardSlided = false
    } else {
        for(let i = 0; i <cardC.length; i++){
            cardC[i].style.left = `calc( ${256 * i}px)`
        }
        cardSlided = true;
        button.textContent = "Recolher"
    }
}
