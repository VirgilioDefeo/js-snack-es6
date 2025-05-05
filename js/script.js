// Snack 1
// Creare un array di oggetti:
const biciclette = [
    {nome:"Bianchi", peso:7.5 },
    {nome:"Trek", peso:6.8 },
    {nome:"Specialized", peso:7.2 },
    {nome:"Cannondale", peso:6.5 },
    {nome:"Scott", peso:7.0 },
    ]
    

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
let bicileggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < bicileggera.peso) {
        bicileggera = biciclette[i];
    }
}
// Stampare a schermo oppure in console la bici con peso minore.
    console.log("La bici più leggera è:");
    console.log(bicileggera);
    // // // // // // // // // // // // // // // // // // // // // // // // 



// Snack2
// Creare un array di oggetti di squadre di calcio.
const SquadreCalcio = [
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
  ];

// FUNZIONE GENERARE NUMERI CASUALI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) +min;
}

for (let i = 0; i < SquadreCalcio.length; i++) {
    SquadreCalcio[i].punti = getRandomNumber(0, 90);
    SquadreCalcio[i].falliSubiti = getRandomNumber(0, 50);
}

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
const nomiEFalli = []
for (let i = 0; i < SquadreCalcio.length; i++) {
    const nuovaSquadra = {
        nome: SquadreCalcio[i].nome,
        falliSubiti: SquadreCalcio[i].falliSubiti
    }
    nomiEFalli.push(nuovaSquadra);
}

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.log("Squadre con tutti i dati:", SquadreCalcio);
console.log("Solo nome e falli subiti:", nomiEFalli);








// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS



