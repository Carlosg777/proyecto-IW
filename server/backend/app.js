import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pool } from './db.js';
import {PORT} from './config.js'
import path from 'path'
import express from 'express'

import iniciar_sesion from './routes/iniciar_sesion.js'
import crear from './routes/crear_cuenta.js'
import users from './routes/users.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

console.log(__dirname);
// Ruta para recursos estático
app.use(express.static(path.join(__dirname,'../frontend/public')));
app.use(express.urlencoded({extended: false}));

// view
app.set('views',path.join(__dirname,'../frontend/views'));
app.set('view engine','ejs');

// Rutas del proyecto
app.use('/', iniciar_sesion);
app.use('/users', users);
app.use('/recuperar', (req, res) => {
    res.render('recuperar');
  });
app.use('/crear_cuenta',crear);

//sql PRUEBA PING
app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "hello word" as RESULT');
  res.json(result[0]);
})

app.get('/ping2', async (req, res) => {
  const [result] = await pool.query(''+
  'INSERT INTO usuario(correo_electronico, nombre_usuario, nombre, apellido_paterno, apellido_materno, contrasena) '+
  'VALUES ("gcarlosjael@gmail.com","Carlos777","Carlos Jael","Guillén","González",SHA2("1234", 256))');
  res.json(result);
})

// PRUEBA DE LA BASE: proyecto_IW
app.get('/create', async (req, res) =>{
  const result = await pool.query('INSERT INTO users(name)'+
  ' VALUES ("CAR")')
  res.json(result);
})

//Se ejecuta el servidor en el puerto establecido: "localhost:3000"
app.listen(PORT, ()=>{
    console.log(`Proyectito ejecutandose en el localhost puerto ${PORT}`);
})