import { Sitter, UsuarioSitter } from '@/../@types/postgresKnex'

export interface SitterRepository {
  create(
    user_id: number,
    descricao: string,
    disponibilidade: boolean,
    rating: number,
    endereco: string,
    cpf: string,
    categoria: number,
    foto: string
  ): Promise<Sitter>
  list(): Promise<Sitter[]>
  delete(id: number): Promise<Sitter>
  // deleteByGroupId(id_group: number): Promise<Sitter[]>
  findByUserId(id: number): Promise<Sitter>
  getFullSitterInfo(): Promise<UsuarioSitter[]>
  findById(id: number): Promise<Sitter>
  update(
    user_id: number,
    descricao?: string,
    disponibilidade?: boolean,
    endereco?: string,
    cpf?: string,
    categoria?: number,
    foto?: string
  ): Promise<Sitter>
}
