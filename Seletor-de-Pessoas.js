let sexo, aspecto, opcao;
let idade, aparencia, masculino, ferminino;
masculino = 0;
ferminino = 0;
do {

console.log("========================");
console.log("   SELETOR DE PESSOAS   ");
console.log("========================");

sexo = prompt(" Qual o Sexo? [M/F]");

if (sexo == "M" || sexo == "m") {
    masculino = masculino+1;
} else if (sexo == "F" || sexo == "f") {
    ferminino = ferminino+1;
};

idade = parseInt(prompt(" Qual a Idade?"));

console.log("------------------------")
console.log(" Qual a cor do Cabelo?");
console.log(" [1] Preto");
console.log(" [2] Castanho");
console.log(" [3] Loiro");
console.log(" [4] Ruivo");
idade = parseInt(prompt("Qual a cor do Cabelo?"));

switch (idade) {
    case 1:
        aspecto = "Preto";
        console.log(aspecto);
    case 2:
        aspecto = "Castanho";
        console.log(aspecto);
    case 3:
        aspecto = "Loiro";
        console.log(aspecto);
    case 4:
        aspecto = "Ruivo";
        console.log(aspecto);
};

opcao = prompt(" Quer Continuar? [S/N]");

} while (opcao == "s" || opcao == "S") {
    console.log("-----------------------");
    console.log("    RESULTADO FINAL    ");
    console.log("-----------------------");
    console.log("Total de Homens: ", masculino);
    console.log("Total de Mulheres: ", ferminino); 
};