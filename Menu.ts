import readlinesync =  require('readline-sync')

import { ProdutoController } from "./src/controller/ProdutoController";
import { Batom } from "./src/model/Batom";
import { Paleta } from "./src/model/Paleta";
import { colors } from './src/util/Color';


export function menu() {

    let opcao, id, tipo, preco: number;
    let nome, labial, brilho: string;
    let tipoProduto = ['Labial', 'Paleta'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Batom(produtoController.gerarId(),
        "Labial", 1, 50.00, "Gloss"));

    produtoController.cadastrar(new Paleta(produtoController.gerarId(),
        "Glitter", 2, 40.00, "Veludo"));
    
    while(true) {
        console.log(colors.bg.black, colors.fg.yellow,
        "*****************************************************");
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
        console.log("                                                     ",
            colors.reset);
        

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 0) {
            console.log("\nVocê saiu, volte sempre!");
            console.log("\nUPPOPMAKEUP STORE - EXPLOSAO DE CORES E CONFIANCA!\n");
            about()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        labial = readlinesync.question("Digite o tipo Labial do Batom: ");
                        produtoController.cadastrar(new Batom(produtoController.gerarId(),
                            nome, tipo, preco, labial));
                        break;
                    case 2:
                        brilho = readlinesync.question("Digite o brilho da Paleta: ");
                        produtoController.cadastrar(new Paleta(produtoController.gerarId(),
                            nome, tipo, preco, brilho));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                labial = readlinesync.question("Digite o tipo Labial do Batom: ");
                                produtoController.atualizar(new Batom(id,
                                    nome, tipo, preco, labial));
                                break;
                            case 2:
                                brilho = readlinesync.question("Digite o brilho da Paleta: ");
                                produtoController.atualizar(new Paleta(id,
                                    nome, tipo, preco, brilho));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
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