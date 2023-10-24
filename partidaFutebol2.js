let gols1;
let gols2;
let dif;
let partida;

gols1 = parseInt(prompt("quantos gols do BANGU? "));
gols2 = parseInt(prompt("quantos gols do MADUREIRA? "));

dif = (gols1 - gols2);

if (dif >= 1 && dif < 3 || dif <= -1 && dif > -3) {
    partida = "normal";
} else if (dif >= 3 || dif <= -3) {
    partida = "goleada";
} else if (dif = 0) {
    partida = "empate"
}

console.log("dif: " + dif)
console.log("status: " + partida)
        

