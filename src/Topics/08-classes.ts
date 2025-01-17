export class Person {
  // public name: string;
  // private address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

// export class Hero extends Person {
//   constructor(public alterEgo: string, public age: number, public realName: string) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const tony = new Person("Tony ", "Stark", "New York");

const ironman = new Hero("IronMan", 45, "Tony", tony);

console.log(ironman);

//Constructor de una clase

//Extender una clase

//Priorizar composición sobre herencia
