# ECMAScript Polyfill for Microsoft JScript 
Microsoft JScript version of JavaScript with Polyfills for common functions and objects.  

Microsoft JScript (5.8, today) only provides these objects, with fewer functions than common JS today:
- Object
- WScript
- Math
- String
- Boolean
- Array
- Number
- Date
- RegExp
- Function (the function object itself)
- Error
- VBArray
- Enumarator
- Global
- ActiveXObject

So the goal is to implement:
- [X] console
- [X] JSON
- [X] XmlHttoRequest
- [ ] probably alert, prompt and confirm functions are possible through Wscript?
- [X] Request, Response and fetch (being wrappers to xmlhttprequest)
- [ ] escape and unescape functions
- [ ] WeakMap
- [ ] Proxy
- [ ] Symbol
- [ ] Reflect 
- [ ] Map, Set, WeakMap and WeakSet
- [ ] BigNum/BigInteger
- [ ] Crypto API
- [ ] Audio API
- [ ] Intl API
- [ ] Typed Arrays
- [ ] "open" function to call web browser
- [X] setInterval / setTimeout 
- [ ] clearInterval / clearTimeout functions
- [X] atob / btoa functions
- [ ] File and FileSystem API
- [X] ES5 functions polyfills
- [X] ES6 functions polyfills
- [X] ES2016 functions polyfills
- [X] ES2017 functions polyfills

Things that probably won't be possible to implement:
- let, const
- async, await, promises
- classes and extends
- import/export
- of keyword
- scheduler
- sockets/websockets
