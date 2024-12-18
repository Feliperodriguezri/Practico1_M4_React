# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Practico1_m4

#Autor: Felipe Rodriguez, grupo 1 frontend CORFO

#Descripción

Este proyecto es una aplicación web para la gestión de un hospital. Permite visualizar información sobre los doctores disponibles, los servicios médicos ofrecidos, y permite a los usuarios agendar citas médicas. Fue desarrollado utilizando React.js.

#Estructura del Proyecto

El proyecto incluye los siguientes archivos y componentes:

##Archivos Principales
App.jsx: Componente principal de la aplicación que coordina los datos y renderiza los componentes secundarios.
App.css: Archivo de estilos para la aplicación.

##Componentes

DoctorCard.jsx: Muestra información sobre cada doctor, incluyendo nombre, experiencia, descripción, y especialidad.
ServiceList.jsx: Renderiza una lista de servicios médicos disponibles.
ApoinmentForm.jsx: Formulario para agendar citas médicas con los doctores.

#Funcionalidades

#Visualización de Doctores
Los doctores se muestran en tarjetas con detalles como nombre, experiencia, especialidad y descripción.

#Listado de Servicios Médicos
Una lista que muestra las especialidades médicas ofrecidas por el hospital.

#Agendar Citas Médicas
Los usuarios pueden llenar un formulario con:
Su nombre.
La especialidad del doctor deseado.
La fecha de la cita.
Los datos ingresados se registran y se muestran en la consola para su validación.

instrucciones de instalacion
Clona este repositorio en tu máquina local.
Abre la terminal y ejecuta el comando npm install para instalar las dependencias del proyecto.
Ejecuta el comando npm start para iniciar el servidor de desarrollo.
La aplicación se abrirá en http://localhost:3000 en tu navegador.

#Tecnologías Usadas
React.js: Biblioteca para construir interfaces de usuario.
Bootstrap: Framework CSS para estilos y diseño.

