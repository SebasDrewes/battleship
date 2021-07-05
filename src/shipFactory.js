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
  shipFactory,
};
