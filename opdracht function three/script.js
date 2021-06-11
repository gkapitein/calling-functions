function doSquareCalculation1(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}

const restult = doSquareCalculation1(2, 4);
console.log(restult);

const doSquareCalculation2 = function (number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};


const uitkomst = doSquareCalculation2(2, 4);
console.log(uitkomst);

const doSquareCalculation3 = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

const oplossing = doSquareCalculation3(2, 4);
console.log(oplossing);

