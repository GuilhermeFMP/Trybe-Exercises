let word = 'tryber';

let invertWord = '';

for (let index = word.length; index > 0; index -= 1) {
   invertWord = invertWord + word[index - 1];
}

console.log(invertWord);