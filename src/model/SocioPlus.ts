import { Socio } from "./Socio";

export class SocioPlus extends Socio {

    private _premios: number;

	constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number, premios: number) {
        super(id, nome, email, tipoPlano, tipoIngresso, precoPlano, valorIngresso, pontos);
		this._premios = premios;
        precoPlano = 50;
	}

    public calcularValorIngresso(valor: number): void {
        valor = this.pontos * 0.20;
        this.valorIngresso = this.tipoIngresso;
        valor += this.valorIngresso;
        console.log(valor);
    }

    public visualizar() {
        super.visualizar();
        console.log(`Premio: ${this._premios}`);
    }


}