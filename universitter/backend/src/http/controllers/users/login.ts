import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { LoginUseCase } from '@/services/login'

/**
 * Fetch Users by group id
 * @param {object} request.body - Body Object
 * @param {string} request.body.query- email
 * @example {"id_grupo":1}
 * @example POST localhost:3000/Users/fetchByGroupId
 */

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const findEmailBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })
  const data = findEmailBodySchema.parse(request.body)

  try {
    const usersRepository = new KnexUsersRepository()
    const findEmailUseCase = new LoginUseCase(usersRepository)
    const { user } = await findEmailUseCase.execute({
      login: data.email,
      password: data.password,
    })
    return reply.status(201).send({
      message: `User sussefully logged.`,
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
