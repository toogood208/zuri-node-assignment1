const http = require("http");
const os = require("os");

const port = 3000;
const hostName = '127.0.0.1'

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Handle preflight request
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/info") {
    const cpuInfo = os.cpus()[0].model;
    const osInfo = `${os.type()} ${os.release()}`;
    const response = { cpuInfo, osInfo };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(200);
    res.end(`Visit '${hostName}/${port}/info' to get your pc info`);
  }
});

server.listen(port,hostName, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
