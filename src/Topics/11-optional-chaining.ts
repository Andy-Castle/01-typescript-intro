interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Andy",
};

const passenger2: Passenger = {
  name: "Fernanda",
  children: ["Natalia", "Elizabeth"],
};

const printChildren = (passenger: Passenger) => {
  //Esto es el encadenamiento opcional - ?
  //Si viene regresa el length y si no regresa el 0
  const howManyChildren = passenger.children?.length || 0;

  //const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);

// const printChildrenNumber = (passenger: Passenger): number => {
//   //Esto es el encadenamiento opcional - ?
//   //Si viene regresa el length y si no regresa el 0
//   // const howManyChildren = passenger.children?.length || 0;

//   if (!passenger.children) return 0;

//   const howManyChildren = passenger.children!.length;

//   console.log(passenger.name, howManyChildren);

//   return howManyChildren;
// };

// printChildrenNumber(passenger1);
