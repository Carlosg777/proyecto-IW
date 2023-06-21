import express from 'express';
import { pool } from '../config/db.js';
// Se crea una instancia de router para gestionar las rutas del módulo usuario. 
const router = express.Router();  
                                
router.get('/', (req, res)=>{    
    res.render('iniciar_sesion');
});

export let usuariOCcorreoF = ''; 

router.post('/iniciarSesion', async (req, res)=>{
    let usuariOCcorreoF = req.body.user;
    let passwdF = req.body.passwd;
    
    const query = 'SELECT correo_electronico, nombre_usuario FROM usuario WHERE (nombre_usuario = ? OR correo_electronico = ?)  AND contrasena = SHA2(?, 256)';
  
    const [results] = await pool.query(query, [usuariOCcorreoF, usuariOCcorreoF, passwdF]);
    if (results.length > 0) {
      // Hacer algo con los resultados
        const datosUsuario = results[0];
        //res.redirect('/users/inicio');
        //res.render('users/inicio',{user:datosUsuario});
      res.redirect(`principal/inicio?user=${encodeURIComponent(JSON.stringify(datosUsuario))}`);
    } else {
      // Manejar el error
        res.write('usuario no registrado o contrasena incorrecta');  
        res.end();   
    }
 });
 
 export default router;