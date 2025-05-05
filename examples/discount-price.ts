

let productPrice: number = 18000000;
let discountPercentage: number = 20;
let isDiscountAvailable = true;


let finalPrice: number;


if (isDiscountAvailable) {
    finalPrice = productPrice - (productPrice * discountPercentage) / 100;
} else {
    finalPrice = productPrice;
}


console.log(`The final price of the product is ${finalPrice} Toman`);

