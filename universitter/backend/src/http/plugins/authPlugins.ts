import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import Jwt from "jsonwebtoken";

const authPlugin = async ( fastify: FastifyInstance ) => {
    fastify.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
        const token = request.headers['authorization'];

        if(!token){
            reply.status(401).send({message: 'Token não fornecido!'})
            return;
        }

        try{
            const decoded = Jwt.verify(token, process.env.SECRETKEY ?? '');
        } catch (err){
            reply.status(401).send({ message: 'Token inválido' });
        }
    })
}

export default authPlugin