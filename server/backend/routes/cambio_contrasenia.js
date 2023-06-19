import express from 'express';
import { pool } from '../config/db.js';
import { userOcorreo } from './recuperar.js';
// Se crea una instancia de router para gestionar las rutas del módulo usuario. 
const router = express.Router();  

router.post('/cambioContrasenia', async (req, res)=>{
    let nuevaContrasenia = req.body.pass;
    const query = 'UPDATE usuario SET contrasena = SHA2(?,256) WHERE nombre_usuario = ? OR correo_electronico = ?';
    await pool.query(query, [nuevaContrasenia, userOcorreo, userOcorreo]);

    res.redirect('/');
 });
 
 export default router;