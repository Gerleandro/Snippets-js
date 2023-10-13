
//variavel fatorial recebe numero
var fatorial = parseFloat(prompt("Digite o numero"))
//variavel resultado recebe variavel fatorial
var resultado = fatorial;
// laço de repertição FOR
// controle (variavel i recebe 1) enquanto (i for menor que fatorial) faz ( i mais 1)
for (var i = 1; i < fatorial; i++) {
 // resultado vezes resultado
    resultado *= i;
}
console.log(resultado)

//-----------------------------------------------------------------------------------------

var f = 5
var r = f

for (var indice = 1; indice < f; indice++) {
    r = ( indice * r)
}
console.log(r)