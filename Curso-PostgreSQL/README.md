# CURSO DE POSTGRESQL
**Impartido por:** Oswaldo Rodríguez González en [Platzi](http:/https://platzi.com/profesores/anncode/)

## Interacción desde la consola

La consola en PostgreSQL es una herramienta muy ótente para crear, administrar y depurar nuestra base de datos, podemos acceder a ella después de instalar PostgreSQL.

El programa que se ejecuta en la consola y que permite ejecutar consultas y comandos es **psql**, esta es la terminal interactiva para trabajar con Postgre

- Permite entrar a la consola de postgres con el usuario por default (postgres):
```
sudo -u postgres psql

```
- **\?** permite conocer todos los comandos activos de postgres 
- **\l** permite listar todas las bases de datos 
- **\d** permite ver las tablas de una base de datos con secuencia 
    - **\dt** las lista sin secuencia
    - **\d <table_name>** Permite describir una tabla
    - **\df** lista las funciones disponibles de la base de datos actual
    - **\dv** lista las vistas de la base de datos actual
    - **\du** lista los usuarios y sus roles de la base de datos actual
- **\c <bd_name>** permite cambiarte a otra base de datos 
- **\g** permite ejecutar el comando anterior nuevamente
- **\s** permite ver el historial de comandos ejecutados
    - **\s <file_name>** almacena la lista de comandos en un texto plano
- **\i <file_name>** ejecuta los comandos desde un archivo
- **\e** abre el editor de texto
- **\h** permite listar todos los comandos SQL 
    - También permite buscar información sobre una consulta específica: **\h ALTER**
- 
- Permite eliminar el proceso **CTRL + c**
- Permite verificar la versión
```SQL
SELECT version();
```
- Permite inicializar un contador de tiempo **\timing**
- Permite limpiar la consola **CTRL + L**
- Permite entrar a la carpeta raíz de postgres **SHOW config_file** donde puede encontrarse los archivos de configuración:
    - *Postgresql.conf*, el cual a su vez permite configurar de forma general direcciones de conexión de entrada, memoria, cantidad de hilos de procesamiento, réplica, etc.
    - *pg_hba.conf*, tiene que ver con la autenticación, muestra los roles y los tipos de acceso a la base de datos.
    - *pg_ident.conf*, Permite realizar el mapeo de usuarios, permite definir los roles a usuarios del sistema operativo donde se ejecuta postgres.
    - **NOTA:** Es bueno hacer una copia original de los archivos antes de modificarlos.