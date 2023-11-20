import { Filme } from "./filme.model";
import { Cliente } from "./cliente.model";

export interface Emprestimo {
    id?: number;
    clienteId: number;
    filmeId: number;
    filme?: Filme;
    cliente?: Cliente;
    dataEmprestimo?: string;
    dataDevolução?: string;
  }