import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { FetchUsersByGroupIdUseCase } from '@/services/fetch-users-group'

/**
 * Fetch Users by group id
 * @param {object} request.body - Body Object
 * @param {number} request.body.id_grupo - Group ID
 * @example {"id_grupo":1}
 * @example POST localhost:3000/Users/fetchByGroupId
 */

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const deleteBodySchema = z.object({
    id_grupo: z.number(),
  })
  const data = deleteBodySchema.parse(request.body)

  try {
    const usersRepository = new KnexUsersRepository()
    const deleteUseCase = new FetchUsersByGroupIdUseCase(usersRepository)
    const { users } = await deleteUseCase.execute({
      id_grupo: data.id_grupo,
    })
    return reply.status(201).send({
      message: `Users successfully fetched!`,
      data: users,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
