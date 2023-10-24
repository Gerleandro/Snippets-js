// outside the console:

// while (true) {
    
// var cont = parseInt(prompt(`
// ===============
//      Menu     
// ===============
//  [1] De 1 a 10 
//  [2] De 10 a 1 
//  [3] Sair      
// ===============
// `));
    
// switch (cont) {
//     case 1:
//         while (cont <= 10) {
//             console.log(cont + "..");
//             cont++;
//         } continue;
//     case 2:
//         var i = 10;
//         while (i >= 1) {
//             console.log(i + "..");
//             i--
//         } continue;
//     case 3:
//         console.log("SAINDO..");
//         break; 
//     default:
//         console.log("Digite um dos menus [1] [2] [3]");
        
// };
//     break;
// }





// via the console

do {
    console.log(" ");
    console.log("=================");
    console.log("|      Menu     |");
    console.log("=================");
    console.log("| [1] De 1 a 10 |");
    console.log("| [2] De 10 a 1 |");
    console.log("| [3] Sair      |");
    console.log("=================");
    console.log(" ");
    
    cont = parseInt(prompt("Escolha uma opção: "));
    
    switch (cont) {
        case 1:
            cont = 1;
            while (cont <= 10) {
                console.log(cont + "..");
                cont++;
            }
            break;
        case 2:
            cont = 10;
            while (cont >= 1) {
                console.log(cont + "..");
                cont--;
            }
            break;
        case 3:
            cont = 3;
            console.log("SAINDO..");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (cont !== 3);