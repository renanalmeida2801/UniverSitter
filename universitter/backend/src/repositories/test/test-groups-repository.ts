import { GroupNotExistentError } from '@/services/errors/group-not-existent-error'
import { GroupsRepository } from '../groups-repository'
import { TB_GRUPO_PROLABORE, TB_ITEM_PROLABORE } from '@/../@types/rmsKnex'
import { GroupAlreadyExistsError } from '@/services/errors/group-alrealdy-exists-error'

export class TestGroupRepository implements GroupsRepository {
  private groups: TB_GRUPO_PROLABORE[] = []
  private items: TB_ITEM_PROLABORE[] = []

  async create(descricao: string, tipo: string): Promise<TB_GRUPO_PROLABORE> {
    const groupAlreadyExists = (await this.findByName(descricao))[0]

    if (groupAlreadyExists) throw new GroupAlreadyExistsError()

    const lastId = this.groups.length + 1

    const group = {
      ID: lastId,
      DESCRICAO: descricao,
      TIPO: tipo,
    }

    this.groups.push(group)

    return group
  }

  async delete(
    id: number,
  ): Promise<{ group: TB_GRUPO_PROLABORE; items: TB_ITEM_PROLABORE[] }> {
    const group = await this.findById(id)
    const items = this.items.filter((i) => i.ID_GRUPO === id)

    if (!group) throw new GroupNotExistentError()

    this.groups = this.groups.filter((g) => g.ID !== group.ID)

    this.items = this.items.filter((i) => i.ID_GRUPO !== group.ID)

    return {
      group,
      items,
    }
  }

  async findById(id: number): Promise<TB_GRUPO_PROLABORE> {
    const group = this.groups.find((g) => g.ID === id)

    if (!group) throw new GroupNotExistentError()

    return group
  }

  async findByName(description: string): Promise<TB_GRUPO_PROLABORE[]> {
    const groups = this.groups.filter((g) => g.DESCRICAO.includes(description))

    if (!groups) throw new GroupNotExistentError()

    return groups
  }

  async list(): Promise<TB_GRUPO_PROLABORE[]> {
    return this.groups
  }

  async update(
    id: number,
    description?: string | undefined,
    type?: string | undefined,
  ): Promise<TB_GRUPO_PROLABORE> {
    const group = await this.findById(id)

    if (!group) throw new GroupNotExistentError()

    if (description) group.DESCRICAO = description
    if (type) group.TIPO = type

    return group
  }
}
