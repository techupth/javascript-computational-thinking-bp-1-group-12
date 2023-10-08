function countVowels(words) {
  // Start coding here
  let countLetter = 0
  for (let letter of words) {
    if(letter === "a"||letter === "e"||letter === "i"||letter === "o"||letter === "u"
    ||letter === "A"||letter === "E"||letter === "I"||letter === "O"||letter === "U"){
      countLetter = countLetter+1 
    }
  };
  return countLetter
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2