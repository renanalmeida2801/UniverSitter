import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { EditUserUseCase } from '@/services/edit-users'

/**
 *
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
export async function editUser(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    id: z.number(),
    id_grupo: z.number().optional(),
    nome: z.string().optional(),
    sobrenome: z.string().optional(),
    email: z.string().optional(),
    senha: z.string().optional(),
    telefone: z.string().optional(),
  })
  const data = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new KnexUsersRepository()
    const editUseCase = new EditUserUseCase(usersRepository)
    const { user } = await editUseCase.execute({
      id: data.id,
      id_grupo: data.id_grupo,
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      senha: data.senha,
      telefone: data.telefone,
    })
    return reply.status(201).send({
      message: `User ${user.nome} successfully edited!`,
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
