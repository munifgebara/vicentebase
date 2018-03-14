import { Usuario } from "./usuario";

export interface Token {
    id: string;
    extra: string;
    version: number;
    token: string;
    usuario: Usuario;
    expiracao: number;
}


