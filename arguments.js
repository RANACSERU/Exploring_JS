function addNumbers(num1, num2){
        var sum =0;
    // var number = arguments[4];
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        var sum = sum + element;
        //  return element;
        // console.log(element);
    }
    return sum;
//     console.log(number);
//     return num1 + num2;
}

var result = addNumbers(3, 5, 3,4,15);
console.log(result);