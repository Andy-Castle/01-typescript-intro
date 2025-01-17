//Como funcionan las funciones con tipados

function addNumbers(a: number, b: number): number {
  return a + b;
}

// const result: number = addNumbers(1, 2);

// console.log({ result });

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

// const result2: string = addNumbersArrow(1, 2);

// console.log({ result2 });

function multiply(firstNumber: number, secondNUmber?: number, base: number = 2) {
  return firstNumber * base;
}

// const multiplyResult: number = multiply(5);

// console.log({ multiplyResult });

//FUNCIONES CON OBJETOS COMO ARGUMENTOS
//Aqui se vio como se usan las funciones dentro de los objetos como argumentos

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const Strider: Character = {
  name: "Stider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(Strider, 10);
healCharacter(Strider, 30);

Strider.showHp();
