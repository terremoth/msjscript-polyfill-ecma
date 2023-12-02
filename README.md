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

So the goal is to implement:
- [ ] console
- [ ] JSON
- [ ] XmlHttoRequest
- [ ] probably alert, prompt and confirm functions are possible through Wscript?
- [ ] Request, Response and fetch (being wrappers to xmlhttprequest)
- [ ] require
- [ ] WeakMap
- [ ] Proxy
- [ ] Reflect 
- [ ] Map, Set, WeakMap and WeakSet
- [ ] BigNum/BigInteger
- [ ] Crypto API
- [ ] Audio API
- [ ] Intl API
- [ ] "open" function to call web browser
- [ ] setInterval / setTimeout & clearInterval / clearTimeout functions
- [ ] atob / btoa functions
- [ ] encodeURI/encodeURIComponent and decodeURI/decodeURIComponent
- [ ] File and FileSystem API
- [ ] Add other already defined object functions polyfills that aren't present

Things that probably won't be possible to implement:
- let, const
- async, await, promises
- classes and extends
- import/export
- of keyword
- scheduler
- sockets/websockets
