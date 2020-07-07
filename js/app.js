var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var tot = km*0.21;
var percMin = 20;
var percAnz = 40;

console.log(km);
console.log(eta);
console.log(tot);

if (eta<18) {
    document.getElementById('costotck').innerHTML = tot-(tot*percMin)/100;
} else if (eta>65) {
    document.getElementById('costotck').innerHTML = tot-((tot*percAnz)/100);
} else {
    document.getElementById('costotck').innerHTML = tot;
}
