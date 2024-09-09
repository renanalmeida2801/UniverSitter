// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

export interface Usuario {
  user_id: number
  nome: string
  sobrenome: string
  email: string
  senha: string
  telefone: string
  is_sitter: boolean
}
export interface Sitter {
  id: number
  user_id: number
  descricao: string
  disponibilidade: boolean
  rating: number
  endereco: string
  cpf: string
  foto: string
}
export interface Feedback{
  feedback_id : number
  comment: string
  rating: number
  date: Date
  sitter_id: number
  user_id: number
}

export interface UsuarioSitter extends Usuario, Sitter { }
export interface UsuarioSitter extends Usuario, Sitter { }

declare module 'knex/types/tables' {
  export interface Tables {
    Usuario: Usuario
    Sitter: Sitter
  }
}
