const shipFactory = (index, length, position) => {
  const hitPoints = {};
  const shipLength = length;
  const shipPosition = position;
  // logica horizontal / vertical
  if (shipPosition === 'horizontal') {
    for (let i = 0; i < length; i += 1) {
      hitPoints[index + i] = 'noHit';
    }
  } else if (shipPosition === 'vertical') {
    for (let i = 0; i < length * 11; i += 11) {
      hitPoints[index + i] = 'noHit';
    }
  }
  const hit = (hitpoint) => {
    hitPoints[hitpoint] = 'hit';
  };
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
