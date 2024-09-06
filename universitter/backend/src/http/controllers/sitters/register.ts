import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateSitterUseCase } from '@/services/create-sitters'
import { KnexSittersRepository } from '@/repositories/knex/knex-sitters-repository'

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
export async function registerSitter(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    user_id: z.number(),
    descricao: z.string(),
    disponibilidade: z.boolean().default(true),
    rating: z.number().default(0),
    endereco: z.string(),
    cpf: z.string(),
    image: z.string(),
  })

  const data = registerBodySchema.parse(request.body)

  try {
    const sittersRepository = new KnexSittersRepository()
    const registerUseCase = new CreateSitterUseCase(sittersRepository)
    const { sitter } = await registerUseCase.execute({
      image: data.image,
      user_id: data.user_id,
      descricao: data.descricao,
      disponibilidade: data.disponibilidade,
      rating: data.rating,
      endereco: data.endereco,
      cpf: data.cpf,
    })
    return reply.status(201).send({
      message: `Sitter ${data.cpf} successfully registered!`,
      data: sitter,
    })
  } catch (err) {
    if (err instanceof Error) {
      console.log(err)
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
