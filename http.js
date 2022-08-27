const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('home page bois')
    }

    if(req.url === '/about'){
        res.end('about page bois')
    }

    res.end(`
        <h1>no such page exits</h1>
        <a href='/'>go back to home page<a>
    `)
    
  res.write("Harro harro harro");
  res.end()
});

server.listen(5000);
