import { Socio } from "../model/Socio";

export interface SocioRepository {

    // Métodos do CRUD (Create, Read, Update e Delete)
    procurarPorId(id: number): void;
    listarTodosSociosAtivos(): void;
    cadastrar(socio: Socio): void;
    atualizar(socio: Socio): void;
    deletar(id: number): void;
    listarTodosPlanosDisponiveis(): void;

}