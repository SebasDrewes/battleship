function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  let newString = '';
  for (let i = (string.length - 1); i !== -1; i -= 1) {
    newString += string[i];
  }
  return newString;
}

export default {
  capitalize,
  reverseString,
};
