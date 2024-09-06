import { postgres } from '@/config/database'
import { SitterRepository } from '../sitters-repository'
import { Sitter } from 'postgresKnex'

export class KnexSittersRepository implements SitterRepository {
  async create(
    user_id: number,
    descricao: string,
    disponibilidade: boolean,
    rating: number,
    endereco: string,
    cpf: string,
    foto: string
  ): Promise<Sitter> {
    return await postgres('sitter').insert({
      user_id,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
      foto,
    })
  }

  async delete(id: number): Promise<Sitter> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sitter = await postgres('sitter').where('id', id).first()

    if (!sitter) throw new Error("Sitter doesn't exist")

    await postgres('sitter').where('ID', sitter?.id).del()

    return sitter
  }

  async findByUserId(id: number): Promise<Sitter> {
    return await postgres('sitter').where('user_id', id).first();
  }


  // TODO: Fix this after make groups.
  async deleteByGroupId(id_group: number): Promise<Sitter[]> {
    const sitters = await postgres('sitter').where('ID_GRUPO', id_group)

    if (!sitters) return []

    await postgres('sitter').where('ID_GRUPO', id_group).del()

    return sitters
  }

  // TODO: Fix this after make groups.
  async findByGroup(id_group: number): Promise<Sitter[]> {
    const sitters = await postgres('sitter').where('ID_GRUPO', id_group)

    if (!sitters) throw new Error("Group doesn't exist")

    return sitters
  }

  async findById(id: number): Promise<Sitter> {
    const sitter = await postgres('sitter').where('ID', id).first()

    if (!sitter) throw new Error("Sitter doesn't exist")

    return sitter
  }


  async list(): Promise<Sitter[]> {
    return await postgres('sitter')
  }

  async update(
    id: number,
    user_id: number,
    descricao: string,
    disponibilidade: boolean,
    rating: number,
    endereco: string,
    cpf: string,
  ): Promise<Sitter> {
    const sitter = await postgres('sitter').where('ID', id).first()

    if (!sitter) throw new Error("Sitter doesn't exist")

    return await postgres('sitter').where('ID', id).update({
      id,
      user_id,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
    })
  }
}
