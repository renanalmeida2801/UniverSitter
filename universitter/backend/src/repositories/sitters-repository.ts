import { Sitter } from '@/../@types/postgresKnex'

export interface SitterRepository {
  create(
    user_id: number,
    descricao: string,
    disponibilidade: boolean,
    rating: number,
    endereco: string,
    cpf: string,
    foto: string
  ): Promise<Sitter>
  list(): Promise<Sitter[]>
  delete(id: number): Promise<Sitter>
  // deleteByGroupId(id_group: number): Promise<Sitter[]>
  findByUserId(id: number): Promise<Sitter>
  update(
    id: number,
    user_id?: number,
    descricao?: string,
    disponibilidade?: boolean,
    rating?: number,
    endereco?: string,
    cpf?: string,
    foto?: string
  ): Promise<Sitter>
}
