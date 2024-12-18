import readlinesync = require('readline-sync');
import { colors } from "./src/util/Colors";
import { SocioController } from './src/controller/SocioController';
import { SocioPremium } from './src/model/SocioPremium';
import { SocioPlus } from './src/model/SocioPlus';
import { SocioBasico } from './src/model/SocioBasico';

export function main() {

    let opcao, id, tipoPlano, tipoIngresso, precoPlano, valorIngresso, mesAniversario, premios, pontos: number;
    let nome, email: string;
    let planoSocio = ['Socio Premium+++', 'Socio Plus++', 'Socio Basico+'];

    // Instanciar um Objeto da Classe SocioController
    const socioController = new SocioController();

    // Objetos de Teste
    socioController.cadastrar(new SocioPremium(socioController.gerarId(), "Carlos", "carlos@gmail.com", 1, 1, 100, 100, 100, 2, 10));
    socioController.cadastrar(new SocioPlus(socioController.gerarId(), "Marcelo", "marcelo@gmail.com", 2, 2, 10, 10, 10, 3));
    socioController.cadastrar(new SocioBasico(socioController.gerarId(), "Marilene", "marilene@gmail.com", 3, 3, 1, 1, 1));

    while (true) {

        console.log("                                                       ");
        console.log(colors.bg.whitebright, colors.fg.bluestrong, "***************************************************  ");
        console.log("                                                       ");
        console.log("                    SÓCIO TORCEDOR                     ");
        console.log("                Seu Time Sempre + Forte!               ");
        console.log("                                                       ");
        console.log("  ***************************************************  ");
        console.log("                                                       ");
        console.log("             1 - Cadastrar Sócio                       ");
        console.log("             2 - Listar todos os Sócios Ativos         ");
        console.log("             3 - Listar Sócio pelo Id                  ");
        console.log("             4 - Atualizar Dados do Sócio              ");
        console.log("             5 - Deletar Sócio                         ");
        console.log("             6 - Listar Todos os Planos                ");
        console.log("             0 - Sair                                  ");
        console.log("                                                       ");
        console.log("  ***************************************************  ");
        console.log("                                                       ");

        console.log("Entre com a opção desejada:                           ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.yellowstrong, "\n-> Seja Sócio Torcedor - Seu Time Sempre + Forte!\n");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Socio: ");

                email = readlinesync.question("Digite o email do Socio: ");

                pontos = readlinesync.questionInt("Digite os pontos do Socio: ");

                tipoPlano = readlinesync.keyInSelect(planoSocio, "", { cancel: false }) + 1;

                switch (tipoPlano) {
                    case 1:
                        while (true) {
                            console.log(colors.fg.whitestrong, "\nMês do Seu Aniversário\n", colors.reset);
                            mesAniversario = readlinesync.questionInt("Digite o Mes do Seu Aniversario para o Recebimento dos Brindes: ");
                            if (mesAniversario >= 1 && mesAniversario <= 12) {
                                socioController.cadastrar(new SocioPremium(socioController.gerarId(), nome, email, tipoPlano, mesAniversario, mesAniversario, mesAniversario, mesAniversario, mesAniversario, mesAniversario));
                                break;
                            } else {
                                console.log(colors.fg.redstrong, "\nMês Inválido! Digite novamente...", colors.reset);
                            }
                        }

                        break;
                    case 2:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        socioController.cadastrar(new SocioPlus(socioController.gerarId(), nome, email, tipoPlano, pontos, pontos, pontos, pontos, pontos));
                        break;
                    case 3:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        socioController.cadastrar(new SocioBasico(socioController.gerarId(), nome, email, tipoPlano, pontos, pontos, pontos, pontos));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todos os Sócios Ativos\n", colors.reset);

                socioController.listarTodosSociosAtivos();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nListar Sócio pelo Id\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id: ");
                socioController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar Dados do Sócio\n", colors.reset);

                // Verifica se o Sócio existe
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                
                let socio = socioController.buscarNoArray(id);

                if (socio !== null) {

                    nome = readlinesync.question("Digite o novo Nome: ");

                    tipoPlano = socio.tipoPlano;

                    precoPlano = readlinesync.questionFloat("Digite o novo preco: ");

                    switch (tipoPlano) {
                        case 1:
                            mesAniversario = readlinesync.questionInt("Digite o novo mes: ");

                            socioController.atualizar(new SocioPremium(id, nome, nome, tipoPlano, precoPlano, precoPlano, precoPlano, precoPlano, precoPlano, mesAniversario));
                            break;
                        case 2:
                            premios = readlinesync.question("Digite o novo: ");

                            socioController.atualizar(new SocioPlus(id, nome, nome, tipoPlano, tipoPlano, precoPlano, tipoPlano, tipoPlano, precoPlano));
                            break;
                        case 3:
                            socioController.atualizar(new SocioBasico(id, nome, nome, tipoPlano, tipoPlano, precoPlano, tipoPlano, tipoPlano));
                            break;
                    }
                } else
                    console.log("Sócio não Encontrado!");


                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDeletar Sócio\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id: ");
                socioController.deletar(id);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nListar Todos os Planos\n", colors.reset);

                socioController.listarTodosPlanosDisponiveis();

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log(colors.bg.yellowbright, colors.fg.black, "                                                     ");
    console.log("  ***************************************************  ");
    console.log("   Projeto Desenvolvido por:                           ");
    console.log("   Carlos Henrique Nunes - teste@gmail.com             ");
    console.log("   https://github.com/CrMessiProgrammer                ");
    console.log("  ***************************************************  ");
    console.log("                                                     ", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();