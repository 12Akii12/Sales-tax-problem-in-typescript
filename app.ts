//Sales Tax problem

enum GoodsType {
  ExemptedGood = 1,
  TaxPaidGood = 2,
}

let typeOfGood = GoodsType.TaxPaidGood;
let quantityOfGood = 0;
let nameOfGood = "";
let goodPrice = 0;
let isImported = false;

const goodsValues = (
  nameGood: string,
  goodsPriceVal: number,
  quantityGood: number,
  GoodsType: any,
  isImportedVal: boolean
) => {
  nameOfGood = nameGood;
  goodPrice = goodsPriceVal;
  quantityOfGood = quantityGood;
  typeOfGood = GoodsType.TaxPaidGood;
  isImported = isImportedVal;
};

const computeGoodsSalesTax = (element: any) => {
  let tax: number = 0;
  if (element.isImported) {
    tax += element.goodPrice * 0.05;
  }

  switch (element.typeOfGood) {
    case GoodsType.ExemptedGood:
      break;
    case GoodsType.TaxPaidGood:
      tax += element.goodPrice * 0.1;
      break;
  }
  return Math.round(tax * 100) / 100;
};

let arrInput: any = [
  {
    nameOfGood: "Book",
    goodPrice: 12.49,
    quantityOfGood: 1,
    typeOfGood: GoodsType.ExemptedGood,
    isImported: false,
  },
  {
    nameOfGood: "Music CD",
    goodPrice: 14.99,
    quantityOfGood: 1,
    typeOfGood: GoodsType.TaxPaidGood,
    isImported: false,
  },
  {
    nameOfGood: "Chocolate Bar",
    goodPrice: 0.85,
    quantityOfGood: 1,
    typeOfGood: GoodsType.ExemptedGood,
    isImported: false,
  },
];

let arrInput1 = [
  {
    nameOfGood: "Imported Chocolate",
    goodPrice: 10,
    quantityOfGood: 1,
    typeOfGood: GoodsType.ExemptedGood,
    isImported: true,
  },
  {
    nameOfGood: "Imported Perfume",
    goodPrice: 47.5,
    quantityOfGood: 1,
    typeOfGood: GoodsType.TaxPaidGood,
    isImported: true,
  },
];

let arrInput2 = [
  {
    nameOfGood: "Imported Perfume",
    goodPrice: 27.99,
    quantityOfGood: 1,
    typeOfGood: GoodsType.TaxPaidGood,
    isImported: true,
  },
  {
    nameOfGood: "Perfume",
    goodPrice: 18.99,
    quantityOfGood: 1,
    typeOfGood: GoodsType.TaxPaidGood,
    isImported: false,
  },
  {
    nameOfGood: "Headache Pills",
    goodPrice: 9.75,
    quantityOfGood: 1,
    typeOfGood: GoodsType.ExemptedGood,
    isImported: false,
  },
  {
    nameOfGood: "Imported Chocolate",
    goodPrice: 11.25,
    quantityOfGood: 1,
    typeOfGood: GoodsType.ExemptedGood,
    isImported: true,
  },
];

const printSalesTax = (input: any) => {
  let total: number = 0;
  let totalTaxes: number = 0;

  input.forEach((ele: any) => {
    let tax = computeGoodsSalesTax(ele);
    totalTaxes += tax;
    total += tax + ele.goodPrice * ele.quantityOfGood;

    console.log(`${ele.quantityOfGood} ${ele.nameOfGood}:${ele.goodPrice + tax}`);
  });

  console.log("totalTaxes:", totalTaxes);
  console.log("total", Math.round(total * 100) / 100);
};

console.log(printSalesTax(arrInput));
console.log(printSalesTax(arrInput1));
console.log(printSalesTax(arrInput2));
