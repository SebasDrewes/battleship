/* eslint-disable no-restricted-globals */
let lastIndex = '';
let anteultimoIndex = '';
const playerTurn = (playerGameBoard, enemyGameBoard, index) => {
  function compareElements(arr1, item) {
    return arr1.some((number) => item === number);
  }
  // solo ejecuta funcion si selecciona un movimiento valido.
  if (enemyGameBoard.gameBoard[index] !== 'hit' && enemyGameBoard.gameBoard[index] !== 'noHit') {
    enemyGameBoard.receiveAttack(index);
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    // array constituido por indexes validos
    let validArray = [];
    // loop para pushear index vacios para luego seleccionar uno random;
    for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
      if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit'
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[i]) === false) {
        validArray.push(i);
      }
    }
    // IA para probar casilleros adjacentes si ultimo moviemiento fue hit
    if (playerGameBoard.gameBoard[lastIndex] === 'hit') {
      validArray = [];
      anteultimoIndex = lastIndex;
      if ((playerGameBoard.gameBoard[lastIndex - 1] === '' || !(isNaN(playerGameBoard.gameBoard[lastIndex - 1])))
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[lastIndex - 1]) === false) {
        validArray.push(lastIndex - 1);
      }
      if ((playerGameBoard.gameBoard[lastIndex + 1] === '' || !(isNaN(playerGameBoard.gameBoard[lastIndex + 1])))
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[lastIndex + 1]) === false) {
        validArray.push(lastIndex + 1);
      }

      if ((playerGameBoard.gameBoard[lastIndex + 11] === '' || !(isNaN(playerGameBoard.gameBoard[lastIndex + 11])))
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[lastIndex + 11]) === false) {
        validArray.push(lastIndex + 11);
      }
      if ((playerGameBoard.gameBoard[lastIndex - 11] === '' || !(isNaN(playerGameBoard.gameBoard[lastIndex - 11])))
      && compareElements(invalidIndexArray, playerGameBoard.gameBoard[lastIndex - 11]) === false) {
        validArray.push(lastIndex - 11);
      }
      if (!validArray[0]) {
        for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
          if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit'
            && compareElements(invalidIndexArray, playerGameBoard.gameBoard[i]) === false) {
            validArray.push(i);
          }
        }
      }
    } else if (playerGameBoard.gameBoard[anteultimoIndex] === 'hit' && playerGameBoard.gameBoard[lastIndex] === 'noHit') {
      validArray = [];
      if ((playerGameBoard.gameBoard[anteultimoIndex - 1] === '' || !(isNaN(playerGameBoard.gameBoard[anteultimoIndex - 1])))
        && compareElements(invalidIndexArray,
          playerGameBoard.gameBoard[anteultimoIndex - 1]) === false) {
        validArray.push(anteultimoIndex - 1);
      }
      if ((playerGameBoard.gameBoard[anteultimoIndex + 1] === '' || !(isNaN(playerGameBoard.gameBoard[anteultimoIndex + 1])))
        && compareElements(invalidIndexArray,
          playerGameBoard.gameBoard[anteultimoIndex + 1]) === false) {
        validArray.push(anteultimoIndex + 1);
      }

      if ((playerGameBoard.gameBoard[anteultimoIndex + 11] === '' || !(isNaN(playerGameBoard.gameBoard[anteultimoIndex + 11])))
        && compareElements(invalidIndexArray,
          playerGameBoard.gameBoard[lastIndex + 11]) === false) {
        validArray.push(anteultimoIndex + 11);
      }
      if ((playerGameBoard.gameBoard[anteultimoIndex - 11] === '' || !(isNaN(playerGameBoard.gameBoard[anteultimoIndex - 11])))
        && compareElements(invalidIndexArray,
          playerGameBoard.gameBoard[anteultimoIndex - 11]) === false) {
        validArray.push(anteultimoIndex - 11);
      }
      if (!validArray[0]) {
        for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
          if (playerGameBoard.gameBoard[i] !== 'hit' && playerGameBoard.gameBoard[i] !== 'noHit'
              && compareElements(invalidIndexArray, playerGameBoard.gameBoard[i]) === false) {
            validArray.push(i);
          }
        }
      }
    }
    // seleccion un index valido
    const randomIndex = validArray[Math.floor(Math.random() * validArray.length)];
    lastIndex = randomIndex;
    playerGameBoard.receiveAttack(randomIndex);
  }
};
export default {
  playerTurn,
};
