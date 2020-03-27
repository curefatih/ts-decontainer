# ts-decontainer

Creating class decorator

```js
import {CreateClassDecorator} from "ts-decontainer";
export const Controller = CreateClassDecorator("controllers", (value, f) => {
  return {
    type: "json",
    target: f,
    path: value
  }
})
```

Using class decorator:

```js

@Controller("/user") // "/user" is value prop
class UserController {
  // cool things
}

```


____

Creating decorator factory

```js
import {CreateDecoratorFactory} from "ts-decontainer";

const Route = CreateDecoratorFactory("routes",
  (value, target, propertyKey, descriptor) => {
    // do something

    return {
      ...value,
      function: descriptor.value
    } // return a object for describing your function
  });
```

Using this decorator:

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

____

Getting marked globals:

```js
Container.getAll();
// eg. return
// {
//   routes: [
//      { function: [Function: classMethod] },
//      { method: 'post', function: [Function: otherClassMethod] }
//    ],
//   controllers: [
//     { type: 'json', target: [Function: UserController], path: '/user' }
//   ]
// }

// or specially select
Container.get("routes")
// returns:
// [
//   { function: [Function: classMethod] },
//   { method: 'post', function: [Function: otherClassMethod] }
// ]

```
