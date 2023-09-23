var peso = parseFloat(prompt("digite seu peso: "));
var altura = parseFloat(prompt("digite sua altura: "))/100;
var imc = peso / (altura * altura);
console.log(imc)

if (imc < 18.5) {
    alert("voce esta abaixo do peso")
} else if (imc > 18.6) {
    alert("voce esta no peso ideial")
} else if (imc > 24.6) {
    alert("voce esta levemente acima do peso")
} else if (imc > 29.9) {
    alert("voce esta em obesidade grau I")
} else if (imc > 34.9) {
    alert("voce esta em obesidade grau II")
} else if (imc > 39.9) {
    alert("voce esta em obesidade grau III")
}



