import { FastifyInstance } from 'fastify'
import { register } from './controllers/users/register'
import { list } from './controllers/users/list'
import { deleteUser } from './controllers/users/delete'
import { edit } from './controllers/users/edit'
import { fetch } from './controllers/users/fetchByGroupId'

// Typescript exemple to use Models.
export async function appRoutes(app: FastifyInstance) {
  // Users
  app.post('/users', register)
  app.get('/users', list)
  app.put('/users', edit) // All values are optional, just edit sent what you want
  app.delete('/users', deleteUser)
  app.get('/users/:id_grupo', fetch)
}