import express from 'express';
import { pool } from '../db.js';
// Se crea una instancia de router para gestionar las rutas del módulo usuario. 
const router = express.Router();  

router.get('/', (req, res)=>{    
    res.render('crear_cuenta');
    console.log("AQUIII");
});

router.post('/crearCuenta', async (req, res)=>{
    let correoF = req.body.correo;
    const query_1 = 'SELECT correo_electronico FROM usuario WHERE correo_electronico = ?';
    const [results_comprobacion_correo] = await pool.query(query_1, [correoF]);

    if(results_comprobacion_correo.length > 0) {
        res.write('Este correo ya tiene una cuenta, por favor digita otro...');
        res.end();
    } else {
        let userF = req.body.user;
        const query_2 = 'SELECT nombre_usuario FROM usuario WHERE nombre_usuario = ?';
        const [results_comrpobacion_nomUsuario] = await pool.query(query_2, [userF]);

        if(results_comrpobacion_nomUsuario.length > 0) {
            res.write('Este nombre de usuario ya ha sido seleccionado, elige otro');
            res.end();
        } else {
                let nombreF = req.body.nombres;
                let apellidoPF = req.body.apellido_P;
                let apellidoMF= req.body.apellido_M;
                let passwdF = req.body.passwd;
               const query = 'INSERT INTO usuario(correo_electronico, nombre_usuario, nombre, apellido_paterno'+
               ',apellido_materno, contrasena) VALUES(?,?,?,?,?,SHA2(?,256))';
               await pool.query(query, [correoF, userF, nombreF, apellidoPF, apellidoMF, passwdF]);
               
                // const querypass = 'SELECT correo_electronico, nombre_usuario FROM usuario WHERE nombre_usuario = ?';
                // const [results] = await pool.query(querypass, [userF]);
                
                res.redirect('/');
                //res.render('iniciar_sesion');
                //const datosUsuario = results[0];
              //  res.redirect(`../users/inicio?user=${encodeURIComponent(JSON.stringify(datosUsuario))}`);
                // res.render('users/inicio',{user:datosUsuario});
        }
    }

 });
 
 export default router;