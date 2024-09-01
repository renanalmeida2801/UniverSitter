import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/users/register'
import { listUser } from './controllers/users/list'
import { deleteUser } from './controllers/users/delete'
import { editUser } from './controllers/users/edit'
import { fetchUser } from './controllers/users/fetchByGroupId'

import { registerSitter } from './controllers/sitters/register'
import { listSitter } from './controllers/sitters/list'
import { deleteSitter } from './controllers/sitters/delete'
import { editSitter } from './controllers/sitters/edit'
import { authMiddleware } from '@/middleware/authenticate'

import { login } from './controllers/auth/login'

// Typescript exemple to use Models.
export async function appRoutes(app: FastifyInstance) {
  app.post('/login', login)
  // app.addHook('preHandler', authMiddleware)
  app.get('/test', () => {
    console.log('test')
  })

  // Users

  app.post('/users', registerUser)
  app.get('/users', listUser)
  app.put('/users', editUser) // All values are optional, just edit sent what you want
  app.delete('/users', deleteUser)
  app.get('/users/:id_grupo', fetchUser)

  app.post('/sitters', registerSitter)
  app.get('/sitters', listSitter)
  app.put('/sitters', editSitter) // All values are optional, just edit sent what you want
  app.delete('/sitters', deleteSitter)
}

