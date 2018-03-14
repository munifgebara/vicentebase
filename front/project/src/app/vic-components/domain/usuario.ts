import { Grupo } from "./grupo";
import { Organizacao } from "./organizacao";

export interface Usuario {
    id: string;
    extra: string;
    version: number;
    login: string;
    senha: string;
    grupos: Grupo[];
    organizacao: Organizacao;
}

