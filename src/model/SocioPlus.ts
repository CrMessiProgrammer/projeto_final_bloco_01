import { colors } from "../util/Colors";
import { Socio } from "./Socio";

export class SocioPlus extends Socio {

    private _sorteios: boolean = true;

	constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number, sorteios: boolean) {
        super(id, nome, email, tipoPlano, tipoIngresso, precoPlano, valorIngresso, pontos);
		this._sorteios = sorteios;
        precoPlano = 80;
	}

    public calcularValorIngresso(valor: number): void {
        valor = this.pontos * 0.30;
        this.valorIngresso = this.tipoIngresso;
        valor += this.valorIngresso;
        console.log(valor);
    }

    public visualizar() {
        super.visualizar();
        console.log(`Sorteios:`, colors.fg.green, `${this._sorteios}`, colors.reset);
        console.log(`Brindes:`, colors.fg.red, `Não Disponível no Plano Atual`, colors.reset);
    }

}