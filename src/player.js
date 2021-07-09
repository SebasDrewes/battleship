const player = ((playerGameBoard, enemyGameBoard) => {
  const takeTurn = (index) => {
    // solo ejecuta funcion si selecciona un movimiento valido.
    if (enemyGameBoard.gameBoard[index] !== 'hit' && enemyGameBoard.gameBoard[index] !== 'noHit') {
      enemyGameBoard.receiveAttack(index);

      const validArray = [];
      // loop para pushear index vacios para luego seleccionar uno random;
      for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
        if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit') {
          validArray.push(i);
        }
      }
      const randomIndex = validArray[Math.floor(Math.random() * validArray.length)];

      playerGameBoard.receiveAttack(randomIndex);
    }
  };

  return {
    takeTurn,
  };
});
export default {
  player,
};
