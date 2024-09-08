import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateFeedbackUseCase } from '@/services/create-feedback'
import { KnexFeedbackRepository } from '@/repositories/knex/knex-feedback-repository'
import { randomInt } from 'crypto'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'

/**
 * Register a new User
 * @param {object} request.body - Body Object
 * @param {number} request.body.id_grupo - Group ID
 * @param {string} request.body.nome - User name
 * @param {string} request.body.sobrenome - User last name
 * @param {string} request.body.email - User email
 * @param {string} request.body.senha - User password
 * @param {string} request.body.telefone - User phone number
 * @example {"id_grupo":1,"nome":"string","sobrenome":"string","email":"string","senha":"string","telefone":"string"}
 * @example POST localhost:3000/Users
 */
export async function registerFeedback(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    feedback_id: z.number(),
    comment: z.string(),
    rating: z.number().default(0),
    date: z.date(),
    sitter_id: z.number(),
    user_id: z.number(),
  })

  const data = registerBodySchema.parse(request.body)

  try {
    const feedbackRepository = new KnexFeedbackRepository()
    const registerUseCase = new CreateFeedbackUseCase(
      feedbackRepository
    )
    const { feedback } = await registerUseCase.execute({
      feedback_id: data.feedback_id,
      comment: data.comment,
      rating: data.rating,
      date: data.date,
      sitter_id: data.sitter_id,
      user_id: data.user_id
    })
    return reply.status(201).send({
      message: `Feedback ${data.feedback_id} successfully registered!`,
      data: feedback,
    })
  } catch (err) {
    console.log(err)
    if (err instanceof Error) {
      console.log(err)
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
