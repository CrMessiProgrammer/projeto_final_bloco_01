import { Socio } from "../model/Socio";
import { SocioRepository } from "../repository/SocioRepository";
import { colors } from "../util/Colors";

export class SocioController implements SocioRepository {

    listaSocios = new Array<Socio>();

    public id: number = 0;

    procurarPorId(id: number): void {
        let buscaSocio = this.buscarNoArray(id);

        if (buscaSocio != null) {
            buscaSocio.visualizar();
        } else
            console.log(colors.fg.red, "\nO Socio Id: " + id
                + " não foi encontrado!", colors.reset);
    }

    listarTodosSociosAtivos(): void {
        this.listaSocios.forEach(socio => socio.visualizar());
    }

    cadastrar(socio: Socio): void {
        this.listaSocios.push(socio);
        console.log("\nO Socio foi cadastrado com sucesso!");
    }

    atualizar(socio: Socio): void {
        let buscaSocio = this.buscarNoArray(socio.id);

        if (buscaSocio != null) {
            this.listaSocios[this.listaSocios.indexOf(buscaSocio)] = socio;
            console.log(colors.fg.green, "\nO Socio Id: " + socio.id + " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Socio Id: " + socio.id + " não foi encontrado!", colors.reset);
    }

    deletar(id: number): void {
        let buscaSocio = this.buscarNoArray(id);

        if (buscaSocio != null) {
            this.listaSocios.splice(this.listaSocios.indexOf(buscaSocio), 1);
            console.log(colors.fg.green, "\nO Socio Id: " + id + " foi apagado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Socio Id: " + id + " não foi encontrado!", colors.reset);
    }

    listarTodosPlanosDisponiveis(): void {
        console.log(colors.fg.whitestrong, "\n(Sócio Premium+++) -> Preço: R$ 100,00 -> Benefícios: Desconto no Ingresso + Prêmios + Brinde no Mês do Seu Aniversário", colors.reset);

        console.log(colors.fg.whitestrong, "\n(Sócio Plus++) -> Preço: R$ 50,00 -> Benefícios: Desconto no Ingresso + Prêmios", colors.reset);

        console.log(colors.fg.whitestrong, "\n(Sócio Básico+) -> Preço: R$ 20,00 -> Benefícios: Desconto no Ingresso", colors.reset);
    }

    public gerarId(): number {
        return ++this.id;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(id: number): Socio | null {

        for (let socio of this.listaSocios) {
            if (socio.id === id)
                return socio;
        }

        return null;
    }

}