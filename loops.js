function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    if (i === 1) {
      return `I am 1 strange loop.`;
    } else {
      return `I am ${i} strange loops.`;
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';
}

function doWhileLoop(array) {
  var i = 0;
  function incrementVariable() {
  i = i + 1;
}
  do {
    incrementVariable();
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}
