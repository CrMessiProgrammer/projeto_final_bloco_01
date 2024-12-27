import readlinesync = require('readline-sync');
import { colors } from "./src/util/Colors";
import { SocioController } from './src/controller/SocioController';
import { SocioPremium } from './src/model/SocioPremium';
import { SocioPlus } from './src/model/SocioPlus';
import { SocioBasico } from './src/model/SocioBasico';

export function main() {

    let opcao, id, tipoPlano, tipoIngresso, precoPlano, valorIngresso, mes, pontos: number;
    let nome, email: string;
    let sorteios, mesAniversario: boolean;
    let planoSocio = ['Socio Premium+++', 'Socio Plus++', 'Socio Basico+'];

    // Instanciar um Objeto da Classe SocioController
    const socioController = new SocioController();

    // Objetos de Teste
    socioController.cadastrar(new SocioPremium(socioController.gerarId(), "Carlos", "carlos@gmail.com", 1, 1, 100, 100, 100, true, true));
    socioController.cadastrar(new SocioPlus(socioController.gerarId(), "Marcelo", "marcelo@gmail.com", 2, 2, 10, 10, 50, true));
    socioController.cadastrar(new SocioBasico(socioController.gerarId(), "Marilene", "marilene@gmail.com", 3, 3, 1, 1, 0, 2, 30));

    while (true) {

        console.log("                                                       ");
        console.log(colors.bg.redbright, colors.fg.blackstrong, "***************************************************  ");
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
            console.log(colors.fg.bluestrong, "\n-> Seja Sócio Torcedor - Seu Time Sempre + Forte!\n");
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
                            mes = readlinesync.questionInt("Digite o Mes do Seu Aniversario para o Recebimento dos Brindes: ");
                            if (mes >= 1 && mes <= 12) {
                                socioController.cadastrar(new SocioPremium(socioController.gerarId(), nome, email, tipoPlano, mes, mes, mes, mes, true, true));
                                break;
                            } else {
                                console.log(colors.fg.redstrong, "\nMês Inválido! Digite novamente...", colors.reset);
                            }
                        }

                        break;
                    case 2:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        socioController.cadastrar(new SocioPlus(socioController.gerarId(), nome, email, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, true));
                        break;
                    case 3:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        socioController.cadastrar(new SocioBasico(socioController.gerarId(), nome, email, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\nListar todos os Sócios Ativos\n");
                
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

                    email = readlinesync.question("Digite o novo Email: ");

                    tipoPlano = socio.tipoPlano;

                    precoPlano = readlinesync.questionFloat("Digite o novo preco: ");

                    switch (tipoPlano) {
                        case 1:
                            mes = readlinesync.questionInt("Digite o novo mes: ");

                            socioController.atualizar(new SocioPremium(id, nome, nome, tipoPlano, precoPlano, precoPlano, precoPlano, precoPlano, true, true));
                            break;
                        case 2:
                            sorteios = readlinesync.question("Digite o novo: ");

                           socioController.atualizar(new SocioPlus(id, nome, email, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, true));
                            break;
                        case 3:
                            socioController.atualizar(new SocioBasico(id, nome, email, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano, tipoPlano));
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
    console.log(colors.bg.black, colors.fg.yellowstrong, "                                                     ");
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