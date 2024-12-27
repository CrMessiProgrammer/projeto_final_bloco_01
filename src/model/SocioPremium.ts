import { colors } from "../util/Colors";
import { Socio } from "./Socio";

export class SocioPremium extends Socio {

    private _sorteios: boolean = true;
    private _brindeMesAniversario: boolean = true;

	constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number, sorteios: boolean, brindeMesAniversario: boolean) {
        super(id, nome, email, tipoPlano, tipoIngresso, precoPlano, valorIngresso, pontos);
		this._sorteios = sorteios;
        this._brindeMesAniversario = brindeMesAniversario;
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
        console.log(`Sorteios:`, colors.fg.green, ` ${this._sorteios}`, colors.reset);
        console.log(`Brindes:`, colors.fg.green, ` ${this._brindeMesAniversario}`, colors.reset);
    }

}