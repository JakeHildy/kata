console.log('=== DUPLICATE ENCODER ===');

// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when
// determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

let test1 = 'din';
let test2 = 'recede';
let test3 = 'success';
let test4 = '(( @';

function duplicateEncode(word) {
  let str = word.toLowerCase();

  let testObj = {};
  str.split('').forEach(el => {
    !!testObj[el] ? testObj[el]++ : (testObj[el] = 1);
  });

  let finalArr = [];
  str.split('').forEach(el => {
    if (testObj[el] > 1) finalArr.push(')');
    else finalArr.push('(');
  });

  return finalArr.join('');
}

console.log(duplicateEncode(test4));
