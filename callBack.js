function callBack(name, age ,task){
    console.log('Hello ', name);
    console.log('Age ', age);
    // washHand();
    // takeSower();
    task();

}

function washHand(){
    console.log('Wash ur hand with soap')
}
function takeSower(){
    console.log('Take sower for refreshment');
}
function goSleep(){
    console.log('Go to Sleep');
}

callBack('Karim Uddin','22',takeSower,washHand);
callBack('Rahim Uddin','33',washHand);
callBack('Jalal Uddin','33', goSleep);
