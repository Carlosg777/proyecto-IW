CREATE DATABASE proyecto_IW;
USE proyecto_IW;

CREATE TABLE usuario(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    correo_electronico VARCHAR(50) NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(20) NOT NULL,
    apellido_materno VARCHAR (20) NOT NULL,
    contrasena VARCHAR(100) NOT NULL 
);

CREATE TABLE datosTarjeta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    curp VARCHAR(18),
    direccion VARCHAR(200),
    telefono VARCHAR(20),
    nombre_archivo_pdf VARCHAR(200),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);