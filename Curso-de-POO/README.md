# CURSO DE PROGRAMACIÓN ORIENTADA A OBJETOS
**Impartido por:** Anahí Salgado Díaz de la Vega en [Platzi](http:/https://platzi.com/profesores/anncode// "Platzi")

## Introducción.

### ¿Qué resuelve la Programación Orientada a Objetos POO?
La programación orientada a objetos o POO nace de los problemas creados por la programación estructurada y nos ayuda a resolver ciertos problemas como:
- Código muy largo que lo hace díficil de leer o depurar.
- Si algo falla todo se rompe.
- Difícil de mantener.

La POO **facillita** la programación.

### Paradigma Orientada a Objetos.

Un paradigma es una teoría que suministra la base y modelo para resolver problemas.

La POO se compone de 4 **elementos**:
- Clases
- Propiedades
- Métodos
- Objetos

Y de 4 **pilares**:
- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

### Lenguajes Orientados a Objetos.
Algunos de los lenguajes de POO:

- Java
- PHP
- Python
- JavaScript
- C#
- Ruby
- Kotlin

### Diagramas de modelado.
* **OMT** - Object Model Techniques: Metodología para el análisis orientado a objetos (Deprecated)
* **UML** - Unified Modeling Language: Versión unificada del OMT

### UML.
Es el lenguaje estándar de modelado de sistemas orientados a objetos, es a final de cuentas un forma gráfica de representar una situación.

|  Class  |
| ------------ |
| +attibutte1:type = defaultValue<br> +attibutte2:type<br>-attibutte3:type |
| +operation1(params):returnType<br> -operation2(params)<br>-operation3() |

En la parte superior se colocan los atributos o propiedades, y debajo las operaciones de la clase.

**Niveles de visibilidad**
- private (-)
- public (+)
- protected (#)
- default (~)

Una forma de representar las relaciones que tendrá un elemento con otro es a través de las flechas:
- **Asociación:**  Significa que un elemento contiene al otro en su definición
- **Herencia** La dirección de la flecha irá desde el hijo hasta el padre.
- **Agregación** Es lo que comúnmente se conoce como relación uno a muchos.
- **Composición**  Una de las clases no podría existir sin la otra.

## Orientación a Objetos.
### Objetos.
Los **Objetos** son aquellos que tienen propiedades y comportamientos, también serán sustantivos.
- **Propiedades** son los atributos que caracterizan un Objeto, como el tamaño, forma, etc.
- **Comportamientos** serán las operaciones que el objeto puede hacer, suelen ser verbos.

### Abstracción y clases.
Una **Clase** es el modelo por el cual nuestro objetos se van a construir y nos van a permitir generar más objetos.
La **Abstracción** es cuando separamos los datos de un objeto para generar un molde.

### Modularidad.
La **Modularidad** implica dividir un sistema en partes pequeñas y estas serán nuestros módulos pudiendo funcionar de manera independiente.

## Análisis POO.
### Sintaxis de clases.
Se tiene diversas sintaxis para definir clases en los siguientes lenguajes:
*En Java:*
```Java
class Person{
    String name="";
    void walk(){}
}
```

*En Python:*
```Python
def Person:
    name =""
    def walk():
        pass
```

*En JavaScript:*
```JavaScript
class Person{
    constructor(){
        this.name="";
    }
    walk(){}
}
```

*En PHP:*
```PHP
class Person{
    $name="";
    function walk(){}
}
```

### Herencia.
"Don´t repeat yourself": Promueve la reducción de duplicación en programación.
La *Reutilización* es un concepto fundamental de la POO donde recae la **Herencia**, esto nos permite crear una clase a partir de otra clase, donde la clase (hijo) puede "heredar" todos o algunos atributos y/o métodos de la clase de la que depende (padre).
- Se definen la Superclase (padre) y la Subclase (hijo).

## Clases, Objetos, Constructores.
### Clases: 
A continuación se definen cada una de las versiones de código implementadas en los 4 lenguajes de programación para la clase ACCOUNT, la cual tiene como propiedades:
- id (integer)
- name (string)
- document (string)
- email (string)
- password (string)

*En Java:*
```Java
public class Account {
    Integer id;
    String name;
    String document;
    String email;
    String password;
}
```
*En Python:*
```Python
class Account:
    id = int
    name = str
    document = str
    email = str
    password = str
```
*En JavaScript:*
```JavaScript
function Account(){
    this.id;
    this.name;
    this.document;
    this.email;
    this.password;
}
```
*En PHP:*
```PHP
<?php
class Account{
    public $id;
    public $name;
    public $document;
    public $email;
    public $password;
}
```
### Método Constructor.
### Objetos.
#### Java.
#### Python.
#### JavaScript.
### RETO 3
## Herencia.
### Herencia.
#### Java.
#### PHP.
#### Python.
#### JavaScript.
### Otros tipos de herencia.
### RETO 4
## Encapsulamiento.
### Definición.
### Ejemplos.
## Polimorfismo.
### Definición.
### Ejemplos.
## Conclusiones.