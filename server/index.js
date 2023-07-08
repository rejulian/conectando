const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')

const PORT = 4000
const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password : 'admin',
    database : 'conectando'
})

app.post('/register/user', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contrasenia = req.body.contrasenia;
    const celular = req.body.celular;
    const localidad = req.body.localidad;
    const foto = req.body.foto;

    db.query('INSERT INTO usuario (nombre, apellido, email, contrasenia, foto, celular, localidad, provincia) VALUES (?,?,?,?,?,?,?,?)',[nombre, apellido, email, contrasenia, foto, celular, localidad, provincia], (err, result) => {
        if (err) {
            console.error(err)
        }else{
            res.send('User created succesfully')
        }
    })
})

app.post('/register/job', (req, res) => {
    const profesion = req.body.profesion;
    const descripcion = req.body.descripcion;
    const id_usuario = req.body.id_usuario;

    db.query('INSERT INTO trabajo (nombre_trabajo, descripcion, id_usuario) VALUES (?,?,?)', [profesion, descripcion, id_usuario], (err, result) => {
        if (err) {
            console.error(err)
        }else{
            res.send('Job created succesfully')
        }
    }) 

})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}...`);
})