# **FORM VIDEOGAME**

## **📌 OBJETIVOS**

-  Construir un formulario controlado que reciba los datos necesarios para almacenar un nuevo registro de un videojuego en la base de datos, usando las tecnologias: **ReactJS**, **NodeJS**, **Express**, **Javascript** y **Sequelize** + **PostgreSQL**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Aplicar mejores prácticas para la construccion de API's y de componentes con ReactJS.
-  Practicar el workflow de GIT.
-  Practicar el uso de Sequelize para validaciones, relaciones y restricciones en modelos

<br />

---

## **⚠️ IMPORTANTE**

Las versiones de node y de nmp con las que fue creado este proyecto son:

-  **Node**: 16.19.1 o superior
-  **NPM**: 8.19.3 o superior

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

**DEPENDENCIAS:** Las versiones de las dependencias usadas en el proyecto son:

-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **express**:
-  **sequelize**:

**VARIABLES DE ENTORNO:** En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres.

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`videogames`**.

<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este componente es construir una formulario web en el que el usario pueda introducir los datos necesarios para crear un nuevo videojuego en la base de datos. 

Estos campos deben ser validados en tiempo real usando solo codigo javascript, todo esto antes de enviar los datos a la API. 

De igual forma en la API debemos validar los datos que fueron enviados desde el Frontend antes de almacenarlos en la base de datos.

Haciendo todo esto estariamos practicando y aplicando:

-  **Validacion** de campos en tiempo real
-  Manejo de **errores** en el **Frontend** y como los comunicamos al usuario
-  Manejo de **errores** en el **Backend** y como los comunicamos al cliente
-  Peticiones **POST** a una API usando **fetch**
-  **Validaciones** de datos en la **API**
-  Operacion **Create** del **CRUD** basico
-  Relacion **ManyToMany** en una **Base de Datos Relacional**
-  **Validaciones** y **Restricciones** en los modelos de **Sequelize**

<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

Deberás crear tres modelos para tu base de datos. Uno será para los videojuegos, otro será para los géneros y el ultimo sera para las plataformas. 

La relación entre videogame hacia los otros dos modelos debe ser de muchos a muchos. A continuación estan las propiedades que debe tener cada modelo.

**📍 MODELO 1 | Videogame**

-  ID. \*
-  Nombre. \*
-  Descripción. \*
-  Plataformas. \*
-  Imagen. \*
-  Fecha de lanzamiento. \*

<br />

**📍 MODELO 2 | Genre**

-  ID. \*
-  Nombre. \*

<br />

**📍 MODELO 3 | Platform**
-  ID. \*
-  Nombre. \*

---

<br />

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

Tu servidor deberá contar con el siguiente endpoint:

#### **📍 GET | /videogames**

-  Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

#### **📍 POST | /videogames**

-  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros y platformas establecidas.
-  Toda la información debe ser recibida por body.
-  Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros y pltaformas indicadas.

<br />

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar un componente utilizando **React** que contenga los siguientes elementos:

**`GET /videogames`** deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Géneros.
   -  Plataformas

<br />

**📍 FORM PAGE |**: en este componente se encontrará el formulario para crear un nuevo videojuego.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Descripción.
-  Plataformas.
-  Generos
-  Imagen.
-  Fecha de lanzamiento.
-  Botón para crear el nuevo videojuego.

<br />

---

<br />

### **🖱 TESTING**

Noo es obligatorio el desarrollo de testing para tu aplicación. De igual manera, te desafiamos a que los hagas.

-  Al menos tener un componente del frontend con sus tests respectivos.
-  Al menos tener dos rutas del backend con sus tests respectivos.
-  Al menos tener un modelo de la base de datos con sus tests respectivos.

<br />


