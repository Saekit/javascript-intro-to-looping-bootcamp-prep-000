function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return `I am ${i} strange loops.`;
    } else {
      `I am ${i} strange loops.`;
    }
  }
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
