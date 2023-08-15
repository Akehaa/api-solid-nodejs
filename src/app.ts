import fastify from 'fastify'
import { appRoutes } from './env/http/routes'

export const app = fastify()

app.register(appRoutes)
