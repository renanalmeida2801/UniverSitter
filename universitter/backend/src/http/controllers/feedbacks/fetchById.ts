import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexFeedbackRepository } from '@/repositories/knex/knex-feedback-repository'
import { GetFeedbackBySitterIdUseCase } from '@/services/get-feedback-by-id'
/**
 * Get Sitter By Id
 * @param {object} request.query - Query Object
 * @param {string} request.query.query - Query string
 * @example {"query":"string"}
 * @example GET localhost:3000/sitters/:id
 */

export async function getFeedbackById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchBodySchema = z.object({
    id: z.string(),
  })

  console.log("teste");
  const data = fetchBodySchema.parse(request.params)
  const feedbackRepository = new KnexFeedbackRepository()
  const getFeedbackByIdUseCase = new GetFeedbackBySitterIdUseCase(feedbackRepository)
  const { feedback } = await getFeedbackByIdUseCase.execute(Number(data.id))

  return reply.status(200).send({
    data: feedback,
  })
}
