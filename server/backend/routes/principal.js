import express from 'express';

const router = express.Router(); 

router.get('/inicio', (req, res) => {
    const user = req.query.user ? JSON.parse(req.query.user) : null;
    res.render('users/principal', { user });
  });


//module.exports = router;
export default	router;

// Desplegar la plantilla llamada getUser que muestra los datos del usuario que pasa como parámetro
// AQUI: Hacer el recorrido del json para encontrar el usuario
//res.render('users/getUser',{usuario:datosUser})
//console.log(nombre);
//localhost:3000/users/findUser?name='Carlos'
