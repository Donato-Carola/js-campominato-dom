//! seconda parte 22nov23

/** Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione:
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
- abbiamo calpestato una bomba
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */





const button = document.querySelector("button");
const mainGrid = document.querySelector("section");
const main = document.querySelector('main')

//! Evento aggiunto al button, il quale una volta cliccato compaiono i numeri 
 
    for (let i = 1; i <= 100; i++) {
    const square = createSquare();
    const randomNumber = i;
    square.innerHTML += `${randomNumber}`;
    
  
    
    button.addEventListener('click', removeElem)

    square.addEventListener('click', function(){
        square.classList.add('bgcolor')
        console.log(i)
        
    })
  }


  
 
   
 




//! Funzione creare i numeri random a nostro piacimento
function numberRandom(minNumber, maxNumber) {
  const numberRandomPc = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  return numberRandomPc;
}

//! Funzione per la creazione dei quadrati
function createSquare() {
  const createElemSquare = document.createElement("span");
  mainGrid.appendChild(createElemSquare);
  return createElemSquare;
}

function removeElem(){

   /* const elemRemove = document.querySelector('section')
    elemRemove.classList.toggle('removeList')
    return elemRemove;*/
    location.reload();
}



//! seconda parte 
/* costruisco la funzione per il numero random che contengono le bombe*/ 
 const arrayBombe =[]; 
function bombe ( ){

  console.log(arrayBombe)
    
  
  
  for(let i=1;i<=16;i++){
   let numRandom = Math.floor(
        Math.random()*100) +1;
     //arrayBombe.push(numRandom);
     if(arrayBombe[i]==numRandom){
        numRandom = Math.floor(
            Math.random()*100) +1;

     }else{
        arrayBombe.push(numRandom);
     }
}
     return arrayBombe;

}

bombe()