var speech = "I am a good   person. lorem*5";
var count = 0;
for( var i = 0 ; i<speech.length; i++){
    if((speech[i] == ' ' && speech[i-1] != ' ') || speech[i] == '.'){
        count++;
    }
}

console.log(count);