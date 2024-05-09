const http = require("http");
const os = require('os');

const hostName = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
setTimeout(()=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello ')
}, Math.random() * 2000);

});

if(req.url === 'getInfo'){
    const cpuInfo = os.cpus()[0].model;
    const osInfo = `${os.type()} ${os.release()}`;
    const response = {cpuInfo,osInfo};
    res.writeHead(200,{'Content-Typee':'application/json'})
}else{
    res.writeHead(400);
    res.end('Not Found');
}

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
