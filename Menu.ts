import readlinesync = require('readline-sync');
import { colors } from "./src/util/Colors";

export function main() {

    let opcao, id, tipo, preco, valorIngresso, sorteio, mesAniversario: number;
    let nome, email, beneficio: string;
    let planoSocio = ['Socio Premium+++', 'Socio Plus++', 'Socio Basico+'];

    // Instanciar um Objeto da Classe SocioController

    // Objetos de Teste

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

                tipo = readlinesync.keyInSelect(planoSocio, "", { cancel: false }) + 1;

                switch (tipo) {
                    case 1:
                        while (true) {
                            console.log(colors.fg.whitestrong, "\nMês do Seu Aniversário\n", colors.reset);
                            mesAniversario = readlinesync.questionInt("Digite o Mes do Seu Aniversario para o Recebimento dos Brindes: ");
                            if (mesAniversario >= 1 && mesAniversario <= 12) {
                                // Atribuir mesAniversario no Cadastro (socio.cadastrar(new SocioPremium+++(atribustos, ..., mesAniversario)
                                break;
                            } else {
                                console.log(colors.fg.redstrong, "\nMês Inválido! Digite novamente...", colors.reset);
                            }
                        }

                        break;
                    case 2:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        break;
                    case 3:
                        console.log(colors.fg.whitestrong, "\nCadastrar Sócio\n", colors.reset);
                        console.log(colors.fg.whitestrong, `${nome} seu Plano: ${tipo} -> Valor: ${preco}`, colors.reset);
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todos os Sócios Ativos\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nListar Sócio pelo Id\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id: ");

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar Dados do Sócio\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Socio: ");

                // Verifica se o Sócio existe

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDeletar Sócio\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id: ");

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nListar Todos os Planos\n", colors.reset);

                console.log(colors.fg.whitestrong, "\n(Sócio Premium+++) -> Preço: R$ 100,00 -> Benefícios: Desconto no Ingresso + Sorteios + Brinde no Mês do Seu Aniversário", colors.reset);
                console.log(colors.fg.whitestrong, "\n(Sócio Plus++) -> Preço: R$ 50,00 -> Benefícios: Desconto no Ingresso + Sorteios", colors.reset);
                console.log(colors.fg.whitestrong, "\n(Sócio Básico+) -> Preço: R$ 20,00 -> Benefícios: Desconto no Ingresso", colors.reset);

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