import express from 'express'
import { pool } from '../config/db.js'
import multer from 'multer'
import mimeTypes from 'mime-types'
import { usuariOCcorreoF } from './iniciar_sesion.js';

const router = express.Router();  
router.get('/', (req, res)=>{    
    res.render('datosUsuario');
});

const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: function(req,file,cb){
        cb("",Date.now() +"." + mimeTypes.extension(file.mimetype));
    }
})

const upload = multer({
    storage: storage
})

router.post('/datosUsuarioo',upload.single('estado_de_cuenta'), /*async*/ (req, res)=>{
    // const query1 = 'SELECT id FROM usuario WHERE correo_electronico = ? OR nombre_usuario = ?';
    // const [results] = await pool.query(query1, [usuariOCcorreoF, usuariOCcorreoF]);
    // const id = results[0].id;
    // let nombreArchivo = req.file.filename;

    // let curp = req.body.curp;
    // let direccion = req.body.direc;
    // let numeroTel = req.body.num;

    // const query = 'INSERT INTO datosTarjeta (curp, direccion, telefono, nombre_archivo_pdf, id_usuario) VALUES (?, ?, ?, ?, ?)';
    // await pool.query(query, [curp, direccion,numeroTel,nombreArchivo,id]);
     
         res.write('Se han enviado los datos...');
         res.end();;
 });

 export default router;