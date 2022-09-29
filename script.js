

//esercizio 2
 //prende il testo
const centerText = document.getElementsByClassName('text-box')

function right() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('right')
        text.classList.remove('left')
        text.classList.remove('center')
        text.classList.remove('justify')
      }
}
    
function center() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('center')
        text.classList.remove('left')
        text.classList.remove('right')
        text.classList.remove('justify')
      }
}
    
function left() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('left')
        text.classList.remove('right')
        text.classList.remove('center')
        text.classList.remove('justify')
      }
}
    
function justify() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('justify')
        text.classList.remove('left')
        text.classList.remove('center')
        text.classList.remove('right')
      }
}

    
    



