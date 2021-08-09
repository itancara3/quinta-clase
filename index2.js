const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const {  create, findAndCountAll, update } = require('./personas');



app.get('/', (req, res) => {
    fs.writeFileSync('personas.txt', `{ data: 'Algo' }`);
    const data = fs.readFileSync('personas.txt', 'utf8');
    res.status(200).json(data);
    // res.send('<h1>Algo</h1>');
});


app.get('/personas', async (req, res) => {
    try {
        const persona = {
            nombre: 'Ivan',
            apellidoPaterno: 'Tancara',
        };
        // const personaCreada = await create(persona);
        persona.nombre = 'Mar'
        await update(2, persona);
        const respuesta = await findAndCountAll();
        console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
        console.log(respuesta);
        console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
        res.status(200).json({
            finalizado: true,
            mensaje: 'OK',
            data: respuesta
        });
    } catch (error) {
        res.status(404).json({
            finalizado: false,
            mensaje: 'OK',
            data: error
        });
        console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
        console.log(error);
        console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');        
    }
});
app.listen(port, () => {
    console.log('==============================_SERVIDOR_==============================');
    console.log('Funcionando correctamente');
    console.log('==============================_SERVIDOR_==============================');
})