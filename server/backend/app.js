import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pool } from './config/db.js';
import {PORT} from './config/config.js'
import path from 'path'
import express from 'express'

import iniciar_sesion from './routes/iniciar_sesion.js'
import crear from './routes/crear_cuenta.js'
import recuperar from './routes/recuperar.js'
import principal from './routes/principal.js'
import users from './routes/users.js'
import in_codigo from './routes/ingresar_codigo.js'
import cambio_contra from './routes/cambio_contrasenia.js'
import datosUsuario from './routes/datosUsuario.js'

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
app.use('/principal',principal);
app.use('/recuperar',recuperar);
app.use('/crear_cuenta',crear);
app.use('/ingresar_codigo',in_codigo);
app.use('/cambio_contrasenia',cambio_contra);
app.use('/datosUsuario',datosUsuario);


//Se ejecuta el servidor en el puerto establecido: "localhost:3000"
app.listen(PORT, ()=>{
    console.log(`Proyectito ejecutandose en el localhost puerto ${PORT}`);
})