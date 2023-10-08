function getLetterFrequency(words) {
  // Start coding here
  words = words.toLowerCase();
  let result = {}
  for(let letter of words){
    console.log(letter);
    if (result[letter]) {
      result[letter]++;
      
    } else {
      result[letter] = 1;
    }
    
  }

  return result;
}

const str = "Techupth";

getLetterFrequency(str);
console.log(getLetterFrequency(str));


/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
