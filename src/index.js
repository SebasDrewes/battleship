import displayBoardsModule from './dom';
import playerModule from './player';
import createNewGameModule from './game';

const { displayBoards } = displayBoardsModule;
const { player } = playerModule;
const { createNewGame } = createNewGameModule;
const { makePlay } = createNewGameModule;

makePlay(0);
makePlay(1);
makePlay(2);
makePlay(5);
makePlay(6);
displayBoards();
makePlay(33);
makePlay(33);
displayBoards();
