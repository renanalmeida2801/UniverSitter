import { z } from 'zod'
import { Knex } from 'knex'

import 'dotenv/config'

export const postgresDBConfigSchema = z.object({
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_NAME: z.string(),
  CONNECTIONSTRING: z.string().optional(),
})

const postgresDBConfig = postgresDBConfigSchema.safeParse({
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_PORT: process.env.DB_PORT || '',
  DB_NAME: process.env.DB_NAME || '',
  CONNECTIONSTRING: process.env.CONNECTIONSTRING || '',
})

if (!postgresDBConfig.success) {
  console.error(
    postgresDBConfig.error.format(),
  )
  process.exit(1)
}

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, CONNECTIONSTRING } =
  postgresDBConfig.data

export const postgresConfig: Knex.Config = CONNECTIONSTRING
  ? {
      client: 'pg',
      connection: CONNECTIONSTRING,
      acquireConnectionTimeout: 300000,
    }
  : {
      client: 'pg',
      connection: {
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: parseInt(DB_PORT, 10),
        database: DB_NAME,
      },
      acquireConnectionTimeout: 300000,
    }

console.log('Postgres configuration is valid:', postgresConfig)
