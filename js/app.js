var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var tot = km*0.21;
var percMin = 20;
var percAnz = 40;
var result;

console.log(km);
console.log(eta);
console.log(tot);

result = tot + '€';

if (eta<18) {
    result = (tot-(tot*percMin)/100) + '€';
} else if (eta>65) {
    result = (tot-(tot*percAnz)/100) + '€';
}

document.getElementById('costotck').innerHTML = result;
document.getElementById('eta-pass').innerHTML = eta + ' anni';
document.getElementById('km-pass').innerHTML = km + ' km';
