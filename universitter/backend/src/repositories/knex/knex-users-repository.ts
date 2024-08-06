import { postgres } from '@/database'
import { UsersRepository } from '../users-repository'
import { Usuario } from 'postgresKnex'

export class KnexUsersRepository implements UsersRepository {
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

    await postgres('usuario').where('ID', user?.id).del()

    return user
  }

  // TODO: Fix this after make groups.
  async deleteByGroupId(id_group: number): Promise<Usuario[]> {
    const users = await postgres('usuario').where('ID_GRUPO', id_group)

    if (!users) return []

    await postgres('usuario').where('ID_GRUPO', id_group).del()

    return users
  }

  // TODO: Fix this after make groups.
  async findByGroup(id_group: number): Promise<Usuario[]> {
    const users = await postgres('usuario').where('ID_GRUPO', id_group)

    if (!users) throw new Error("Group doesn't exist")

    return users
  }

  async findById(id: number): Promise<Usuario> {
    const user = await postgres('usuario').where('ID', id).first()

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
    const user = await postgres('usuario').where('ID', id).first()

    if (!user) throw new Error("User doesn't exist")

    return await postgres('usuario').where('ID', id).update({
      id_grupo: id_group,
      nome,
      sobrenome,
      email,
      senha,
      telefone,
    })
  }
}
