import { postgres } from '@/database'
import { UsersRepository } from '../users-repository'
import { Usuario } from 'postgresKnex'

export class KnexUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<Usuario> {
    return await postgres('usuario').where('email', email).first()
  }

  async create(
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    telefone: string,
  ): Promise<Usuario> {
    return await postgres('usuario').insert({
      nome,
      sobrenome,
      email,
      senha,
      telefone,
    })
  }

  async delete(id: number): Promise<Usuario> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await postgres('usuario').where('id', id).first()

    if (!user) throw new Error("User doesn't exist")

    await postgres('usuario').where('user_id', user?.id).del()

    return user
  }

  // TODO: Fix this after make groups.
  async deleteByGroupId(id_group: number): Promise<Usuario[]> {
    const users = await postgres('usuario').where('user_id_GRUPO', id_group)

    if (!users) return []

    await postgres('usuario').where('user_id_GRUPO', id_group).del()

    return users
  }

  // TODO: Fix this after make groups.
  async findByGroup(id_group: number): Promise<Usuario[]> {
    const users = await postgres('usuario').where('user_id_GRUPO', id_group)

    if (!users) throw new Error("Group doesn't exist")

    return users
  }

  async findById(id: number): Promise<Usuario> {
    const user = await postgres('usuario').where('user_id', id).first()

    if (!user) throw new Error("User doesn't exist")

    return user
  }

  async findByName(description: string): Promise<Usuario[]> {
    const users = (await this.list()).filter((e) =>
      e.nome.includes(description),
    )

    if (!users) throw new Error("User doesn't exist")

    return users
  }

  async list(): Promise<Usuario[]> {
    return await postgres('usuario')
  }

  async update(
    id: number,
    id_group?: number,
    nome?: string,
    sobrenome?: string,
    email?: string,
    senha?: string,
    telefone?: string,
  ): Promise<Usuario> {
    const user = await postgres('usuario').where('user_id', id).first()

    if (!user) throw new Error("User doesn't exist")

    return await postgres('usuario').where('user_id', id).update({
      id_grupo: id_group,
      nome,
      sobrenome,
      email,
      senha,
      telefone,
    })
  }

  async changeSitterStatus(id: number, is_sitter: boolean): Promise<Usuario> {
    const user = await postgres('usuario').where('user_id', id).first()
    if (!user) throw new Error("User doesn't exist")
    return await postgres('usuario').where('user_id', id).update({
      is_sitter,
    })
  }
}
