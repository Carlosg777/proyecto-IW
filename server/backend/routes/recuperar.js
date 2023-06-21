import express from 'express'
import { pool } from '../config/db.js'
import crypto from 'crypto';
import { transporter } from '../config/mailer.js';

const router = express.Router();  
export let codigoRecuperacion = '';
export let userOcorreo = ''; 
router.get('/', (req, res)=>{    
    res.render('recuperar');
});

router.post('/recup', async (req, res)=>{
    userOcorreo = req.body.userOcorreo;
    const query = 'SELECT correo_electronico FROM usuario WHERE correo_electronico = ? OR nombre_usuario = ?';
    const [results] = await pool.query(query, [userOcorreo, userOcorreo]);

    if(results.length > 0) {
        codigoRecuperacion = crypto.randomInt(100000, 999999);
        try{
                await transporter.sendMail({
                    from: '"Cursitos online" <gcarlosjael@gmail.com>',
                    to: 'gcarlosjael@gmail.com',
                    subject: 'Restablece tu contraseña',
                    text: `El código que debe ingresar es: ${codigoRecuperacion}`
                })
        } catch (error){
            console.log()
            return res.status(400).json({ menssage: 'Algo salio mal'});
        }
        
        res.render('ingresar_codigo', { codigoRecuperacion , userOcorreo });
        // res.write('Se ha enviado el correo...');
        // res.end();;
    } else {
        res.write('Este correo no existe en nuestra base de datos...');
        res.end(); 
    }
 });

 export default router;