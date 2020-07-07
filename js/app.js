var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var tot = km*0.21;
var percMin = 20;
var percAnz = 40;
var result;

console.log(km);
console.log(eta);
console.log(tot);

result = 'Nessuno sconto per te. Peccato. Tot. ' + tot + '€';

if (eta<18) {
    result = 'Hai meno di 18 anni. Super! Tot. ' + (tot-(tot*percMin)/100) + '€';
} else if (eta>65) {
    result = 'L\'età non sempre è un limite. Eccoti uno sconto. Tot.' + (tot-(tot*percAnz)/100); + '€';
}

document.getElementById('costotck').innerHTML = result;
