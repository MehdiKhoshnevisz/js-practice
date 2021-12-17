function findLongestString(strings) {
  let longestString = '';

  strings.forEach(string => {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });

  return longestString;
}

console.log(findLongestString(['hello', 'world', 'hello world 2', 'hello world', 'nah']));