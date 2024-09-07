import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { ListCompleteSitterUseCase } from '@/services/list-complete-sitters'

/**
 * List Users
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/Users?query=string
 */

export async function listCompleteSitter(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sittersRepository = new KnexSittersRepository()
  const listCompleteSitters = new ListCompleteSitterUseCase(sittersRepository)
  const { sitter } = await listCompleteSitters.execute()

  return reply.status(201).send({
    message: `Sitters successfully listed!`,
    sitters: sitter,
  })
}
