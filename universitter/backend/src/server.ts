import { app } from './app'
import { z } from 'zod'

import 'dotenv/config'

const envSchema = z.object({
  port: z.coerce.number(),
})

const _env = envSchema.safeParse(process.env)
const port = _env.data?.port || 3333

app
  .listen({
    host: '0.0.0.0', // localhost
    port,
  })
  .then(() => {
    console.log('Server running in port:', port)
  })
