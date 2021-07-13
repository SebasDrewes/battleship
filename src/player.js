const playerTurn = (playerGameBoard, enemyGameBoard, index) => {
  function compareElements(arr1, index) {
    return arr1.some((number) => index === number);
  }
  // solo ejecuta funcion si selecciona un movimiento valido.
  if (enemyGameBoard.gameBoard[index] !== 'hit' && enemyGameBoard.gameBoard[index] !== 'noHit') {
    enemyGameBoard.receiveAttack(index);
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    // array constituido por indexes validos
    const validArray = [];
    // loop para pushear index vacios para luego seleccionar uno random;
    for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
      if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit'
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[i]) === false) {
        validArray.push(i);
      }
    }
    // seleccion un index valido
    const randomIndex = validArray[Math.floor(Math.random() * validArray.length)];

    playerGameBoard.receiveAttack(randomIndex);
    console.log(playerGameBoard.gameBoard);
  }
};
export default {
  playerTurn,
};
