import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { ListSittersUseCase } from '@/services/list-sitters'

/**
 * List Users
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/Users?query=string
 */

export async function listSitter(request: FastifyRequest, reply: FastifyReply) {
  const sittersRepository = new KnexSittersRepository()
  const listUseCase = new ListSittersUseCase(sittersRepository)
  const { sitter } = await listUseCase.execute()

  return reply.status(201).send({
    message: `Sitters successfully listed!`,
    data: sitter,
  })
}
