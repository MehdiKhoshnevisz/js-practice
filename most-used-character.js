function mostUsedChar(value) {
  const MAX_COUNT = 1;
  let charsArray = [];
  let mostUsedChar = '';

  for (char in value) {
    charsArray.push({
      name: value[char],
      count: 1
    })
  }

  charsArray = charsArray.map(item => {
    let counter = 1;
    charsArray.forEach(character => {
      if (item.name === character.name) {
        item.count = counter++;
      }
    });
    return item;
  });

  charsArray.forEach((item, index) => {
    if (item.count > MAX_COUNT) {
      mostUsedChar = item.name;
    }
  });

  return mostUsedChar;
}

console.log(mostUsedChar("Hello World!"));