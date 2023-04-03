// function calFibo(n){
//     var a= 0, b=1;
//     console.log(a);
//     console.log(b);
//     for(var i = 2; i<n ; i++){
//         var fibo = a+b;
//         a =b;
//         b = fibo;
//         console.log(fibo);

//     }

// }
// calFibo(10);





// //Using Array

function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if (n == 1){
        return [0,1]
    }

    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1]  + fibo[n-2];
        fibo.push(nextElement);

        return fibo;
    }
}


var result = fibonacci(5);

console.log(result);