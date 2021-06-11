const isAdult = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greet = function (age) {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greet(40)); // "Hello there"
console.log(greet(10)); // "Hey kiddo"

const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]