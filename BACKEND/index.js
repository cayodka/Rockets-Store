const express = require("express");
const fs = require("fs"); 
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, '__', 'frontend')))

app.get('/getPedidos', (pedido, resposta) => { })
app.get('postPedidos', (pedido, resposta) => { })

app.post('/postMensagens', (pedido, resposta) => { })

app.get('/getSobreNos', (pedido, resposta) => { })
app.post('/postSobreNos', (pedido, resposta) => { })

app.listen(1010, ( ) => {
    console.log("http://localhost:1010")
})