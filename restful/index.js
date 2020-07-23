const http = require('http');


http.createServer((req, res)=>{

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    res.end('ok');
});

http.Server.listen(3000, '127.0.0.1', ()=>{

    console.log('rodando');

})