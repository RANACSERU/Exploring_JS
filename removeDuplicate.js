var array = [1,2,3,2,3,5,6,5,4,2,3,5,5,63,23];
var uniqueArray = [];

for ( var i = 0; i<array.length ; i++){
    var element = array[i];
    var index = uniqueArray.indexOf (element);
    if(index == -1){
        uniqueArray.push(element);
    }
}


console.log(uniqueArray);