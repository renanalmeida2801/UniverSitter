import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateUserUseCase } from '@/services/create-users'
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
export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    nome: z.string(),
    sobrenome: z.string(),
    email: z.string(),
    senha: z.string(),
    telefone: z.string(),
  })

  const data = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new KnexUsersRepository()
    const registerUseCase = new CreateUserUseCase(usersRepository)
    const { user } = await registerUseCase.execute({
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      senha: data.senha,
      telefone: data.telefone,
    })
    return reply.status(201).send({
      message: `User ${data.nome} successfully registered!`,
      data: user,
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
