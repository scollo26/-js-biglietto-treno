// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


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





if (eta <= 17 ) {

sconto = (prezzoBiglietto * 20) / 100 ;
// console.log(sconto);
prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
// console.log('Prezzo per minorenni ' + prezzoBiglietto + '€');
// document.writeln('Prezzo per minorenni ' + prezzoBiglietto + '€');

document.getElementById("my-id").innerHTML = "Il prezzo da pagare per minorenni è di " + prezzoBiglietto + ' €';

}
 else if (eta > 65) {
    sconto = (prezzoBiglietto * 40) / 100;
    // console.log(sconto);
    prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
    // console.log('Prezzo per over 65 ' + prezzoBiglietto + '€');
    // document.writeln('Prezzo per over 65 ' + prezzoBiglietto + '€');

    document.getElementById("my-id").innerHTML = "Il prezzo da pagare per over 65 è di " + prezzoBiglietto + ' €';

 }
  else{
      prezzoBiglietto = (prezzoBiglietto).toFixed(2);
    //   console.log('Paga prezzo intero ' + prezzoBiglietto + '€');
    //   document.writeln('Prezzo pieno' + prezzoBiglietto + '€');

      document.getElementById("my-id").innerHTML = "Il prezzo da pagare è di " + prezzoBiglietto + ' €';

  }

 