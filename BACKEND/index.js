const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case '/': 
      fs.readFile('./FRONTEND/index.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Página inicial não encontrada.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
      break;

    case '/areaAdministrador': // Página da área do administrador
      fs.readFile('./FRONTEND/areaAdministrador/index.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Página da área do administrador não encontrada.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
      break;

    case '/style.css': // CSS da página inicial
      fs.readFile('./FRONTEND/style.css', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('CSS não encontrado.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
      break;

    case '/areaAdministrador/style.css': // CSS da área do administrador
      fs.readFile('./FRONTEND/areaAdministrador/style.css', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('CSS da área do administrador não encontrado.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
      break;

    case '/main.js': // JavaScript da página inicial
      fs.readFile('./FRONTEND/main.js', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('JavaScript não encontrado.');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(data);
        }
      });
      break;

    case '/areaAdministrador/index.js': // JavaScript da área do administrador
      fs.readFile('./FRONTEND/areaAdministrador/index.js', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('JavaScript da área do administrador não encontrado.');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(data);
        }
      });
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Rota não encontrada.');
      break;
  }
});


server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/');
});
