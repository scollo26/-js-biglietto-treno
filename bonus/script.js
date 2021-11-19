let kilometri;
let i= 0;
while(isNaN(kilometri)){
  if ( i < 3){
    kilometri =parseInt(prompt('Inserisci kilometri'));
    i++;
  }
    else{
    kilometri =parseInt(prompt('Testo sbagliato'));
  }
}

const eta = parseInt(prompt('Inserisci eta'));
// console.log(kilometri, eta);

let prezzoBiglietto= kilometri * 0.21;
// console.log(prezzoBiglietto);