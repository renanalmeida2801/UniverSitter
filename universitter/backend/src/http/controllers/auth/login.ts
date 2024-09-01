import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { AuthLogin } from '@/services/auth-login'

/**
 * MUDA ISSO
 * List Users
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/Users?query=string
 */

export async function login(request: FastifyRequest, reply: FastifyReply) {

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const data = loginSchema.parse(request.body)

  const userRepository = new KnexUsersRepository()
  const loginUseCase = new AuthLogin(userRepository)
  const { user, token } = await loginUseCase.login(data)

  return reply.status(200).send({
    message: `Successfully logged!`,
    user,
    token,
  })
}

