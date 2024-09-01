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
  findByEmail(email: string): Promise<Usuario | null>
  // deleteByGroupId(id_group: number): Promise<Usuario[]>

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
