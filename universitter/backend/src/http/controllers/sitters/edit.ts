import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { EditSitterUseCase } from '@/services/edit-sitters'

/**
 *  MUDAR!!!!
 * @param {object} request.body - Body Object
 * @param {number} request.body.id - User ID
 * @param {number} request.body.id_grupo - Group ID
 * @param {string} request.body.nome - User name
 * @param {string} request.body.sobrenome - User last name
 * @param {string} request.body.email - User email
 * @param {string} request.body.senha - User password
 * @param {string} request.body.telefone - User phone number
 * @example {"id":1,"id_grupo":1,"nome":"string","sobrenome":"string","email":"string","senha":"string","telefone":"string"}
 * @example PUT localhost:3000/Users/edit:id
 */
export async function editSitter(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    id: z.number(),
    id_user: z.number().optional(),
    descricao: z.string().optional(),
    disponibilidade: z.boolean().optional(),
    rating: z.number().optional(),
    endereco: z.string().optional(),
    cpf: z.string().optional(),
  })
  const data = registerBodySchema.parse(request.body)

  try {
    const sittersRepository = new KnexSittersRepository()
    const editUseCase = new EditSitterUseCase(sittersRepository)
    const { sitter } = await editUseCase.execute({
      id: data.id,
      id_user: data.id_user,
      descricao: data.descricao,
      disponibilidade: data.disponibilidade,
      rating: data.rating,
      endereco: data.endereco,
      cpf: data.cpf,
    })
    return reply.status(201).send({
      message: `Sitter successfully edited!`,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
