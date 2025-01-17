export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { tax, products } = options;

  let total = 0;

  //Aqui se aplico desestructuración - yo
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  tax: tax,
  products: shoppingCart,
});

//Aqui se aplico desestructuración - yo
// const [total, totalTax]: number[] = result;

// console.log("Total", total);
// console.log("Tax", totalTax);
