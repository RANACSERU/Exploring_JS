// var a = 4;
var fact = 1;
function factorial(num){    
    if(num>=1){
        for(var i = num; i>=1; i--){
            fact = fact* i;
        }
    return fact;
}
   else
    return 1;  
}

// fact = 1;



var result = factorial(5);
console.log(result);