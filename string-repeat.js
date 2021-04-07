// Write a function called repeat_string which repeats the given string str exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

console.log('=== STRING REPEAT ===');
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(5, 'Hello'));
