import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { GetSitterByUserIdUseCase } from '@/services/get-sitter-by-user-id'
/**
 * Get Sitter By Id
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/sitters/:id
 */

export async function getSitterByUserId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsSchema = z.object({
    id: z.string(),
  })

  const data = paramsSchema.parse(request.params)
  const sittersRepository = new KnexSittersRepository()
  const getSitterByUserIdUseCase = new GetSitterByUserIdUseCase(sittersRepository)
  const { sitter } = await getSitterByUserIdUseCase.execute(Number(data.id))

  return reply.status(200).send({
    data: sitter,
  })
}
