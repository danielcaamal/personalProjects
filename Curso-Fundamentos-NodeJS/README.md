# NODEJS FUNDAMENTALS COURSE
**Given by:** Carlos Hernández [Platzi](https://platzi.com/p/codingcarlos/)

## Content
- [Introduction to NodeJS](#introduction-to-nodejs)
    - [Event Loop](#event-loop)
    - [Single thread](#single-thread)
- [Handling Async](#handling-async)

## Introduction to NodeJS
### Event Loop
- **Event Queue:** Contains all the generated events in ours code (Functions, requests, etc), this events stays in an queue and passing one by one in the *Event Loop*.
- **Event Loop:** Resolves ultras fast events coming from the *Event Queue*. In case it cannot be resolved quickly, it sends the event to the *Thread Pool*
- **Thread Pool:** Manages events asynchronously, once finished, it returns it to the *Event Loop*. The *Event Loop* decides if it is passed to the *Event Queue* or not.

### Single Thread
Is necessary treat the errors, one error can crash all the code (disadvantage of Single Threading code execution). [Example](./concepts/singleThread.js)

<div align="right">
  <small><a href="#content">🡡 return</a></small>
</div>

## Handling Async
### Callbacks


