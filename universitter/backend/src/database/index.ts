import { knex } from 'knex'
import { postgresConfig } from '../env'

import 'dotenv/config'

export const postgres = knex(postgresConfig)
