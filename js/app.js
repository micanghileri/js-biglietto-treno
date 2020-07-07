var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var costokm = km*0.21;

console.log(costokm);

if (eta<18) {
    var scontomin = (costokm-((costokm*20)/100))
} else if (eta>65) {
    var scontoanz = (costokm-((costokm*40)/100))
}

console.log(scontomin, scontoanz);
