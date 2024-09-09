import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexFeedbackRepository } from '@/repositories/knex/knex-feedback-repository'
import { DeleteFeedbackUseCase } from '@/services/delete-feedbacks'

/**
 *  Delete an User
 * @param {object} request.body - User Object
 * @param {number} request.body.id - User ID
 * @example {"id":1}
 * @example DELETE localhost:3000/Users
 */
export async function DeleteFeedback(request: FastifyRequest, reply: FastifyReply) {
  const deleteBodySchema = z.object({
    feedback_id: z.number(),
  })
  const data = deleteBodySchema.parse(request.body)

  try {
    const feedbackRepository = new KnexFeedbackRepository()
    const deleteFeedbackCase = new DeleteFeedbackUseCase(feedbackRepository)
    const { feedback } = await deleteFeedbackCase.execute({
      feedback_id: data.feedback_id,
    })
    return reply
      .status(201)
      .send({ message: `Feedback ${feedback.feedback_id} successfully deleted!`, data: feedback })
  } catch (err) {}
}
