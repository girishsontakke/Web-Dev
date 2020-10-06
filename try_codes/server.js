const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log("header", request.headers);
  //   console.log("url", request.url);
  //   console.log("method", request.method);
  const user = {
    name: "Girish",
    email: "girish@company.com",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
});

server.listen(3000);
