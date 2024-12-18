export abstract class Socio {

    private _id: number;
    private _nome: string;
    private _email: string;
    private _tipoPlano: number;
    private _tipoIngresso: number;
    private _precoPlano: number;
    private _valorIngresso: number;
    private _pontos: number;

    constructor(id: number, nome: string, email: string, tipoPlano: number, tipoIngresso: number, precoPlano: number, valorIngresso: number, pontos: number) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._tipoPlano = tipoPlano;
        this._tipoIngresso = tipoIngresso;
        this._precoPlano = precoPlano;
        this._valorIngresso = valorIngresso;
        this._pontos = pontos;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get email(): string {
        return this._email;
    }

    public get tipoPlano(): number {
        return this._tipoPlano;
    }

    public get tipoIngresso(): number {
        return this._tipoIngresso;
    }

    public get precoPlano(): number {
        return this._precoPlano;
    }

    public get valorIngresso(): number {
        return this._valorIngresso;
    }

    public get pontos(): number {
        return this._pontos;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set email(value: string) {
        this._email = value;
    }

    public set tipoPlano(value: number) {
        this._tipoPlano = value;
    }

    public set tipoIngresso(value: number) {
        this._tipoIngresso = value;
    }

    public set precoPlano(value: number) {
        this._precoPlano = value;
    }

    public set valorIngresso(value: number) {
        this._valorIngresso = value;
    }

    public set pontos(value: number) {
        this._pontos = value;
    }

    // Método Auxiliar
    public calcularValorIngresso(valor: number): void {
        valor = this.pontos * 0.10;
        this.valorIngresso = this.tipoIngresso;
        valor += this.valorIngresso;
        console.log(valor);
    }

    public visualizar(): void {

        let tipo: string;

        switch (this._tipoPlano) {
            case 1:
                tipo = "Sócio Premium+++";
                break;
            case 2:
                tipo = "Sócio Plus++";
                break;
            case 3:
                tipo = "Sócio Básico+";
                break;
            default:
                tipo = "\nTipo Inválido";
                break;
        }

        switch (this._tipoIngresso) {
            case 1:
                tipo = "Camarote";
                this.valorIngresso = + 1000;
                break;
            case 2:
                tipo = "Cadeira Cativa";
                this.valorIngresso = + 500;
                break;
            case 3:
                tipo = "Cadeira Comum";
                this.valorIngresso = + 80;
                break;
            default:
                tipo = "\nTipo Inválido";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Sócio");
        console.log("*****************************************************");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Email: ${this._email}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Pontos Totais: ${this._pontos}`);
    }

}