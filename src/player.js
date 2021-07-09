const player = ((playerGameBoard, enemyGameBoard) => {
  const takeTurn = (index) => {
    enemyGameBoard.receiveAttack(index);
    const validArray = [];
    for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
      if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit') {
        validArray.push(i);
      }
    }
    const randomIndex = validArray[Math.floor(Math.random() * validArray.length)];

    playerGameBoard.receiveAttack(randomIndex);
  };

  return {
    takeTurn,
  };
});
export default {
  player,
};
