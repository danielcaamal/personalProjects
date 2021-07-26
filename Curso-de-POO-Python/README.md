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
En Python todo es un objeto y todo tiene un tipo y esto nos permite interactuar con el mismo objeto:
*Formas de interactuar con los objetos*
- Creación 
- Manipulación
- Destrucción

*Ventajas de la manipulación de objetos:*
- Decomposición
- Abstracción
- Encapsulamiento
[Ejemplo](https://github.com/danielcaamal/personalProjects/tree/master/Curso-de-POO-Python/instancias.py)

## Decomposición
**Decompomponer** es partir un problema es problemas más pequeños, las Clases permiten crear mayores abstracciones en forma de componentes donde cada Clase se encarga de una parte del problema y el programa se vuelve más fácil de mantener.
[Ejemplo](https://github.com/danielcaamal/personalProjects/tree/master/Curso-de-POO-Python/decomposicion.py)

## Abstracción
**Abstraer** es enfocarnos en la información relevante, separar la información central de los detalles secundarios.


## Funciones

## Setters, Getters y Property

## Encapsulación, Getters and Setters

## Herencia

## Polimorfismo

## Introducción a la complejidad algorítmica

## Conteo abstracto de operación

## Notación asintótica

## Clases de complejidad algorítmica

## Búsqueda lineal

## Búsqueda binaria

## Ordenamiento burbuja

## Ordenamiento por inserción

## Ordenamiento por mezcla

## Ambientes Virtuales

## Graficado simple

## Introducción a la optimización

## El problema del morral
