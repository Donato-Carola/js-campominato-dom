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
const main = document.querySelector("main");
const punteggio=document.querySelector('h3')

//! Evento aggiunto al button, il quale una volta cliccato compaiono i numeri

for (let i = 1; i <= 100; i++) {
  const square = createSquare();
  const randomNumber = i;
  square.innerHTML += `${randomNumber}`;
  
  button.addEventListener("click", removeElem);

  square.addEventListener("click", function () {
    //Aggiungo in questo click la condizione per veere se si perde, cioè becca il numero uguale nell'array oppure si vince sommando il punteggio
    
   

conta()
    for (let i=0;i<arrayBombe.length;i++){
       number=arrayBombe[i];
       console.log(number);

        if(randomNumber===number){
          square.classList.add("bgcolor");
          console.log('hai perso');
          
          alert(`GAMEOVER`);
         setTimeout(function rigioca(){
          location.reload();
        },1000);
          
        }else{
         
          square.classList.add("bgcolorTwo");
          //punteggio.innerHTML=(`il tuo punteggio è ${}`)
          console.log('hai vinto');
          
        }


    }
    
    
    //square.classList.add("bgcolor");
    //console.log(i);

    // usato un do while per vedere se funzionasse, nel senso colora blu finche il numero random è uguale al numero allinterno dell'array
    /*do {
         square.classList.add('bgcolor')
        console.log(i)
      }
      while(randomNumber===arrayBombe);*/

    //IF randomNumber (cioè il numero che è all'interno del mio span, in questo caso) è diverso al arrayBombe[i](cioè al numero all'interno dell'array)
    //Scirvi in innerhtml la somma del punteggio;
    //Else, scrivi con un aler GameOver ed esce dal IF
  });
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

function removeElem() {
  /* const elemRemove = document.querySelector('section')
    elemRemove.classList.toggle('removeList')
    return elemRemove;*/
  location.reload();
}

//! seconda parte
/* costruisco la funzione per il numero random che contengono le bombe*/

const arrayBombe = [];

function bombe() {
  console.log(arrayBombe);
  /*for(let i=1;i<=16;i++){
   let numRandom = Math.floor( Math.random()*100) +1;
     //arrayBombe.push(numRandom);
     if(arrayBombe[i]==numRandom){
        numRandom = Math.floor(
            Math.random()*100) +1;

     }else{
        arrayBombe.push(numRandom);
     }
}*/

  while (arrayBombe.length <= 15) {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    if (!arrayBombe.includes(numRandom)) 
    arrayBombe.push(numRandom);
  }
  

  return arrayBombe;
}

bombe();


//contatore per le volte cliccato il box con il numero

let contatore = 0;

function conta(){
  contatore= contatore+1;
  punteggio.innerHTML=`punteggio ${contatore}`;
}
