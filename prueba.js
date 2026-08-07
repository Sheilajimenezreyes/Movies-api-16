const http = require ('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/pepito'){
    res.end('<h1> hello word </h1>');
    }else if(req.method === 'GET' && req.url === '/manolo'){
    res.end('Manolo')
    }else
    res.end('ruta no encontrada')
});

server.listen(3000, () => {
    console.log ('servidor escuchando http://localhost:3000');
});


/*CRUD
GET -> OBTENER
PUT/UPDATE -> ACTUALIZAR
POST-> AÑADIR
DELETE-> BORRAR*/