require('dotenv').config();
const { Client } = require('pg');

const cliente = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

async function testar() {
    try {
        await cliente.connect();
        console.log('conectado com sucesso')
        console.log(await cliente.query('SELECT now()'));
    } catch (error) {
        console.error('Erro ao tentar executar: ', error)
    }
}

testar();