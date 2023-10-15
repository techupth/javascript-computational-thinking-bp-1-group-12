function countVowels(words) {
  // Start coding here
  let sum = 0
  for(let i in words){
    if(words[i] == 'a'||words[i] == 'e'||words[i] == 'i'||words[i] == 'o'||words[i] == 'u'||words[i] == 'A'||words[i] == 'E'||words[i] == 'I'||words[i] == 'O'||words[i] == 'U'){
      sum += 1
    }
  }
  console.log(sum)
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

