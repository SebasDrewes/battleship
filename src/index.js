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

const shipFactory = (length) => {
  const hitPoints = [];
  for (let i = 0; i < length; i += 1) {
    hitPoints.push({ position: 'noHit' });
  }
  const hit = (index) => {
    hitPoints[index].position = 'hit';
  };
  const checkHit = (index) => {
    if (index.position === 'hit') {
      return true;
    }
    return false;
  };
  const isSunk = () => hitPoints.every(checkHit);
  return {
    hitPoints, hit, isSunk,
  };
};

export default {
  capitalize,
  reverseString,
  shipFactory,
};
