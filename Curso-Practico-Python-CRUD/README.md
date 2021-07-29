# CURSO PRÁCTICO DE PYTHON: CREACIÓN DE UN CRUD
**Impartido por:** David Aroesti en [Platzi](https://platzi.com/profesores/jdaroesti/)

## Qué es la programación?
- Es una ciencia de computación o disciplina que combina matemáticas, ingeniería y ciencia que se centra en la resolución de problemas.
- Un *programa* es una secuencia de instrucciones que describe cómo realizar un cómputo. Casi todos los programas realizan las siguientes tareas:
    - Input
    - Output
    - Operadores matemáticos
    - Ejecución condicional
    - Repeticiones

## Por qué programar con Python?
Python está diseñado para ser fácil de usar, a diferencia de otros lenguajes donde la prioridad es ser rápido y eficiente, Python no es de los lenguajes más rápidos, pero casi nunca importa.

Python es el segundo lenguaje más popular, solo por detrás de C:
"Python cuando podamos, C++ cuando necesitamos"

## Operadores matemáticos
En programación estos operadores son muy similares a los básicos de matemáticas (+, -, *, /), a los que se agregan:
- //: División de entero
- %: Residuo de la división, llamado módulo
- **: Exponente

*Operadores*
- +=: Permite sumarle un nuevo valor a la misma asignación
- -=: Permite restarle un nuevo valor a la misma asignación
- /=: Permite dividir un nuevo valor a la misma asignación
- *=: Permite multiplicar un nuevo valor a la misma asignación


## Variables y expresiones
Una *variable* es el contenedor de un valor, es una forma de guardar un valor para luego usarlo.
Python es un lenguaje dinámico, este concepto de privado y publico se genera por convenciones del lenguaje.
*Reglas de Variables*
- Pueden contener número y letras
- No deben comenzar con número
- __ implica que la variable es privada y no debe utilizarse
- Mayus indica que la variable de debe reasignarse, esto indica una constante
- Múltiples palabras se unen con _
- No se puede utilizar palabras reservadas
    - False, True
    - and, or, not
    - break, continue, elif, else, for, try, while, yield
    - None, nonlocal
    - as, from, in, is, with
    - assert, raise, except, finally 
    - async, await
    - def, global, import, pass, lambda, del

Una *expresión* es una combinación de valores ,variables y operadores

Podemos conocer el tipo de variable usando el comando type() y nos devolverá la clase a la que pertenece la variable, objeto o función.

## Funciones
Las *Funciones* son una agrupación de enunciados que tienen un nombre, una función tiene un nombre, debe ser descriptivo, puede tener parámetros y puede regresar un valor.
Con el *Keyword* def permite declarar una función.

*Funciones built-in:*
- abs(), round(), pow(), max(), min(), sum()
- complex(), range(), type(), len()
- sorted(), set(), enumerate()
- filter(), reversed(), 
- float(), int(), str(), bool(), dict(), list(), tuple()
- any(), all()
- dir(), help()

## Estructuras condicionales
Una expresión booleana siempre evalúa como verdadero (True) o como falso (False)
*Operadores de comparación:*
- ==: se refiere a igualdad
- !=: no hay igualdad
- >: mayor que
- <: menor que
- >=: mayor o igual que
- <=: menor o igual que

*Operadores lógicos:*
- and: verdadero si ambos valores son verdaderos
- or: verdadera si algunos de los valores es verdadero
- not: es lo contrario al valor

## Strings
Las cadenas o strings es un tipo con comportamiento diferente a los int, float y bool.
- Las cadenas son secuencias
- Las secuencias se pueden acceder a través de un índice [i]

Las cadenas tienen una longitud, puede accederse a través del built in function: len()

### Operaciones con strings
Los strings tienen  varios métodos que nos sirven para manipularlas:
- Operadores comunes:
    - upper()
    - lower()
    - find()
    - startswith()
    - endswith()
    - capitalize()
    - replace()
    - index()
    - count()
    - split()

- Operadores de pertenencia: 
    - in
    - not in

## Slices en Python
Los *slices* en Python nos permite maneja secuencias de una manera poderosa, si tenemos una secuencia de elementos y queremos una rebanada tenemos una síntaxis para definir qué pedazos queremos de esa secuencia.
```Python
secuencia[start:end:step]
```

## Iteraciones
**For loops:**
Los for loops permiten ciclar a lo largo de una secuencia
- Se usan cuando se quiere ejecutar un conjunto de instrucciones varias. 
veces, esto también se llama iteration
- Se puede utilizar el keyword *continue* para saltarse los statements restantes y pasar a la siguiente iteración

**While**
Al igual que los for loops, while loops sirven para iterar a lo largo de una secuencia.

Los while loops se ejecutan de la siguiente manera:
- Determinan si la condición es verdadera
- Si es verdadera, vuelve a ejecutar el loop
- Si es falsa, sal del bloque y continúa ejecutando el programa

Se tiene que tener mucho cuidado para evitar un infinite loop
Se puede utilizar el keyword *break* si se quiere salir anticipadamente del ciclo

### Iterators and generators
Para crear un objeto que sea un **iterable**, y por lo tanto implemente el protocolo de iteración, debemos hacer tres cosas:
- Crear una clase que implemente los métodos *iter* y *next*
- *iter* debe regresar el objeto sobre el cual se iterará
- *next* debe regresar el siguiente valor y aventar la excepción *StopIteration* cuando ya no hayan elementos sobre los cual iterar.

Por su parte, los **generators** son simplemente una forma rápida de crear iterables sin la necesidad de declarar una clase que implemente el protocolo de iteración. Para crear un generator simplemente declaramos una función y utilizamos el keyword *yield* en vez de return para regresar el siguiente valor en una iteración. Por ejemplo:
```Python
def fibonacci(max):
    a, b = 0, 1
    while a < max:
        yield a
        a, b = b, a+b
```

Es importante recalcar que una vez que se ha agotado un generator ya no podemos utilizarlo y debemos crear una nueva instancia. Por ejemplo,

```Python
fib1 = fibonacci(20)
fib_nums = [num for num in fib1]
...
double_fib_nums = [num * 2 for num in fib1] # no va a funcionar
double_fib_nums = [num * 2 for num in fibonacci(30)] # sí funciona
```

## Estructuras de datos
### Listas
Las listas son una secuencia de valores. A diferencia de los strings, las listas pueden tener cualquier tipo de valor. También, a diferencia de los strings, son mutables, podemos agregar y eliminar elementos.

En Python, las listas son referenciales. Una lista no guarda en memoria los objetos, sólo guarda la referencia hacia donde viven los objetos en memoria.

Se inician de forma literal con [] o de forma funcional *list()*.

**Operaciones con listas**
- El operador **+ (suma)** concatena dos o más listas
- El operador **\* (multiplicación)** repite la misma lista
- El método **append()** permite agregar un elemento al final de la lista
- El método **pop()** elimina el último elemento de la lista, de igual forma permite eliminarlos mediante su índice
- El método **sort()** permite ordenar una lista, pero no crea una nueva instancia, a diferencia de la built in function *sorted(*) que permite generar una nueva instancia.
- El método **del()** permite eliminar elementos a través de su índice
- El método **remove()** permite eliminar elementos sabiendo su valor y no su índice

### Diccionarios
Los diccionarios se conocen con diferentes nombres a lo largo de los lenguajes de programación como HashMaps, Mapas, Objetos, etc. En Python se conocen como Diccionarios.

Un **diccionario** es una asociación entre llaves(keys) y valores(values) y la referencia en Python es muy precisa. Si abres un diccionario verás muchas palabras y cada palabra tiene su definición.

Para iniciar un diccionario se usa {} o con la función *dict()*

Estos también tienen varios métodos. Siempre puedes usar la función dir para saber todos los métodos que puedes usar con un objeto.

Si queremos ciclar a lo largo de un diccionario tenemos las opciones:
```Python
for key in my_dict.keys():
    pass

for value in my_dict.values():
    pass

for key, value in my_dict.items():
    pass
```

### Tuplas y conjuntos
Las **tuplas** o **tuples** son similares a las lista
- La mayor diferencia es que son inmutables
- Sus valores están separadas por comas y se situán entre paréntesis *tuple()*
- Un uso muy común es regresar más de un valor a la vez

Los **conjuntos** o **sets** son una colección sin orden que no permite elementos duplicados, sin embargo, es mutable:
- Se inicializan con *set()* 
- Para añadir elementos se utiliza el método *add()*
- Para eliminar elementos se utiliza el método *remove()*


## Introducción al módulo collections
Este módulo nos brinda un conjunto de objetos primitivos que nos permiten extender el comportamiento de las built in collections que posee python, y nos otorga estructuras de datos adicionales:
- Dict => UserDict
- List => UerList
- String => UserString

Ejemplo:
```Python
class SecretDict(collections.UserDict):

   def _password_is_valid(self, password):
        …

    def _get_item(self, key):
        … 

    def __getitem__(self, key):
         password, key = key.split(‘:’)
         
         if self._password_is_valid(password):
              return self._get_item(key)
         
         return None

my_secret_dict = SecretDict(...)
my_secret_dict[‘some_password:some_key’] # si el password es válido, regresa el valor
```

## Python Comprehensions
Permiten generar secuencias a partir de otras secuencias
```Python
#List comprehension
[element for element in element_list if element_meets_condition]
#Dict comprehension
{key: element for element in element_list if element_meets_condition}
#Set comprehension
{element for element in element_list if element_meets_condition}
```

## Archivos en Python
*Manipulación*-
- La función *open()* nos permite leer archivos
    - *f = open('some_file')*
- Es importante siempre cerrar el archivo con la función *close()* para que se escriban los datos y no se desperdicie memoria
    - *f.close()*
- Una mejor forma de manipular archivo es utilizando context managers porque garantizan que el archivo se cierre
- Existen varios modos de abrir un archivo, los más importatnes son r (read) y w (write)
    - *with open(filename, mode='w') as f*

El módulo csv nos permite manipular archivos con terminación .csv
- csv significa comma separated values
- Es un formato para almacenar datos tabulares

Para utilizarlo lo importamos con la siguiente declaración:
- **Import csv**

Existen dos readers y dos writers
- csv.reader y csv.writer nos permiten manipular los valores a través de listas que representan filas
    - Solo se puede acceder por índice a los valores
- DictReader y csv.DictWriter nos permiten manipular los valores a través de diccionarios que representan filas
    - Se puede acceder a través de llaves a los valores

## Decoradores
Los *Decoradores* permiten extender y modificar el funcionamiento de las funciones
Los decoradores envuelven a otra función y permiten ejecutar código antes o después de qué es llamada

*Ejemplo:*
```Python
def lower_case(func):
    def wrapper():
        # execute code before
        result = func()
        # execute code after
        return result
    return wrapper
```
## Programación Orientada a Objetos
La programación orientada a objetos es un paradigma de programación que otorga los medios para estructurar programas de tal manera que las propiedades y comportamientos estén envueltos en objetos individuales.

Para poder entender cómo modelar estos objetos tenemos que tener claros cuatro principios:
- **Encapsulamiento:** Permite representar aspectos repetitivos
- **Abstracción:** Permite representar objetos lo más sencillo posible
- **Herencia:** Permite generar jerarquías
- **Polimorfismo:** Permite modificar métodos

Las clases simplemente nos sirven como un molde para poder generar diferentes instancias.

*Ejemplo de clases:*
```Python
class Airplane:
    def __init__(self, passengers, seats, pilots=[]):
        self.passengers = passengers
        self.seats = seats
        self._pilots = pilots

    def takeoff(self):
        pass
```

*Ejemplo de herencia:*
```Python
class Vehicle:
    def __init__(self, current_speed):
        self.current_speed


class Airplane(Vehicle)
    def __init__ …
        super().__init__(current_speed=0)

    def current_speed():
        return ‘{} km/h’.format(self.current_speed)
```

## Introducción a click

Click es un framework que nos permite crear aplicaciones de Command Line
Click utiliza decoradores para implementar su funcionalidad
Nos otorga una interfaz que podemos personalizar
- También autogenera ayuda para el usuario

Los decoradores más importantes que nos otorga son:
- @click.group
- @click.command
- @click.argument
- @click.option

También realiza las conversiones de tipo por nosotros