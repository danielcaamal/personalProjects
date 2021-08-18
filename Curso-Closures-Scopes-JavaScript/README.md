# Curso de Closures y Scopes JavaScript
**Impartido por:** Oscar Barajas Tavares en [Platzi](https://platzi.com/teachers/gndx/)

## Definiciones previas

## Scope
Es el alcance que va a tener una variable dentro del código, es decir, es el encargado de decidir a qué bloques de código va acceder una variable.

### Global Scope
El alcance que va a tener una variable dentro del código no está limitado por bloques sino que pueden ser accesados desde cualquier otra sección de código.
[Ejemplo Práctico](./scope/global.js)

### Local Scope
Se refiere a la variable o función que esta dentro de un bloque o función especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.
[Ejemplo Práctico](./scope/local.js)

### Function Scope
- Las variables con let y const no se pueden re-declarar
- Las variables const no se pueden ni re-declarar ni reasignar
[Ejemplo Práctico](./scope/function.js)

### Block Scope
[Ejemplo Práctico](./scope/block.js)

## Closure
[Ejemplo Práctico](./closure/closure.js)

### Ámbito Léxico
Se refiere a que una función puede acceder a una función o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
[Ejemplo Práctico](./closure/lexical.js)

### Loops 
[Ejemplo Práctico](./closure/loops.js)

## Hoisting
[Ejemplo Práctico](./hoisting/index.js)

## Debugging
[Ejemplo Práctico](./debug/index.js)