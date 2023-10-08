var nota1 = parseFloat(prompt("Primeira Nota: "));
var nota2 = parseFloat(prompt("Segunda Nota: "));

var media = (nota1 + nota2) / 2 ;

if (media <= 10 && media > 8.5) {
    alert("Aproveitamento: (A) " +"Sua Media: "+ media);
} else if (media <= 8.4 && media > 6.5) {
    alert("Aproveitamento: (B) " +"Sua Media: "+ media);
} else if (media <= 6.4 && media > 4.5) {
    alert("Aproveitamento: (C) " +"Sua Media: "+ media);
} else if (media <= 4.4 && media > 2.5) {
    alert("Aproveitamento: (D) " +"Sua Media: "+ media)
} else if (media <= 2.4 && media > 1) {
    alert("Aproveitamento: (E) " +"Sua Media: "+ media)
} else if (media <=1 && media > 0) {
    alert("Reprovado: (F) " +"Sua Media: "+ media)
} else {
    alert("Erro!*#$ DIGITE ALGO VALIDO")
}