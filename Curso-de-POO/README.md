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
Como se mencionó anteriormente una **Clase** es el modelo por el cual nuestro objetos se van a construir y nos van a permitir generar más objetos.
A continuación se definen cada una de las versiones de código implementadas en los 4 lenguajes de programación para la clase ACCOUNT, la cual tiene como propiedades:
- id (integer)
- name (string)
- document (string)
- email (string)
- password (string)

*En Java:*
```Java
class Account {
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
class Account{
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
Los **métodos constructores** dan un estado inicial al objeto y podemos añadirle algunos datos al objeto mediante estos métodos. Los atributos o elementos que pasemos a través del constructor serán los datos mínimos que necesita el objeto para que pueda "vivir".
*Características:*
- Dan el estado inicial
- Tienen el mismo nombre de la clase

*En Java:*
```Java
public Account(String name){
    this.name = name;
}
```

*En Python:*
```Python
def __init__(self, name):
    self.name = name
```

*En JavaScript:*
```JavaScript
constructor(name){
    this.name = name
}
```

*En PHP:*
```PHP
public function __construct($name){
    $this->name = name;
}
```

### Objetos.
Los **objetos** nos ayudan a crear instancias de una clase, el objeto es el resultado de lo que modelamos (los parámetros declarados)

*En Java:*
```Java
Account account = new Account("Daniel");
```

*En Python:*
```Python
account = Account("Daniel")
```

*En JavaScript:*
```JavaScript
let account = new Account("Daniel");
```

*En PHP:*
```PHP
$account = new Account("Daniel")
```

## Herencia.

*En Java:*
```Java
class UberX extends Car{
    public UberX(){
        super();
    }
}
```

*En Python:*
```Python
class UberX(Car):
    def __init__(self):
        super().__init__()
```

*En JavaScript:*
```JavaScript
class UberX extends Car{
    constructor(){
        super()
    }
}
```

*En PHP:*
```PHP
class UberX extends Car{
    public function __construct(){
        parent::__construct();
    }
}
```


## Encapsulamiento.
El **encapsulamiento** también llamado "ocultamiento de información" es hacer que un dato sea inviolable, inalterable cuando se le asigne un modificador de acceso (no se trata solo de ocultar el dato sino también de protegerlo), aplicarlo correctamente te permite:
- Controlar la manera enn que los datos son accedidos o modificados.
- El código se vuelve flexible y fácil de modificar.
- Permite modificar partes del código sin afectar otras secciones.
- Ayuda a mantener la integridad de los datos.

Tipos de Modificadores de Acceso:
- **Public:** Permite ser accedido por cualquier elemento o cualquier clase.
- **Protected:** Solo podrá ser accedido a nivel de la clase, paquetes y subclases.
- **Default:** Permite el acceso a nivel de clases internas y paquetes (No permite ver los atributos de herencias).
- **Private:** Solo permite modificarse dentro de la clase.

## Polimorfismo.
**Polimorfismo** es construir métodos con el mismo nombre pero con comportamiento diferente.
Algunos conceptos que son de utilidad son los siguientes:
1. de **Sobrecarga:** Cambiar el método agregando nuevos atributos.
2. de **Sobre escritura:** Cambiar el comportamiento de un método que definió una super clase. 
3. con **Subtipado:** Usan el mismo nombre de método en diferentes clases.