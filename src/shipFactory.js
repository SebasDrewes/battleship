/* eslint-disable guard-for-in */
const shipFactory = (length, index) => {
  const shipNumber = index;
  const hitPoints = {};
  for (let i = 0; i < length; i += 1) {
    hitPoints[index + i] = 'noHit';
  }
  const hit = (data) => {
    hitPoints[data] = 'hit';
  };
  const isSunk = () => {
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const property in hitPoints) {
      if (hitPoints[property] === 'hit') {
        return true;
      }
      return false;
    }
  };

  return {
    hitPoints, hit, isSunk, shipNumber,
  };
};

export default {
  shipFactory,
};
