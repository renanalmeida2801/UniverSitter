const fs = require('fs');

// Verificar se o arquivo .env existe
if (fs.existsSync('.env')) {
  console.log('.env encontrado');
} else {
  console.log('.env não encontrado');
}

require('dotenv').config();

console.log('Variáveis de Ambiente:');
console.log('DB_USER:', process.env.DB_USER || 'Não carregado');
console.log('DB_HOST:', process.env.DB_HOST || 'Não carregado');
console.log('DB_NAME:', process.env.DB_NAME || 'Não carregado');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD || 'Não carregado');
console.log('DB_PORT:', process.env.DB_PORT || 'Não carregado');
