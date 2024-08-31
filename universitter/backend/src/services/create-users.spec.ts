// import { expect, it, describe, beforeEach } from 'vitest'
// import { CreateItemUseCase } from './create-users'
// import { ItemsRepository } from '@/repositories/items-repository'
// import { TestItemsRepository } from '@/repositories/test/test-items-repository'

// let itemsRepository: ItemsRepository
// let sut: CreateItemUseCase

// describe('Item Register Use Case', () => {
//   beforeEach(() => {
//     itemsRepository = new TestItemsRepository()
//     sut = new CreateItemUseCase(itemsRepository)
//   })

//   it('should be able to create items', async () => {
//     const { item } = await sut.execute({
//       idGroup: 1,
//       descricao: 'Test',
//       tipo: 'Test',
//       valor: 1,
//       DT_REFERENCIA: new Date(),
//     })

//     console.log(item)

//     expect(item.ID).toBe(1)
//   })
//   it('should be able to create more than one item', async () => {
//     await itemsRepository.create(1, 'Test', 'Test', 1, new Date())

//     const { item } = await sut.execute({
//       idGroup: 1,
//       descricao: 'Test1',
//       tipo: 'Test',
//       valor: 1,
//       DT_REFERENCIA: new Date(),
//     })

//     expect(item.ID).toBe(2)
//   })
// })
