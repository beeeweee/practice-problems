function doingTheMathCongo (num1,num2,num3,num4,num5){
    var mathStep1 = num1*num2;
    var mathStep2 = mathStep1 +num3;
    var mathStep3 = mathStep2 / num4;
    var mathStep4 = mathStep3 - num5;
    return mathStep4;
}
console.log(doingTheMathCongo(3,2,6,3,5));