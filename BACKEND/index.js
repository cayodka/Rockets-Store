const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();


app.use(express.static(path.join(__dirname)));


app.get('/listarArquivos', (req, res) => {
    
    const files = [];
    
    
    fs.readdirSync(path.join(__dirname)).forEach(file => {
        files.push(file);
    });
    
    
    fs.readdirSync(path.join(__dirname, 'frontend')).forEach(file => {
        files.push(`frontend/${file}`);
    });
    
    
    fs.readdirSync(path.join(__dirname, 'frontend', 'areaAdminstrador')).forEach(file => {
        files.push(`frontend/areaAdminstrador/${file}`);
    });

    res.json(files); 
});


app.listen(1010, () => {
    console.log("Servidor rodando em http://localhost:1010");
});
