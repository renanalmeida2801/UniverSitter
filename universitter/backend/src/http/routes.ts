import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/users/register'
import { listUser } from './controllers/users/list'
import { deleteUser } from './controllers/users/delete'
import { editUser } from './controllers/users/edit'
import { fetchUser } from './controllers/users/fetchByGroupId'

import { registerSitter } from './controllers/sitters/register'
import { getSitterById } from './controllers/sitters/getById'
import { listSitter } from './controllers/sitters/list'
import { deleteSitter } from './controllers/sitters/delete'
import { editSitter } from './controllers/sitters/edit'
import { listCompleteSitter } from './controllers/sitters/listCompleteSitter'
import { authMiddleware } from '@/middleware/authenticate'

import { DeleteFeedback } from './controllers/feedbacks/delete'
import { registerFeedback } from './controllers/feedbacks/register'
import { getFeedbackById } from './controllers/feedbacks/fetchById'

import { login } from './controllers/auth/login'

// Typescript exemple to use Models.
export async function appRoutes(app: FastifyInstance) {
  app.post('/login', login)
  app.post('/userRegister', registerUser)

  app.addHook('onRequest', async (request, reply) => {
    const publicRoutes = ['/login', '/test', '/userRegister'] // Rotas que não precisam de autenticação
    if (!publicRoutes.includes(request.routerPath)) {
      await authMiddleware(request, reply)
    }
  })

  // Users

  app.put('/users', editUser) // All values are optional, just edit sent what you want
  app.get('/users', listUser)
  app.delete('/users', deleteUser)
  app.get('/users/:id_grupo', fetchUser)

  app.post('/sitters', registerSitter)
  app.get('/sitters', listSitter)
  app.get('/sitters/:id', getSitterById)
  app.put('/sitters', editSitter) // All values are optional, just edit sent what you want
  app.delete('/sitters', deleteSitter)
  app.get('/sittersComplete', listCompleteSitter)

  app.post('/feedback', registerFeedback) // All values are optional, just edit sent what you want
  app.delete('/feedback', DeleteFeedback)
  app.get('/feedback/:id', getFeedbackById)
}
