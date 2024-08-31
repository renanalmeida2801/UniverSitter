// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

export interface Usuario {
  id: number
  nome: string
  sobrenome: string
  email: string
  senha: string
  telefone: string
}
export interface Sitter {
  id: number,
  id_user: number,
  descricao: string,
  disponibilidade: boolean,
  rating: number,
  endereco: string,
  cpf: string
}

declare module 'knex/types/tables' {
  export interface Tables {
    Usuario: Usuario
    Sitter: Sitter
  }
}
