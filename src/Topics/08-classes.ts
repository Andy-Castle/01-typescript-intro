export class Person {
  // public name: string;
  // private address: string;

  constructor(public name: string, private address: string = "No Address") {}
}

const ironman = new Person("IronMan", "New York");

console.log(ironman);

//Constructor de una clase
