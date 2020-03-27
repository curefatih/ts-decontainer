import IDecoratorFactory from "interfaces/IDecoratorFactory";
import IClassDecorator from "interfaces/IClassDecorator";
import Container from "./container";

export function CreateDecoratorFactory(type: string, cb: IDecoratorFactory) {
  // set initially as array to be able to push others
  Container.set(type, [])
  return function (value?: any) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      Container.get(type).push(cb(value, target, propertyKey, descriptor))
    }
  }
}

export function CreateClassDecorator(type: string, cb: IClassDecorator) {
  Container.set(type, [])
  return function (value?: any) {
    return function (object: Function) {
      Container.get(type).push(cb(value, object));
    };
  }
}
export { Container, IDecoratorFactory, IClassDecorator }

