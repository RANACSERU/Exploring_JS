const students = [
    {id:1, name: 'Saddam', address:'tanore'},
    {id:2, name: 'Rahim', address:'tanore'},
    {id:3, name: 'Karim', address:'tanore'}
    
]

const allName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];  
    // console.log(element.name);  
    const names = element.address;
    allName.push(names);

} 
console.log(allName);  
