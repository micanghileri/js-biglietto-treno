var name = prompt('Qual è il tuo nome?');
var surname = prompt('Qual è il tuo cognome?');
var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var tot = km*0.21;
var percMin = 20;
var percAnz = 40;
var result;

result = tot + '€';

if (eta<18) {
    result = (tot-(tot*percMin)/100) + '€';
} else if (eta>65) {
    result = (tot-(tot*percAnz)/100) + '€';
}

document.getElementById('name-pass').innerHTML = name;
document.getElementById('surname-pass').innerHTML = surname;
document.getElementById('eta-pass').innerHTML = eta + ' anni';
document.getElementById('km-pass').innerHTML = km + ' km';
document.getElementById('costotck').innerHTML = result;
