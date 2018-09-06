function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return `I am ${i} strange loops.`;
    } else {
      `I am ${i} strange loops.`;
    }
  }
}
console.log(forLoop(['a', 'b', 'c']))
function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';
}
function doWhileLoop(array) {
  do {
    array.pop();
    incrementVariable();
  } while (array.length > 0 && incrementVariable());
}
