// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

export interface Usuario {
  id: number
  id_grupo: number
  nome: string
  sobrenome: string
  email: string
  senha: string
  telefone: string
}

declare module 'knex/types/tables' {
  export interface Tables {
    Usuario: Usuario
  }
}
