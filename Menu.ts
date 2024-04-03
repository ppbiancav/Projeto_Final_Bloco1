import readlinesync =  require('readline-sync')

export function menu() {
    let opcao:number;
    
    while(true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("             ୨ৎ   UPPOPMAKEUP STORE    ୨ৎ            ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("          (1) ➨ ESCOLHER PRODUTO                    ");
        console.log("          (2) ➨ LISTAR TODOS OS PRODUTOS            ");
        console.log("          (3) ➨ CONSULTAR PRODUTO POR ID            ");
        console.log("          (4) ➨ ATUALIZAR PRODUTO                   ");
        console.log("          (5) ➨ DELETA PRODUTO                      ");
        console.log("          (0) ➨ SAIR                                ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 0) {
            console.log("Você saiu, volte sempre!");
            console.log("\nUPPOPMAKEUP STORE - EXPLOSAO DE CORES E CONFIANCA!");
            about()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nESCOLHER PRODUTO");
                keyPress();
                break;
            case 2:
                console.log("\nLISTAR TODOS OS PRODUTOS");
                keyPress();
                break;
            case 3:
                console.log("\nCONSULTAR PRODUTO POR ID");
                keyPress();
                break;
            case 4:
                console.log("\nATUALIZAR PRODUTO");
                keyPress();
                break;
            case 5:
                console.log("\nDELETAR PRODUTO");
                keyPress();
                break;
            default:
                console.log("\nOPÇÃO INVÁLIDA!");
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
}

function about(): void {
    console.log("\n**********************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Bianca Vasconcelos - biancappv@gmail.com");
    console.log("https://github.com/ppbiancav");
    console.log("\n************************************");
}

menu();