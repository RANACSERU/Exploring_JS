var a = 2, b = 5;

console.log("Before swap a = ", a, "b = ", b);

a = a+b;
b = a-b;
a = a- b;

console.log("After swap a = ", a, "b = ", b);