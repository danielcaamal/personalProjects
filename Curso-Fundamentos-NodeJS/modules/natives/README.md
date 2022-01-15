# HOW TO USE NATIVE CODE WITH NODEJS

1. Install `node-gyp` global. For this execute:
```npm i -g node-gyp```
2. Create the source file. [Example](https://nodejs.org/api/addons.html#addons_hello_world)
3. Create the file `binding.gyp` in the root module.
4. In the root folder execute:
```node-gyp configure```
5. Then will be a build folder.
6. In the module folder, execute:
```node-gyp build```
7. The module will be compiled. The you can used as module. You can see it as `build/Release/addon.node` 
8. For use it create a JS file. For import:
```JS
const addon = require('./build/Release/addon');
```
9. For using it:
```JS
addon.hello() // => world
```
