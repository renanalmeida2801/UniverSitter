import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteSitterUseCase } from '@/services/delete-sitters'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'

/**
 *  Delete an User
 * @param {object} request.body - User Object
 * @param {number} request.body.id - User ID
 * @example {"id":1}
 * @example DELETE localhost:3000/Users
 */
export async function deleteSitter(request: FastifyRequest, reply: FastifyReply) {
  const deleteBodySchema = z.object({
    id: z.number(),
  })
  const data = deleteBodySchema.parse(request.body)

  try {
    const sittersRepository = new KnexSittersRepository()
    const deleteSitterCase = new DeleteSitterUseCase(sittersRepository)
    const { sitter } = await deleteSitterCase.execute({
      id: data.id,
    })
    return reply
      .status(201)
      .send({ message: `Sitter ${sitter.id} successfully deleted!`, data: sitter })
  } catch (err) {}
}
