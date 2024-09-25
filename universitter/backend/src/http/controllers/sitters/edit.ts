import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'
import { randomInt } from 'crypto'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { EditSitterUseCase } from '@/services/edit-sitters'

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
export async function editSitter(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const editBodySchema = z.object({
    user_id: z.number(),
    descricao: z.string(),
    disponibilidade: z.boolean().default(true),
    rating: z.number().default(0),
    endereco: z.string(),
    cpf: z.string(),
    image: z.string(),
    categoria: z.number(),
  })

  const data = editBodySchema.parse(request.body)
  console.log(data)

  try {
    const sittersRepository = new KnexSittersRepository()
    const editUseCase = new EditSitterUseCase(sittersRepository)
    const { sitter } = await editUseCase.execute({
      image: data.image,
      user_id: data.user_id,
      descricao: data.descricao,
      disponibilidade: data.disponibilidade,
      rating: data.rating,
      endereco: data.endereco,
      cpf: data.cpf,
      categoria: data.categoria,
    })
    return reply.status(201).send({
      message: `Sitter ${data.cpf} successfully registered!`,
      data: sitter,
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
