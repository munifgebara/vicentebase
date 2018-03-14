
export interface Organizacao {
    id: string;
    extra: string;
    version: number;
    nome: string;
    codigo: string;
    superior?: Organizacao;
}

