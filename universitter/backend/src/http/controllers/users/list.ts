import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { ListUsersUseCase } from '@/services/list-users'

/**
 * List Users
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/Users?query=string
 */

export async function listUser(request: FastifyRequest, reply: FastifyReply) {
  const listBodySchema = z.object({
    query: z.string().default(''),
  })

  const data = listBodySchema.parse(request.query)

  const usersRepository = new KnexUsersRepository()
  const listUseCase = new ListUsersUseCase(usersRepository)
  const { users } = await listUseCase.execute(data)

  return reply.status(201).send({
    message: `Users successfully listed!`,
    data: users,
  })
}