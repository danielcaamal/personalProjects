# CURSO DE PROGRAMACIÓN ORIENTADA A OBJETOS EN PYTHON
**Impartido por:** David Aroesti en [Platzi](https://platzi.com/profesores/jdaroesti/)

## Programación Orientada a Objetos POO
La POO nos permite modelar cosas reales y concretas del mundo y sus relaciones con otros objetos.

La clave para entender la POO es pensar en objetos como agrupaciones de datos y los métodos que operan en dichos datos.
Podemos representar por ejemplo unos audífonos con propiedades como su marca, tamaño y color y sus comportamientos como  reproducir música, pausar y avanzar a la siguiente canción.

### Clases en Python
Las **Clases** nos permiten crear nuevos tipos de información arbitraria sobre un objeto, proveen la estructura o el "molde" para construir nuevos objetos.

Para definir una Clase usamos el *keyword* class:
```Python
class Hotel:
    pass
```

### Instancias
Mientras que las **Clases** proveen la estructura, las instancias son los objetos reales que creamos en nuestro programa.

Una vez creada la Clase podemos generar una instancia llamando al constructor de la Clase:
```Python
hotel = Hotel()
```

#### Atributos de la instancia
Todas las clases crean objetos y todos los objetos tienen atributos. Un atributo describe lo que representa el objeto.

Un ejemplo de atributo es el método especial __init__ para definir el estado inicial de nuestra instancia, el cual recibe como parámetro obligatorio self (que es una referencia a la misma instancia):
```Python
class Hotel:
    def __init__(self,huespedes):
        self.huespedes = huespedes
    ...
```
#### Métodos de instancia
Los métodos indican qué podemos hacer con las instancias de dicha clase y normalmente operan en los mencionados atributos, los métodos son equivalentes a las funciones dentro de la definición de la clase, pero todos reciben self como primer argumento.
```Python
class Hotel:
    ...
    def ocupacion_total(self):
        return self.huespedes
```

## Tipos de datos abstractos, clases e instancias
En Python todo es un objeto y todo tiene un tipo y esto nos permite interactuar con el mismo objeto.

[Ejemplo](instancias.py)

*Formas de interactuar con los objetos*
- Creación 
- Manipulación
- Destrucción

*Ventajas de la manipulación de objetos:*
- Decomposición
- Abstracción
- Encapsulamiento


## Decomposición
**Decompomponer** es partir un problema es problemas más pequeños, las Clases permiten crear mayores abstracciones en forma de componentes donde cada Clase se encarga de una parte del problema y el programa se vuelve más fácil de mantener.

[Ejemplo](decomposicion.py)

## Abstracción
**Abstraer** es enfocarnos en la información relevante, separar la información central de los detalles secundarios.

[Ejemplo](abstraccion.py)

## Funciones
*Ejemplos de funciones:*
- Funciones como objetos de primera clase: las funciones son objetos de primera clase, pueden ser pasados y utilizados como argumentos al igual que cualquier otro objeto (strings, enteros, flotantes, lista, etc).
- Funciones anidadas: Al igual que las condicionales y bucles, también puedes colocar funciones dentro de otra función.

### Decorador
Los decoradores son una forma sencilla de llamar funciones de orden mayor, es decir, funciones que toman otra función como parámetro y/o retornan otra como función como parámetro, así un decorador añade capacidades a una función sin modificarla.
Un decorador básicamente toma una función, le añade una funcionalidad y la retorna.
```Python
def funcion_decoradora(funcion):
	def wrapper():
		print("Este es el último mensaje...")
		funcion()
		print("Este es el primer mensaje ;)")
	return wrapper

def zumbido():
	print("Buzzzzzz")

zumbido = funcion_decoradora(zumbido)
```

Aunque es complejo puede simplificarse de esta forma:
```Python
@function_decoradora
def zumbido():
    print("Buzzzzz")
```

### Setters, Getters
En Python los getters y setters tiene el objetivo de asegurar el encapsulamiento de datos.
- Una variable *privada* de declara al colocar un guión al inicio de esta (_) y son utilizados para añadir lógica de validación al momento de obtener y definir un valor y para evitar el acceso directo al campo de una clase. En Python ninguna variable es completamente privada, en cambio es posible alterar los métodos de las clases para tener efectos colaterales que causen el mismo efecto.
```Python
class Millas:
	def __init__(self, distancia = 0):
		self.distancia = distancia

	def convertir_a_kilometros(self):
		return (self.distancia * 1.609344)

	# Método getter
	def obtener_distancia(self):
		return self._distancia

	# Método setter
	def definir_distancia(self, valor):
		if valor < 0:
			raise ValueError("No es posible convertir distancias menores a 0.")
		self._distancia = valor
```

### Property
xD

## Encapsulamiento
Permite agrupar datos y su comportamiento, controlar el acceso a dichos datos y previene modificaciones no autorizadas.

[Ejemplo](encapsulamiento.py)

## Herencia
Permite modelar una jerarquía de clases, compartir comportamientos común en la jerarquía y reutilizar código.
Si tenemos un comportamiento que es común entre una serie de objetos de la misma categoría, este comportamiento debe enviarse a una clase superior que permita compartirlo con sus clases hijas. Esto facilita la mantenibilidad del código haciéndolo más estable.

[Ejemplo](herencia.py)

## Polimorfismo
Es la habilidad de tomar varias formas, en python se nos permite cambiar el comportamiento de una superclase para adaptarlo a una subclase.

## Introducción a la complejidad algorítmica
La complejidad algorítmica nos permite comparar la eficiencia de algoritmos:
$$T(n)$$

*Tipos de aproximaciones para determinar la eficiencia de un algoritmo:*
- Cronometrar el tiempo en el que corre un algoritmo, en este caso utilizando librerías especializadas como Time [Ejemplo](complejidad_algoritmica.py)
```Python
comienzo = time.time()
factorial(n)
final = time.time()
print(final - comienzo)
```

- Contar los pasos con una medida abstracta de operación donde nada más importa el término de mayor tamaño, esta aproximación se enfoca en evaluar el mejor de los casos, el promedio y el peor de los casos (Big O) [Ejemplo]()
```Python
# Ley de la suma
def f(n):
    for i in range(n):
        print(i)

    for i in range(n):
        print(i)

# O(n) + O(n) => O(n+n) => O(2n) => O(n)
#---------------------------------------#
# Ley de la multiplicación 
def f(n):
    for i in range(n):
        for j in range(n):
            print(i, j)

# O(n) + O(n) => O(n*n) => O(n**2)
#---------------------------------------#
# Recursividad múltiple
def fibonacci(n):
    if n == 0 or n == 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

# O(2**n)
```
- Contar los pasos con conforme nos aproximamos al infinito

### Clases de complejidad algorítmica O(n)
- O(1) Constante
- O(n) Lineal
- O(log n) Logarítmica
- O(n*log n) Logarítmica lineal
- O(n**2) Polinomial
- O(2**n) Exponencial

## Algoritmos de búsqueda y ordenación
**Tipos de búsqueda:***
- Búsqueda lineal
Busca todos los elementos de manera secuencial [Ejemplo](busqueda_lineal.py)
- Búsqueda binaria
El problema se divide en 2 en cada iteración para lista ordenadas [Ejemplo](busqueda_binaria.py)

**Tipos de ordenamiento:**
- Ordenamiento burbuja
- Ordenamiento por inserción
- Ordenamiento por selección
- Ordenamiento por mezcla

## Ambientes Virtuales

## Graficado simple

## Introducción a la optimización

## El problema del morral
