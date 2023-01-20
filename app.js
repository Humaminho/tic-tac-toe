const log = console.log;
const game = (function() {
    const GAMEBOARD = ['','','','','','','','',''];
    
    const PLAYER_X = document.querySelector('#x-btn');
    const PLAYER_O = document.querySelector('#o-btn');
    const REPLAY_BUTTON = document.querySelector('#replay-btn');
    const BOXES = document.querySelectorAll('.box');
    const PLAYER_X_POP_UP = document.querySelector('.player-x-pop-up');
    const PLAYER_O_POP_UP = document.querySelector('.player-o-pop-up');
    const PLAYER_X_INPUT = document.querySelector('#player-x-input');
    const PLAYER_O_INPUT = document.querySelector('#player-o-input');
    const PLAYER_X_SUBMIT = document.querySelector('#player-x-submit');
    const PLAYER_O_SUBMIT = document.querySelector('#player-o-submit');
    const OVERLAY = document.querySelector('.overlay');

    const X_TURN = 'X';
    const O_TURN = 'O';
    let playerTurn = X_TURN;
    
    const render = () => {
        for ( let i = 0 ; i < GAMEBOARD.length ; i++) {
            const box = document.querySelector(`[data-index='${i}']`);
            box.innerText = GAMEBOARD[i];
        }
    }

    const switchPlayer = () => {
        if (playerTurn === X_TURN) playerTurn = O_TURN;
        else playerTurn = X_TURN;
    }

    const checkWin = () => {
        const A = GAMEBOARD[0];
        const B = GAMEBOARD[1];
        const C = GAMEBOARD[2];
        const D = GAMEBOARD[3];
        const E = GAMEBOARD[4];
        const F = GAMEBOARD[5];
        const G = GAMEBOARD[6];
        const H = GAMEBOARD[7];
        const I = GAMEBOARD[8];

        if ( A === B && B === C && A !== ''  ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( D === E && E === F && D !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( G === H && H === I && G !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( A === D && D === G && A !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( B === E && E === H && B !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( C === F && F === I && C !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( A === E && E === I && A !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( C === E && E === G && C !== '' ) {
            log(`Player ${playerTurn} won!`);
        }
        if ( A !== '' && B !== '' && C !== '' && D !== '' && E !== '' && F !== '' && G !== '' && H !== '' && I !== '') {
            log("It's a draw");
        }
    }

    const tickBox = (e) => {
        const targetBox = e.target.getAttribute('data-index');
        GAMEBOARD[targetBox] = playerTurn;
        render();
        checkWin();
        switchPlayer();
    }

    const addEvent = () => {
        for ( let i = 0 ; i < BOXES.length ; i++ ) {
        BOXES[i].addEventListener( "click", tickBox, { once: true });
    }}

    const createPlayer = (name, sign) => {
        return {
            name,
            sign,
        }
    }
    const toggleOverlayOn = () => {
        OVERLAY.classList.remove('off');
        OVERLAY.classList.add('on');
    }
    const toggleOverlayOff = () => {
        OVERLAY.classList.add('off');
        OVERLAY.classList.remove('on');
    }
    PLAYER_X.addEventListener('click', () => {
        PLAYER_X_POP_UP.classList.remove('closed');
        PLAYER_X_POP_UP.classList.add('open');
        toggleOverlayOn();
    });
    PLAYER_O.addEventListener('click', () => {
        PLAYER_O_POP_UP.classList.remove('closed');
        PLAYER_O_POP_UP.classList.add('open');
        toggleOverlayOn();
    });
    PLAYER_X_SUBMIT.addEventListener('click', () => {
        if (PLAYER_X_INPUT.value === "") {
            alert('Please insert name');
        } else {
            let playerX = createPlayer(PLAYER_X_INPUT.value, 'X')
            PLAYER_X_POP_UP.classList.add('closed');
            PLAYER_X_POP_UP.classList.remove('open');
            PLAYER_X.classList.add('selected');
            toggleOverlayOff();
            return playerX;
        }
    });
    PLAYER_O_SUBMIT.addEventListener('click', () => {
        if (PLAYER_O_INPUT.value === "") {
            alert('Please insert name');
        } else {
            let playerO = createPlayer(PLAYER_O_INPUT.value, 'O')
            PLAYER_O_POP_UP.classList.add('closed');
            PLAYER_O_POP_UP.classList.remove('open');
            PLAYER_O.classList.add('selected');
            toggleOverlayOff();
            return playerO;
        }
    });

    const playGame = () => {
        addEvent();
        render();
    }


    return {
        playGame,
    }
})();
game.playGame();