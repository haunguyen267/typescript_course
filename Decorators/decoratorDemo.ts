function classDecoratorFactory(price: number) {
  console.log("Class Decorator Factory")
  return (constructor: Function) => {
    console.log("Class Decorator");
    console.log(constructor)
    constructor.prototype.price = price
  }
}

function classDecorator(constructor: Function) {
  console.log("Class Decorator");
  console.log(constructor)
  constructor.prototype.price = 1000
}

function propertyDecorator(target: any, propertyName: string) {
  console.log("Property Decorator");
  console.log(target.constructor);
  console.log(propertyName);
}

function methodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target);
  console.log(methodName);
  console.log(descriptor);
}

function paramDecorator(target: any, methodName: string, paramIndex: number) {
  console.log("Param Decorator");
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
}


@classDecoratorFactory(1235)
class Product {
  @propertyDecorator
  name:string = "Galaxy"

  constructor(id: number) {

  }

  @methodDecorator
  print(@paramDecorator test: string): void {
    console.log(this.name);
  }
}

let p = new Product(200)
console.log("Price: " + (<any>p).price);
