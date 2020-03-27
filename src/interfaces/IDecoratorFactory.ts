interface IDecoratorFactory {
  (value, target, propertyKey: string, descriptor: PropertyDescriptor): {}
};

export default IDecoratorFactory