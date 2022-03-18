import express from 'express'; //Importamos la libreria.
const app = new express();

app.get('/', (req, res) => { //route handler
    res.send('Hello World, this is the root route'); //envio de información
});

app.listen(3000); //Permite escuchar al servidor.
app.get('/uno', (req, res) => { //route handler
    res.send('Hello World, from the route One'); //envio de información
});

app.get('/prueba', (req, res) => { //route handler
    res.send('Hello World, from route Prueba'); //envio de información
});

