# ts-decorator-creator


Creating decorator factory

```js
import {CreateDecoratorFactory, Container} from "./ts-decorator-creator";

const Route = CreateDecoratorFactory("routes",
  (value, target, propertyKey, descriptor) => {
    // do something

    return {
      ...value,
      function: descriptor.value
    } // return a object for describing your function
  });
```

Using this Decorator:

```js

class A {

  @Route()
  public classMethod() {
    // doing awesomethings
  }

  @Route({
    // can add property. this poperties are your "value" parameter.
    // "Creating decorator factory" section
    method: "post" 
  })
  public otherClassMethod() {
    // doing awesomethings
  }

}

```

Getting types:

```js
Container.get("routes");

// returns:
// [
//   { function: [Function: classMethod] },
//   { method: 'post', function: [Function: otherClassMethod] }
// ]

```