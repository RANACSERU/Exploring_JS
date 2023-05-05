function findSmallestWord(words) {
    let smallest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < smallest.length) {
        smallest = words[i];
      }
    }
    return smallest;
    
  }
  
  let words = ["hello", "absdsdsdsdv", "dkfjdf"];
  let smallest = findSmallestWord(words);
  console.log(smallest);
  // Output: "abv"
  

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
  }

  for (const iterator of object) {
    
  }