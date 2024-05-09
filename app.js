const http = require("http");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  setTimeout(() => {
    if (req.url === "/pc-info") {
      const cpuInfo = os.cpus()[0].model;
      const osInfo = `${os.type()} ${os.release()}`;
      const response = { cpuInfo, osInfo };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response));
    } else {
      res.writeHead(404);
      res.end("visit 'http://127.0.0.1:3000/pc-info' to get your PC info");
    }
  }, Math.random() * 2000); 
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
