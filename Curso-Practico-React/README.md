# CURSO PRÁCTICO DE REACT JS
**Impartido por:** Oscar Barajas Tavares

## ¿Qué es React JS?
React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.

Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico. Además, podremos reutilizar nuestros componentes siempre que lo necesitemos.

Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.

Nuestro profesor será Oscar Barajas: Frontend Developer en Platzi y uno de los líderes en la comunidad de Facebook Developer Circles.

## DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.
Cada vez que cambiemos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

## Create React Apps y tipos de componentes
**Inicialización de un proyecto en React**
Creación de nuestro sitio web usando la plantilla por defecto de create-react-app:
- *npx create-react-app nombre-de-tu-proyecto*

Iniciar el servidor de desarrollo:
- *npm start*
No olvides que puedes aprender a manejar de forma las diferentes herramientas de desarrollo en el Curso de Prework: Buenas Prácticas y Entorno de Desarrollo.

Creación y Tipos de Componentes
Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.

Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);

    this.state = { hello: 'hello world' };
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>
    );
  }
}

export default Stateful;
También tenemos componentes Stateless o Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX (del cual hablaremos en la próxima clase).

import React from 'react';

const Stateless = () => {
  return (
    <h1>¡Hola!</h1>
  );
}

// Otra forma de crearlos:
const Stateless = () => <h1>¡Hola!</h1>;

export default Stateless;