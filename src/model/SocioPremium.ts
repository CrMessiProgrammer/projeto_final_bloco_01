import { Socio } from "./Socio";

export class SocioPremium extends Socio {

    private _premios: number;
    private _brindeMesAniversario: number;

	constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number, premios: number, brindeMesAniversario: number) {
        super(id, nome, email, tipoPlano, tipoIngresso, precoPlano, valorIngresso, pontos);
		this._premios = premios;
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
        console.log(`Premio: ${this._premios}`);
        console.log(`Brinde: ${this._brindeMesAniversario}`);
    }

}