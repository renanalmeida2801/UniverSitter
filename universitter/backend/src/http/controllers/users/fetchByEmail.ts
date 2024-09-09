import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { FetchUsersByEmailUseCase } from '@/services/fetch-users-group'

/**
 * Fetch Users by group id
 * @param {object} request.body - Body Object
 * @param {number} request.body.id_grupo - Group ID
 * @example {"id_grupo":1}
 * @example POST localhost:3000/Users/fetchByGroupId
 */

export async function fetchUser(request: FastifyRequest, reply: FastifyReply) {
  const fetchUserBodySchema = z.object({
    email: z.string().email(),
  })

  const data = fetchUserBodySchema.parse(request.params)
  console.log(data)

  try {
    const usersRepository = new KnexUsersRepository()
    const fetchUserByEmailUseCase = new FetchUsersByEmailUseCase(usersRepository)
    const { user } = await fetchUserByEmailUseCase.execute({
      email: data.email,
    })
    return reply.status(201).send({
      message: `Users successfully fetched!`,
      data: user,
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
