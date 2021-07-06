/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const shipFactory = (index, length) => {
  const hitPoints = {};
  const shipLength = length;
  for (let i = 0; i < length; i += 1) {
    hitPoints[index + i] = 'noHit';
  }
  const hit = (hitpoint) => {
    hitPoints[hitpoint] = 'hit';
  };
  // eslint-disable-next-line consistent-return
  const isSunk = () => {
    const arrayofHitPointsValues = Object.values(hitPoints);
    if (arrayofHitPointsValues.every((value) => value === 'hit')) {
      return true;
    }
    return false;
  };

  return {
    hitPoints, hit, isSunk, shipLength,
  };
};

export default {
  shipFactory,
};
