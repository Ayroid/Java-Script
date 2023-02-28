
//.includes() returns true if the word is present in the text

const sentence = 'fox The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The Word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(sentence.startsWith(word)) //Returns True
console.log(sentence.endsWith(word)) //Returns False