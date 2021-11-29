// const arguments1 = process.argv;
// //mars-rover problem
// enum ROVERDIR {
//   N = 1,
//   E = 2,
//   S = 3,
//   W = 4,
// }
// let x = 0;
// let y = 0;
// let roverFacing = ROVERDIR.N;
// const roverDefaultPosition = (xPos: number, yPos: number, roverFacingDir: number) => {
//   x = xPos;
//   y = yPos;
//   roverFacing = roverFacingDir;
// };
// const roverPositionDirction = () => {
//   var dir = "N";
//   if (roverFacing == 1) {
//     dir = "N";
//   } else if (roverFacing == 2) {
//     dir = "E";
//   } else if (roverFacing == 3) {
//     dir = "S";
//   } else if (roverFacing == 4) {
//     dir = "W";
//   }
//   console.log(x + " " + y + " " + dir + " ");
// };
// const roverPossibleMove = (letters: string) => {
//   for (let i = 0; i < letters.length; i++) {
//     roverMoments(letters.charAt(i));
//   }
// };
// const roverMoments = (letter: string) => {
//   if (letter == "L") {
//     turnLeft();
//   } else if (letter == "R") {
//     turnRight();
//   } else if (letter == "M") {
//     moveRover();
//   }
// };
// const turnLeft = () => {
//   if (roverFacing == ROVERDIR.N) {
//     roverFacing = ROVERDIR.W;
//   } else if (roverFacing == ROVERDIR.W) {
//     roverFacing = ROVERDIR.S;
//   } else if (roverFacing == ROVERDIR.S) {
//     roverFacing = ROVERDIR.E;
//   } else if (roverFacing == ROVERDIR.E) {
//     roverFacing = ROVERDIR.N;
//   }
// };
// const turnRight = () => {
//   if (roverFacing == ROVERDIR.N) {
//     roverFacing = ROVERDIR.E;
//   } else if (roverFacing == ROVERDIR.E) {
//     roverFacing = ROVERDIR.S;
//   } else if (roverFacing == ROVERDIR.S) {
//     roverFacing = ROVERDIR.W;
//   } else if (roverFacing == ROVERDIR.W) {
//     roverFacing = ROVERDIR.N;
//   }
// };
// const moveRover = () => {
//   if (roverFacing == ROVERDIR.N) {
//     y = y + 1;
//   } else if (roverFacing == ROVERDIR.E) {
//     x = x + 1;
//   } else if (roverFacing == ROVERDIR.S) {
//     y = y - 1;
//   } else if (roverFacing == ROVERDIR.W) {
//     x = x - 1;
//   }
//   console.log("x y dir values", x + " " + y + " " + roverFacing);
// };
// roverDefaultPosition(1, 2, ROVERDIR.N);
// roverPossibleMove("LMLMLMLMM");
// roverPositionDirction();
// roverDefaultPosition(3, 3, ROVERDIR.E);
// roverPossibleMove("MMRMMRMRRM");
// roverPositionDirction();
//Sales Tax problem
var GoodsType;
(function (GoodsType) {
    GoodsType[GoodsType["ExemptedGood"] = 1] = "ExemptedGood";
    GoodsType[GoodsType["TaxPaidGood"] = 2] = "TaxPaidGood";
})(GoodsType || (GoodsType = {}));
var typeOfGood = GoodsType.TaxPaidGood;
var quantityOfGood = 0;
var nameOfGood = "";
var goodPrice = 0;
var isImported = false;
var goodsValues = function (nameGood, goodsPriceVal, quantityGood, GoodsType, isImportedVal) {
    nameOfGood = nameGood;
    goodPrice = goodsPriceVal;
    quantityOfGood = quantityGood;
    typeOfGood = GoodsType.TaxPaidGood;
    isImported = isImportedVal;
};
var computeGoodsSalesTax = function (element) {
    var tax = 0;
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
var arrInput = [
    {
        nameOfGood: "Book",
        goodPrice: 12.49,
        quantityOfGood: 1,
        typeOfGood: GoodsType.ExemptedGood,
        isImported: false
    },
    {
        nameOfGood: "Music CD",
        goodPrice: 14.99,
        quantityOfGood: 1,
        typeOfGood: GoodsType.TaxPaidGood,
        isImported: false
    },
    {
        nameOfGood: "Chocolate Bar",
        goodPrice: 0.85,
        quantityOfGood: 1,
        typeOfGood: GoodsType.ExemptedGood,
        isImported: false
    },
];
var arrInput1 = [
    {
        nameOfGood: "Imported Chocolate",
        goodPrice: 10,
        quantityOfGood: 1,
        typeOfGood: GoodsType.ExemptedGood,
        isImported: true
    },
    {
        nameOfGood: "Imported Perfume",
        goodPrice: 47.5,
        quantityOfGood: 1,
        typeOfGood: GoodsType.TaxPaidGood,
        isImported: true
    },
];
var arrInput2 = [
    {
        nameOfGood: "Imported Perfume",
        goodPrice: 27.99,
        quantityOfGood: 1,
        typeOfGood: GoodsType.TaxPaidGood,
        isImported: true
    },
    {
        nameOfGood: "Perfume",
        goodPrice: 18.99,
        quantityOfGood: 1,
        typeOfGood: GoodsType.TaxPaidGood,
        isImported: false
    },
    {
        nameOfGood: "Headache Pills",
        goodPrice: 9.75,
        quantityOfGood: 1,
        typeOfGood: GoodsType.ExemptedGood,
        isImported: false
    },
    {
        nameOfGood: "Imported Chocolate",
        goodPrice: 11.25,
        quantityOfGood: 1,
        typeOfGood: GoodsType.ExemptedGood,
        isImported: true
    },
];
var printSalesTax = function (input) {
    var total = 0;
    var totalTaxes = 0;
    input.forEach(function (ele) {
        var tax = computeGoodsSalesTax(ele);
        totalTaxes += tax;
        total += tax + ele.goodPrice * ele.quantityOfGood;
        console.log("".concat(ele.quantityOfGood, " ").concat(ele.nameOfGood, ":").concat(ele.goodPrice + tax));
    });
    console.log("totalTaxes:", totalTaxes);
    console.log("total", Math.round(total * 100) / 100);
};
console.log(printSalesTax(arrInput));
console.log(printSalesTax(arrInput1));
console.log(printSalesTax(arrInput2));
