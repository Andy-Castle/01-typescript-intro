export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = "Andy";
    this.address = "Cancun";
  }
}

const ironman = new Person();

console.log(ironman);
