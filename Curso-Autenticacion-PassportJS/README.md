# CURSO DE AUTENTICACIÓN CON PASSPORT.JS
**Impartido por:** Guillermo Rodasen [Platzi](https://platzi.com/p/glrodasz/)

## Tabla de Contenido
- [Introducción a la Autenticación y Autorización](#introducción-a-la-autenticación-y-autorización)
    - [Stack de Seguridad Moderno](#stack-de-seguridad-moderno)
    - [Autenticación y Autorización](#autenticación-y-autorización)
    - [Sesiones](#sesiones)
- [JSON Web Tokens (JWT)](#json-web-tokens-jwt)
    - [Anatomía de un JWT](#anatomía-de-un-jwt)
    - [Autenticación tradicional vs JWT](#autenticación-tradicional-vs-jwt)
    - [Firmando y verificando un JWT](#firmando-y-verificando-un-jwt)
    - [Server-side vs Client-side sessions](#server-side-vs-client-side-sessions)
    - [Buenas Prácticas con JWT](#buenas-prácticas-con-jwt)
    - [Cookies](#cookies)
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

## Introducción a la autenticación y autorización
### Stack de Seguridad Moderno
Tecnologías como HTML5 empezaron empezaron a necesitar otra serie de cosas y conceptos como autenticación y la autorización debido a la evolución mobile (necesidad de tener múltiples clientes) esto ocasionó la creación de un nuevo STACK:
- **JSON Web Tokens:** Son un estándar de la industria que nos permite comunicarnos entre 2 clientes de un lado a otro de una manera más segura.
- **OAuth 2.0:** Es un estándar de la industria que permite implementar autorización (Autorización != Autenticación).
- **OpenID Connect:** Capa de autenticación que se encuentra por encima de OAuth 2.0.

### Autenticación y Autorización
La **Autenticación** es la acción de verificar la identidad de un usuario, es decir, verificar si el usuario existe y en efecto es él.

La **Autorización** es la acción de otorgar permisos de manera limitada a nuestros recursos.

### Sesiones
Cuando tu visitas un sitio web se crea una petición http. Http es un protocolo que no tienen estado esto quiere decir que diferentes direcciones http nunca comparten información entre si, así que la manera de poder compartir está información en peticiones http es mediante el uso de una sesión. Cuando visitas un sitio web por primera vez se crea una sesión, no es necesario que estés autenticado para que está sesión sea creada.

La **cookie** es un archivo que se almacena en tu navegador, para que cuando tu cierres el navegador la cookie permanezca con el ID de la sesión, así la próxima vez que vuelvas esté ID de la sesión que permanece en la cookie se relaciona con la sesión que estaba previamente abierta y así puede cargar tus preferencias en el navegador.

Es por eso que muchas veces aunque nosotros no iniciemos sesión podemos ver que nuestras preferencias está ahí, también cuando hay un proceso de autenticación, la sesión se almacena directamente y se relaciona con tu usuario, por seguridad la sesión debería terminar ciertos minutos después de que hay un inactividad, sin embargo dependiendo el mecanismo que estés usando podrías tener sesiones por dias o incluso por meses; existen librerías que nos permiten almacenar las sesiones con express:

- *cookiesSession:*  nos permite almacenar la sesión en la cookie
- *express-session:* nos permite almacenar la sesión en la memoría en el lado del servidor.

A la hora de escalar la sesión es muy importante utilizar bases de datos en memoria como Redis, eso es una ventaja que tiene JWT, pues JWT no tiene estado y por lo tanto no necesita memoria.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## JSON Web Tokens (JWT)
### Anatomía de un JWT
Un JWT consta de 3 partes:
1. **Header:** Tiene 2 atributos, el *tipo* ***(typ:)***  que en este caso debería ser JWT y el *algoritmo de encriptación* ***(alg:)*** de la firma que puede ser síncrono (misma llave para encriptar y des-encriptar, exclusivo para backend) o asíncrono (llave privada y pública, para usarse en partes públicas).

2. **Payload:** Guarda la información de nuestro usuario, todos los scopes de autorización, se compone de *claims* representaciones de 3 letras que permiten identificar ciertos aspectos; existen diferentes tipos de claims:
    -  *Registered Claim Names:* Claims específicos que tienen definición propia y deben respetarse.
    - *Public Claim Names:* Pueden usarse entre diferente aplicaciones y ya están bien definidos.
    - *Private CLaims Names:* Son los que tú defines para una aplicación propia.

3. **Signature:** Es la tercera parte del JWT correspondiente a la parte más poderosa del JWT, se compone del Header codificado más el payload codificado, se le aplica un algoritmo de encriptación usando un *secret* (Un ejemplo es el H256).

## Autenticación tradicional vs JWT
**Autenticación tradicional**
En la autenticación tradicional cuando sucede un proceso de autenticación se crea una sesión, el id de está sesión se almacena en una cookie que es enviada al navegador. 
- Desventajas: 
    - Clientes como las Single Pages Apps, no pueden refrescar entonces no pueden saber si hubo cambios en la sesión.
    - Las REST APIs no deberían tener estado, al generar una sesión se contradice.
    - Son difíciles de escalar.
    - Cada cliente que se conecta genera más consumo de memoria.
    - El control de accesos siempre requiere que vayamos  a base de datos.

**Autenticación con JWT**
En la autenticación con JWT al suceder el proceso de autenticación se firma un token, a partir de ahí el token es enviado al cliente y esté deber ser almacenado en memoria o en una cookie, todos los request de aquí en adelante llevan esté token.
- Ventajas:
    - Aplicaciones como Single Pages Apps ya no requieren backend para saber si el usuario está autenticado.
    - El backend puede recibir múltiples request de múltiples clientes y lo único que le interesa saber es si el token está bien firmado.
    - El cliente sabe qué permiso tiene y no tiene que ir hasta la base de datos para saber si tiene ciertos permisos.

### Firmando y Verificando un JWT
Para firmar un JWT lo primero que debemos hacer es hacer uso de una librería llamada ``nodejsonwebtoken``, está librería tiene un método llamado *sign*, el primer sign recibe como primer argumento el payload de JWT, recordemos que esté payload esta construido con los diferentes claims que definamos, como segundo atributo debe recibir el *secret* con el que va ha ser firmado la firma del JWT, y finalmente hay un tercer argumento que pueden ser *options* extras para nuestro firmado del JWT.

Para la verificación de nuestro JWT se emplea el método **verify**:
- Se sitúa el ``token`` que queremos verificar.
- Se sitúa el ``secret``.
- Recibimos un ``callback`` con el JWT decodificado (opcional).

[Ejemplo de Firmado y Verificado](./sign-verify/jwt-utilities.js)

### Server-side vs Client-side sessions
**Server-side session**
La sesión en el lado del servidor suele ser una pieza de información que se guarda en memoria o en una base de datos y esta permite hacerle seguimiento a la información de autenticación, con el fin de identificar al usuario y determinar cuál es el estado de autenticación. Mantener la sesión de esta manera en el lado del servidor es lo que se considera “stateful”, es decir que maneja un estado.

**Client-side session**
Las SPA (Single-page apps) requieren una manera de saber si el usuario esta autenticado o no. Pero esto no se puede hacer de una manera tradicional porque suelen ser muy desacopladas con el backend y no suelen refrescar la página como lo hacen las aplicaciones renderizadas en el servidor.

JWT (JSON Web Token) es un mecanismo de autenticación sin estado, lo que conocemos como “stateless”. Lo que significa que no hay una sesión que exista del lado del servidor.

La manera como se comporta la sesión del lado del cliente es:

1. Cuando el usuario hace “login” agregamos una bandera para indicar que lo esta.
2. En cualquier punto de la aplicación verificamos la expiración del token.
3. Si el token expira, cambiamos la bandera para indicar que el usuario no está logueado.
4. Se suele checar cuando la ruta cambia.
5. Si el token expiró lo redireccionamos a la ruta de “login” y actualizamos el estado como “logout”.
6. Se actualiza la UI para mostrar que el usuario ha cerrado la sesión.

### Buenas prácticas con JWT
En los últimos años se ha criticado fuertemente el uso de JSON Web Tokens como buena practica de seguridad. La realidad es que muchas compañías hoy en día los usan sin ningún problema siguiendo unas buenas practicas de seguridad, que aseguran su uso sin ningún inconveniente.

**Consejos que se deben tener en cuenta**

***1. Evitar almacenar información sensible***

Debido a que los JSON Web tokens son decodificables es posible visualizar la información del payload, por lo que ningún tipo de información sensible debe ser expuesto como contraseñas, keys, etc. Tampoco debería agregarse información confidencial del usuario como su numero de identificación o información medica, ya que como hablamos anteriormente, los hackers pueden usar esta información para hacer ingeniería social.

***2. Mantener su peso lo más liviano posible***

Suele tenerse la tentación de guardar toda la información del perfil en el payload del JWT, pero esto no debería hacerse ya que necesitamos que el JWT sea lo más pequeño posible debido a que al enviarse con todos los request estamos consumiendo parte del ancho de banda.

***3. Establecer un tiempo de expiración corto***

Debido a que los tokens pueden ser robados si no se toman las medidas correctas de almacenamiento seguro, es muy importante que estos tengan unas expiración corta, el tiempo recomendado es desde 15 minutos hasta un máximo de 2 horas.

***Tratar los JWT como tokens opacos***

Aunque los tokens se pueden decodificar, deben tratarse como tokens opacos, es decir como si no tuviesen ningún valor legible. Esto es porque desde el lado del cliente no tenemos manera de verificar si la firma es correcta, así que si confiamos en la información decodificada del token, alguien podría introducir un token invalido con otra información a propósito. Lo mejor, es siempre enviar el token del lado del servidor y hacer las verificaciones allí.

***¿Dónde guardar los tokens?***
Cuando estamos trabajando con SPA (Single Page apps) debemos evitar almacenar los tokens en Local Storage o Session Storage. Estos deben ser almacenados en memoria o en una Cookie, pero solo de manera segura y con el flag httpOnly, esto quiere decir que la cookie debe venir del lado del servidor con el token almacenado. [Más información](https://auth0.com/docs/security/store-tokens#single-page-apps)

***Silent authentication vs Refresh Tokens***

Debido a que es riesgoso almacenar tokens del lado del cliente, no se deberían usar Refresh Tokens cuando se trabaja solo con una SPA. Lo que se debe implementar es Silent Authentication, para ello se debe seguir el siguiente flujo:
1. La SPA obtiene un access token al hacer login o mediante cualquier flujo de OAuth.
2. Cuando el token expira el API retornara un error 401.
3. En este momento se debe detectar el error y hacer un request para obtener de nuevo un access token.
4. Si nuestro backend server tiene una sesión valida (Se puede usar una cookie) entonces respondemos con un nuevo access token.

### Cookies
Una **cookie** es un archivo creado por un sitio web que tiene pequeños pedazos de datos almacenados en él Su propósito es identificar al usuario mediante el almacenamiento de su historial.

Las **cookie sessions** son cookies que tienen un corto periodo de vida ya que son removidas cuando el navegador o pestaña se cierran.

Las **persistent cookies** se usan para guardar información de interés para el usuario.

Las **secure cookies** almacenan datos de forma cifradas para que terceros no puedan tener acceso a ellas, se suelen usar en conexiones HTTPS.

**Leyes sobre cookies**
1. Avisarle al usuario que estás haciendo uso de cookies para guardar información.
2. Es necesario que el usuario dé su consentimiento para manejar cookies en tu sitio.

[Ejemplo de uso de cookies para el manejo de sesiones](./cookies/index.js)

### Cookies vs Session Storage vs Local Storage
El **Local Storage** tiene un almacenamiento máximo de 5MB y la información no se va con cada request al servidor, la información va a persistir aunque cerremos el navegador.

El **Session Storage** es similar al anterior, solo que la información está disponible por pestaña o por la ventana del navegador. La información solo estará disponible en esa pestaña.

Las **cookies** tienen solo un almacenamiento de 4KB, se les puede establecer un tiempo de expiración, la desventaja de usarlo es que al hacer request de imágenes o datos las cookies van junto con la petición.

**NOTA:** *Si la información no es sensible podemos almacenarla en Local Storage o Session Storage*