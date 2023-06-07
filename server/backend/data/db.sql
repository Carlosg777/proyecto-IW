CREATE TABLE users {
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL;
};

CREATE TABLE usuario(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    correo_electronico VARCHAR(50) NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(20) NOT NULL,
    apellido_materno VARCHAR (20) NOT NULL,
    md5contrasena VARCHAR(100) NOT NULL
);