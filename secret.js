//Esto es solo un ejemplo para guardarlo, no es necesario para nuestro proyecto

const crypto = require('crypto');

const secret = 'Full stak 16 Sheila REFRESH';
const secret2 = 'Actualizo para que sea mas dificil REFRESH';

const hash = crypto.createHmac('sha256', secret).update(secret2).digest('hex');

console.log(hash);