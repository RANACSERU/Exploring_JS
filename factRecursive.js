function factorial(n){
    if(n>1){
        return n*factorial(n-1);
    }
    else
    return 1;
}

const result = factorial(6);

console.log(result);