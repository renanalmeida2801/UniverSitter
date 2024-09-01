import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify({
  logger: true,
})

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

// app.register(authPlugin)
app.register(appRoutes)
