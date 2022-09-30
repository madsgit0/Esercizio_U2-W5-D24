

//esercizio 2
 //prende il testo
const centerText = document.getElementsByClassName('text-box')

function right() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('right')
        text.classList.remove('left', 'center', 'justify')
        // text.classList.remove('center')
        // text.classList.remove('justify')
      }
}
    
function center() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('center')
        text.classList.remove('left', 'right', 'justify')
      }
}
    
function left() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('left')
        text.classList.remove('right', 'center', 'justify')
      }
}
    
function justify() {
    //gli aggiunge una classe che modifica l'allineamento del testo
    for (let text of centerText) {
        text.classList.add('justify')
        text.classList.remove('left', 'right', 'center')
    }
}

//esercizio 3

//controlla che l'input abbia un valore

let list = document.getElementsByClassName('list')

function addGoal(event){
    if (event.key !== 'Enter'){
        return;
    }

    let input = document.getElementById('input-field')
    
    if (input.value !== ''){
        list.innerHTML += `<div class="goal">${input.value}</div>`
        input.value=''
        
        console.log(list)
    }

   
}

//prendi il valore

//inseriscilo nella lista
 
 



