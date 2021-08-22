# CURSO DE AUTENTICACIÓN CON PASSPORT.JS
**Impartido por:** Guillermo Rodasen [Platzi](https://platzi.com/p/glrodasz/)

## Tabla de Contenido
- [Introducción Autenticación y Autorización]
    - [Stack de Seguridad Moderno](#stack-de-seguridad-moderno)
    - [Autenticación y Autorización](#autenticación-y-autorización)
    - [Sesiones](#sesiones)

- [Anatomía de un JWT](#anatomía-de-un-jwt)
- [Autenticación tradicional vs JWT](#autenticación-tradicional-vs-jwt)
- [Firmando y verificando un JWT](#firmando-y-verificando-un-jwt)
- [Server-side vs Client-side sessions](#server-side-vs-client-side-sessions)
  - [¿Qué es una sesión?](#qué-es-una-sesión)
  - [¿Qué es una sesion del lado del servidor?](#qué-es-una-sesion-del-lado-del-servidor)
  - [¿Qué es una sesión del lado del cliente?](#qué-es-una-sesión-del-lado-del-cliente)
- [Buenas Prácticas con JWT](#buenas-prácticas-con-jwt)
  - [Evitar almacenar información sensible](#evitar-almacenar-información-sensible)
  - [Mantener su peso lo más liviano posible](#mantener-su-peso-lo-más-liviano-posible)
  - [Establecer un tiempo de expiración corto](#establecer-un-tiempo-de-expiración-corto)
  - [Tratar los JWT como tokens opacos](#tratar-los-jwt-como-tokens-opacos)
  - [¿Donde guardar los tokens?](#donde-guardar-los-tokens)
- [Silent authenticacion vs Refresh tokens](#silent-authenticacion-vs-refresh-tokens)
- [¿Qué son las cookies y cómo implementar el manejo de sesión?](#qué-son-las-cookies-y-cómo-implementar-el-manejo-de-sesión)
  - [¿Qué es un cookie?](#qué-es-un-cookie)
  - [Implementación de cookies](#implementación-de-cookies)
  - [Cookies vs Session Storage vs Local Storage](#cookies-vs-session-storage-vs-local-storage)
- [Arquitectura del Proyecto VideoCine](#arquitectura-del-proyecto-videocine)
- [Agregando coleción de usuarios](#agregando-coleción-de-usuarios)
- [Agregando colección de películas de usuario](#agregando-colección-de-películas-de-usuario)
- [Implementando el POST y DELETE de las peliculas de usuario](#implementando-el-post-y-delete-de-las-peliculas-de-usuario)
- [Como conectarnos a una base de datos](#como-conectarnos-a-una-base-de-datos)
  - [Conexión usando MongoDB Compass](#conexión-usando-mongodb-compass)
  - [Configuración de Passport.js](#configuración-de-passportjs)
- [Implementación de BasicStrategy con Passport.js](#implementación-de-basicstrategy-con-passportjs)
- [Implementación de Strategy y ExtractJwt con Passport.js](#implementación-de-strategy-y-extractjwt-con-passportjs
)
- [Implementación de nuestro Sign-in](#implementación-de-nuestro-sign-in)
- [Implementación de nuestro Sign Up](#implementación-de-nuestro-sign-up)
- [Protegiendo nuestras rutas con Passport.js](#protegiendo-nuestras-rutas-con-passportjs)
- [Implementando recordar sesión](#implementando-recordar-sesión)
- [Middleware para el manejo de scopes](#middleware-para-el-manejo-de-scopes)
- [Configuración del Server Render](#configuración-del-server-render)
- [Comunicación máquina a máquina](#comunicación-máquina-a-máquina)
- [Implementación de las peliculas de usuario](#implementación-de-las-peliculas-de-usuario)
- [¿Qué es OAuth 2.0?](#qué-es-oauth-20)
- [¿Qué es OpenID Connect?](#qué-es-openid-connect)
- [Cómo crear un proyecto en Google API para hacer autenticación con 0Auth 2.0](#cómo-crear-un-proyecto-en-google-api-para-hacer-autenticación-con-0auth-20)
- [Implementando 0Auth2.0 con Google](#implementando-0auth20-con-google)
- [Implementando Sign Provider en nuestra API](#implementando-sign-provider-en-nuestra-api)
- [Autenticación con Google usando OpenID Connect](#autenticación-con-google-usando-openid-connect)
- [Cómo crear una cuenta de desarrollador con Twitter](#cómo-crear-una-cuenta-de-desarrollador-con-twitter)
- [Autenticación con Twitter](#autenticación-con-twitter)
- [Autenticación con Facebook](#autenticación-con-facebook)
- [Seguridad con Helmet](#seguridad-con-helmet)
- [Detectando vulnearabilidades con npm audit](#detectando-vulnearabilidades-con-npm-audit)
- [Automatizar el chequeo de vulnerabilidades con Snyk](#automatizar-el-chequeo-de-vulnerabilidades-con-snyk)
- [Qué es OWASP y buenas prácticas de seguridad](#qué-es-owasp-y-buenas-prácticas-de-seguridad)
- [Buenas prácticas de seguridad](#buenas-prácticas-de-seguridad)


## Introducción a las sesiones
### Stack de Seguridad Moderno
Tecnologías como HTML5 empezaron empezaron a necesitar otra serie de cosas y conceptos como autenticación y la autorización debido a la evolución mobile (necesidad de tener múltiples clientes) esto ocasionó la creación de un nuevo STACK:
- **JSON Web Tokens:** Son un estándar de la industria que nos permite comunicarnos entre 2 clientes de un lado a otro de una manera más segura.
- **OAuth 2.0:** Es un estándar de la industria que permite implementar autorización (Autorización != Autenticación).
- **OpenID Connect:** Capa de autenticación que se encuentra por encima de OAuth 2.0.

### Autenticación y Autorización
La **Autenticación** es la acción de verificar la identidad de un usuario, es decir, verificar si el usuario existe y en efecto es él.

La **Autorización** es la acción de otorgar permisos de manera limitada a nuestros recursos.


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>