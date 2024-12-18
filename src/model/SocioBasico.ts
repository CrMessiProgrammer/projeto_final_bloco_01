import { Socio } from "./Socio";

export class SocioBasico extends Socio {

	constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number) {
        super(id, nome, email, tipoPlano, tipoIngresso, precoPlano, valorIngresso, pontos);
        precoPlano = 20;
    }

    public visualizar() {
        super.visualizar();
    }
}