main.ts === index.js (React)

templates are made in HTML, styling is CSS (sass/less)
- what about tailwind, etc.?


COmponents
- decorator: take a property or class and add a behavoir to it
- do decorators work similarly to extended classes?
  - like adding a spoiler to a car - you can add it on but you can remove it and it is still a car
  - more like an interface
  - not doing and prototypal inheritance

``` typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'app-root', //
    standalone: true, 
    // angular history of modules --> didn't work at scale and this flag indicates it doesn't need anythign else to run
    template: `<h1> Hey, Frontend Masters! </h1>`, 
    //for large templates move to a separate html file
    styles: `h1 { color: red }`
    // string in component or put in a separate file THESE ARE SCOPED TO THE COMPONENT
    //you can still use a global style sheet!
})
class AppComponent {} //no plans for functional components
```