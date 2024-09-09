import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { GetSitterByIdUseCase } from '@/services/get-sitter-by-id'
/**
 * Get Sitter By Id
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/sitters/:id
 */

export async function getSitterById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsSchema = z.object({
    id: z.string(),
  })

  const data = paramsSchema.parse(request.params)
  const sittersRepository = new KnexSittersRepository()
  const getSitterByIdUseCase = new GetSitterByIdUseCase(sittersRepository)
  const { sitter } = await getSitterByIdUseCase.execute(Number(data.id))

  return reply.status(200).send({
    data: sitter,
  })
}
