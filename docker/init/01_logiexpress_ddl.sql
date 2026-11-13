-- LogiExpress - Estructura de la base de datos (DDL)

CREATE DATABASE IF NOT EXISTS logiexpress_db;
USE logiexpress_db;

CREATE TABLE clientes (
  id_cliente      INT AUTO_INCREMENT PRIMARY KEY,
  nombre          VARCHAR(60)  NOT NULL,
  apellidos       VARCHAR(80)  NOT NULL,
  telefono        VARCHAR(15),
  correo          VARCHAR(120) UNIQUE,
  estado          ENUM('ACTIVO','INACTIVO') NOT NULL DEFAULT 'ACTIVO',
  limite_credito  DECIMAL(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE direcciones (
  id_direccion   INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente     INT NOT NULL,
  calle          VARCHAR(40) NOT NULL,
  numero         VARCHAR(10) NOT NULL,
  cruzamientos   VARCHAR(60),
  colonia        VARCHAR(60) NOT NULL,
  ciudad         VARCHAR(60) NOT NULL,
  codigo_postal  CHAR(5)     NOT NULL
);

CREATE TABLE envios (
  id_envio        INT AUTO_INCREMENT PRIMARY KEY,
  id_dir_origen   INT NOT NULL,
  id_dir_destino  INT NOT NULL,
  costo_total     DECIMAL(10,2) NOT NULL,
  fecha_registro  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  estado          ENUM('REGISTRADO','EN_TRANSITO','ENTREGADO','CANCELADO') NOT NULL DEFAULT 'REGISTRADO'
);

CREATE TABLE almacenes (
  id_almacen        INT AUTO_INCREMENT PRIMARY KEY,
  nombre            VARCHAR(60)  NOT NULL,
  ubicacion         VARCHAR(150) NOT NULL,
  capacidad_maxima  INT NOT NULL
);

CREATE TABLE paquetes (
  id_paquete  INT AUTO_INCREMENT PRIMARY KEY,
  id_envio    INT NOT NULL,
  id_almacen  INT,
  peso_kg     DECIMAL(7,2) NOT NULL,
  largo_cm    DECIMAL(6,2) NOT NULL,
  ancho_cm    DECIMAL(6,2) NOT NULL,
  alto_cm     DECIMAL(6,2) NOT NULL,
  contenido   VARCHAR(150) NOT NULL
);

CREATE TABLE historial_rastreo (
  id_evento         INT AUTO_INCREMENT PRIMARY KEY,
  id_envio          INT NOT NULL,
  fecha_evento      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ubicacion_actual  VARCHAR(150) NOT NULL,
  estado_evento     ENUM('EN_ALMACEN','EN_TRANSITO','EN_REPARTO','ENTREGADO','INCIDENCIA') NOT NULL,
  observaciones     VARCHAR(255)
);

CREATE TABLE auditoria_envios (
  id_auditoria        INT AUTO_INCREMENT PRIMARY KEY,
  id_envio            INT NOT NULL,
  costo_anterior      DECIMAL(10,2) NOT NULL,
  costo_nuevo         DECIMAL(10,2) NOT NULL,
  usuario             VARCHAR(100)  NOT NULL,
  fecha_modificacion  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Relaciones
ALTER TABLE direcciones       ADD CONSTRAINT fk_direccion_cliente FOREIGN KEY (id_cliente)     REFERENCES clientes (id_cliente);
ALTER TABLE envios            ADD CONSTRAINT fk_envio_dir_origen  FOREIGN KEY (id_dir_origen)  REFERENCES direcciones (id_direccion);
ALTER TABLE envios            ADD CONSTRAINT fk_envio_dir_destino FOREIGN KEY (id_dir_destino) REFERENCES direcciones (id_direccion);
ALTER TABLE paquetes          ADD CONSTRAINT fk_paquete_envio     FOREIGN KEY (id_envio)       REFERENCES envios (id_envio);
ALTER TABLE paquetes          ADD CONSTRAINT fk_paquete_almacen   FOREIGN KEY (id_almacen)     REFERENCES almacenes (id_almacen);
ALTER TABLE historial_rastreo ADD CONSTRAINT fk_rastreo_envio     FOREIGN KEY (id_envio)       REFERENCES envios (id_envio);
ALTER TABLE auditoria_envios  ADD CONSTRAINT fk_auditoria_envio   FOREIGN KEY (id_envio)       REFERENCES envios (id_envio);