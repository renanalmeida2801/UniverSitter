import { FastifyRequest, FastifyReply } from 'fastify'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

type JwtPayload = {
  id: number
}

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { authorization } = request.headers

  if (!authorization) {
    reply.status(401).send({
      error: 'Unauthorized',
      message: 'Usuário não está logado',
    })
    throw new Error('Usuário não está logado')
  }

  const token = authorization.split(' ')[1]

  const { id } = jwt.verify(token, process.env.SECRETKEY ?? '') as JwtPayload

  
  if (id) return true
  else throw new Error('Token inválido'+token)
}
