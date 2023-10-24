let gols1;
let gols2;
let dif;

gols1 = parseInt(prompt("quantos gols do BANGU? "));
gols2 = parseInt(prompt("quantos gols do MADUREIRA? "));

if ( gols1 > gols2) {
    dif = (gols1 - gols2);
} else {
    dif = (gols2 - gols1);
}

console.log('diferença: ' + dif);
    switch (dif) {
        case 0: 
            console.log('empate');
        case 1, 2, 3: 
            console.log("normal");
        case 4, 5, 6, 7:
            console.log('goleada');
    };
        

