require('dotenv').config();
const cors = require('@fastify/cors');
const Fastify = require('fastify');
const fastify = Fastify({ logger: true });

fastify.register(require('@fastify/postgres'), {
    connectionString: process.env.CONNECTIONSTRING
});

fastify.register(cors, {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
});

fastify.post('/register', async (request, reply) => {

    const data = request.body;

    
    if (Object.keys(data).length === 0) {
        return reply.status(400).send({ status: 'error', message: 'Dados insuficientes' });
    }

    
    const fields = Object.keys(data);
    const values = Object.values(data);

    
    const placeholders = fields.map((_, index) => `$${index + 1}`).join(', ');

    
    const query = `INSERT INTO usuario (${fields.join(', ')}) VALUES (${placeholders})`;

    try {
        
        const result = await fastify.pg.query(query, values);
        reply.send({ status: 'success', data: result.rows });
    } catch (err) {
        fastify.log.error(err);
        reply.status(500).send({ status: 'error', message: 'Erro ao registrar usuário' });
    }
});

const start = async () => {
    try {
        await fastify.listen({ port: 3300, host: 'localhost' });
        fastify.log.info(`Servidor rodando em http://localhost:3300`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();