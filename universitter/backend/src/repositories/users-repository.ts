import { Usuario } from '@/../@types/postgresKnex'

export interface UsersRepository {
  create(
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    telefone: string,
  ): Promise<Usuario>
  list(): Promise<Usuario[]>
  findByName(query: string): Promise<Usuario[]>
  findByGroup(id_group: number): Promise<Usuario[]>
  delete(id: number): Promise<Usuario>
  findByEmail(email: string): Promise<Usuario>
  findUserIdByEmail(email: String): Promise<Usuario>
  // deleteByGroupId(id_group: number): Promise<Usuario[]>
  changeSitterStatus(id: number, is_sitter: boolean): Promise<Usuario>
  update(
    id: number,
    id_grupo?: number,
    nome?: string,
    sobrenome?: string,
    email?: string,
    senha?: string,
    telefone?: string,
  ): Promise<Usuario>
}
