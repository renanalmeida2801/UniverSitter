import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteUserUseCase } from '@/services/delete-users'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'

/**
 *  Delete an User
 * @param {object} request.body - User Object
 * @param {number} request.body.id - User ID
 * @example {"id":1}
 * @example DELETE localhost:3000/Users
 */
export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const deleteBodySchema = z.object({
    id: z.number(),
  })
  const data = deleteBodySchema.parse(request.body)

  try {
    const usersRepository = new KnexUsersRepository()
    const deleteUseCase = new DeleteUserUseCase(usersRepository)
    const { user } = await deleteUseCase.execute({
      id: data.id,
    })
    return reply
      .status(201)
      .send({ message: `User ${user.nome} successfully deleted!`, data: user })
  } catch (err) {}
}
