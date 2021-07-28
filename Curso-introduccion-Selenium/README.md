# CURSO DE INTRODUCCIÓN A SELENIUM CON PYTHON
**Impartido por:** Héctor Vega en [Platzi](https://platzi.com/profesores/Terranigma/)

## SetUp selenium con Python
Recuerda que como buena práctica todo lo que instales a través de pip debe ser en un entorno virtual.

### ¿Por qué utilizar pyenv y entornos virtuales?
Sí, puedes instalar una versión distinta directo en tu sistema, continuar con el curso (quizá lo termines sin problemas) y pretender que no ha sucedido nada. Sin embargo cuando instalas una versión de Python directo al sistema operativa esta funcionará de forma global y lo mismo con los módulos que instales a través de pip (a no ser que uses un entorno virtual).

Cuando instales paquetes de forma global en cada versión de Python en tu sistema, es probable que estos lleguen a ser de versiones distintas y es aquí cuando los problemas se pueden presentar. Por ello es mejor tener cada cosa en su lugar, separada y sin afectar otros entornos.

### ¿Qué versión de Python tengo instalada y dónde?
Utilizar distintas versiones de Python en tu equipo puede generar problemas cuando haces uso de pip para instalar paquetes, pues estos se instalan de forma global y al haber versiones distintas del mismo te expones a errores.

Para saber donde está instalado Python en tu equipo ejecutas el siguiente comando desde tu terminal:

<p align="center"><i>which python</i></p>
Te dará como resultado algo similar a esto:
<p align="center"><i>/usr/local/bin/python3.9</i></p>

Si quieres saber exactamente que versión de Python está instalada en tu sistema operativo, ejecuta el siguiente comando:

<p align="center"><i>python --version</i></p>
Esto te mostrará exactamente la versión de tu sistema:
<p align="center"><i>Python 3.9.0</i></p>


### 1. Instalando dependencias
Lo ideal es utilizar pyenv pues nos permite levantar Python desde su fuente, para lo cual debemos instalar ciertas dependencias de acuerdo a nuestro sistema operativo:

**macOS**
En caso de tener macOS Mojave o superior (+10.14) debes utilizar el siguiente comando con Homebrew instalado:

sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
Si es una versión inferior, será el siguiente comando:

brew install openssl readline sqlite3 xz zlib.

**Distribuciones Linux**
Según la distribución de tu equipo será el comando que utilizarás:

- Debian/Ubuntu
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl

- Fedora/CentOS/RHEL
sudo yum install zlib-devel bzip2 bzip2-devel readline-devel sqlite \
sqlite-devel openssl-devel xz xz-devel libffi-devel

- openSUSE
zypper in zlib-devel bzip2 libbz2-devel libffi-devel \
libopenssl-devel readline-devel sqlite3 sqlite3-devel xz xz-devel
Windows
Actualmente pyenv no cuenta con soporte para Windows, así que lo mejor será utilizar WSL (Windows Subsystem for Linux)

### 2. Instalando pyenv y Python
Instalar pyenv es muy sencillo, solo debes ejecutar este comando en tu terminal:


<p align="center"><i>curl https://pyenv.run | bash</i></p>
Posterior a instalar pyenv reinicia tu terminal para continuar.

**Listar versiones de Python**
Lo ideal es instalar una versión de Python entre 3.6 y 3.8, puedes ver la lista disponible con este comando una vez instalado pyenv:

<p align="center"><i>pyenv install --list | grep " 3\.[678]"</i></p>

Después solo debes elegir, por ejemplo acá elegimos Python 3.8.6:

<p align="center"><i>pyenv install -v 3.8.6</i></p>

Con esto pyenv procederá a levantar la versión de Python desde su fuente indicada y realizar las descargas necesarias, por lo que puede tomar unos minutos.

**Verificando versiones instaladas**
Puedes saber que versiones de Python has instalado mediante pyenv con este comando:

<p align="center"><i>ls ~/.pyenv/versions/</i></p>

**Desinstalando versiones de Python**
Solo debes especificar la versión a remover:

<p align="center"><i>lpyenv uninstall 3.8.6</i></p>


### 3. Utilizando las nuevas versiones instaladas
**¿En qué versión me encuentro?**
Ser consciente de que versión de Python es importante, así podemos utilizar las herramientas que son compatibles (como Selenium) y el comando indicado es el siguiente:

<p align="center"><i>pyenv versions</i></p>

Esto mostrará tanto nuestra versión instalada en el sistema operativa, su ruta y las que instalamos con pyenv. Podrás ver que está marcado con un * aquella que está activa de momento. Esto se puede validar con el comando python --version.

También puedes saber la ruta de la versión de Python tiene activa pyenv con el comando pyenv which python.

**Cambiando de versión**
Suponiendo que tenemos instalado Python 3.9, ya instalamos Python 3.8 con pyenv y queremos cambiar solo hay que ejecutar el siguiente comando:

<p align="center"><i>pyenv global 3.8.6</i></p>

Puedes verificarlo ejecutando el comando python --version el cual te mostrará la versión activa.

**Volviendo a la versión del sistema operativo**
En caso de necesitar volver a la versión de nuestro sistema operativo solo ejecutamos este comando:

<p align="center"><i>pyenv global system</i></p>

Definiendo una versión por defecto en directorios
En ocasiones deberás trabajar con una versión específica para tu proyecto, así que lo mejor es que pyenv sepa de cuál se trata y cada vez que trabajes desde un directorio esté activada. Esto lo puedes realizar con el comando local, por ejemplo, supongamos que queremos Python 3.7.6 por defecto entonces ejecutamos este comando:

<p align="center"><i>pyenv local 3.7.6</i></p>

Esto generará el archivo .python_version, mismo que fijará la versión 3.7.6 de Python en el directorio donde se ubique y todos los demás que se contengan en este. Si lo eliminas, entonces podrás cambiar entre versiones con el comando global.

### 4. Utiliza una versión de Python específica en un entorno virtual
Nuestra versión de Python específica está lista para funcionar, lo siguiente es crear un entorno virtual con pyenv donde trabajaremos con esta y poder realizar la instalación de cualquier módulo con pip.

Considera que pyenv nos permite manejar y cambiar entre distintas versiones de Python, los entornos virtuales aislan las instalaciones de diversos módulos y juntos nos permiten aislar módulos para versiones específicas de Python.

**Seleccionemos una versión de Python**
Lo primero será ubicarnos al directorio donde estarán nuestro proyecto y elegir la versión preferida con el comandolocal (de preferencia), por ejemplo 3.8.6:


<p align="center"><i>pyenv local 3.8.6</i></p>

**Creando el entorno virtual**
Generar un nuevo entorno local es posible con la siguiente convención:

pyenv virtualenv <version_de_python> <nombre_del_entorno>
Siguiendo el ejemplo de Python 3.8.6 lo haremos así:

<p align="center"><i>pyenv virtualenv 3.8.6 curso-selenium-platzi</i></p>

Para activar nuestro entorno virtual con esta versión específica de Python solo ejecutamos el comando local con el nombre del entorno:

<p align="center"><i>pyenv local curso-selenium-platzi</i></p>

Podemos utilizar pyenv versions y pyenv which python para darnos cuenta de que estamos utilizando la versión 3.8.6 en el directorio de nuestro entorno virtual.

Incluso ahora podemos instalar Selenium de una forma aislada con el comando pip install selenium.

Para salir de nuestro entorno solo ejecutamos el comando pyenv deactivate y para activarlo de nuevo con pyenv activate nombre_del_entorno.

## Hello World Selenium!!!
*Unittest (PyTest)*
- Test Figure: preparaciones para antes y después de la prueba
- Test Case: unidad de código a probar
- Test Suite: colección de Test Cases
- Test Runner: orquestador de la ejecución
- Test Report: resumen de resultados

