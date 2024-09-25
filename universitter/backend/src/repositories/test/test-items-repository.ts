// import { ItemsRepository } from '../users-repository'
// import { TB_ITEM_PROLABORE } from '@/../@types/rmsKnex'
// import { GroupEmptyError } from '@/services/errors/group-empty-error'
// import { ItemNotExistentError } from '@/services/errors/item-not-existent-error'

// export class TestItemsRepository implements ItemsRepository {
//   private items: TB_ITEM_PROLABORE[] = []

//   async create(
//     idGroup: number,
//     descricao: string,
//     tipo: string,
//     valor: number,
//     DT_REFERENCIA: Date,
//   ): Promise<TB_ITEM_PROLABORE> {
//     const lastId = this.items.length + 1

//     const item = {
//       ID: lastId,
//       ID_GRUPO: idGroup,
//       DESCRICAO: descricao,
//       TIPO: tipo,
//       VALOR: valor,
//       DT_REFERENCIA,
//     }

//     this.items.push(item)

//     return item
//   }

//   async delete(id: number): Promise<TB_ITEM_PROLABORE> {
//     const item = await this.findById(id)

//     if (!item) throw new ItemNotExistentError()

//     this.items = this.items.filter((i) => i.ID !== item.ID)

//     return item
//   }

//   async findByGroup(id_group: number): Promise<TB_ITEM_PROLABORE[]> {
//     const items = this.items.filter((i) => i.ID_GRUPO === id_group)

//     if (!items) throw new GroupEmptyError()

//     return items
//   }

//   async findById(id: number): Promise<TB_ITEM_PROLABORE> {
//     const item = this.items.find((i) => i.ID === id)

//     if (!item) throw new ItemNotExistentError()

//     return item
//   }

//   async list(): Promise<TB_ITEM_PROLABORE[]> {
//     return this.items
//   }

//   async findByName(query: string): Promise<TB_ITEM_PROLABORE[]> {
//     const items = this.items.filter((i) => i.DESCRICAO.includes(query))

//     if (!items) throw new ItemNotExistentError()

//     return items
//   }

//   async update(
//     id: number,
//     id_group?: number,
//     description?: string,
//     type?: string,
//     value?: number,
//     reference_date?: Date,
//   ): Promise<TB_ITEM_PROLABORE> {
//     const item = await this.findById(id)

//     if (!item) throw new ItemNotExistentError()

//     if (id_group) item.ID_GRUPO = id_group
//     if (description) item.DESCRICAO = description
//     if (type) item.TIPO = type
//     if (value) item.VALOR = value
//     if (reference_date) item.DT_REFERENCIA = reference_date

//     return item
//   }
// }
