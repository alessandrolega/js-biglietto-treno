/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/* KM ED ETA'*/

let Km = parseInt(prompt("How Many Km?"));
let Age = parseInt(prompt("How Old Are You?"));


// PREZZO PER KM //

let Price = Km * 0.21;

// DISCOUNT 20 //

let Discount20 = (Price * 0.8).toFixed(2);

// DISCOUNT 40 //

let Discount40 = (Price * 0.6).toFixed(2);

// CONDIZIONALI //

if (Age < 18) {
    document.getElementById('Totale').innerHTML = "Your Price Is" + Discount20 + "€";

}   else if (Age >= 65) {
    document.getElementById('Totale').innerHTML = "Your Price Is" + Discount40 + "€";

}   else {
    document.getElementById('Totale').innerHTML = "Your Price Is" + Price + "€";
}
