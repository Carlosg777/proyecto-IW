import express from 'express'
import { codigoRecuperacion } from './recuperar.js';

const router = express.Router();  

router.post('/codigo', async (req, res)=>{
    let codigoUser = req.body.codigo;
    const codigoPagina = codigoRecuperacion;
    //console.log(codigoRecuperacion);
    if(codigoPagina == codigoUser) {
        res.render('cambio_contrasenia');
    } else {
        res.write("El codigo NO es correcto");
        res.end();
    }
 });
 
 export default router;