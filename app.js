const log = console.log;
const game = (() => {
    let gameboard = ['','','','','','','','',''];
    
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
    let playerX = {};
    let playerO = {};
    let playerTurn = X_TURN;
    
    const createPlayer = (name, sign) => {
        return {
            name,
            sign,
        }
    }

    const render = () => {
        for ( let i = 0 ; i < gameboard.length ; i++) {
            const box = document.querySelector(`[data-index='${i}']`);
            box.innerText = gameboard[i];
        }
    }

    const replay = () => {
        gameboard = ['','','','','','','','',''];
        playerTurn = X_TURN;
        log(playerTurn);
        playGame();
    }
    
    const switchPlayer = () => {
        if (playerTurn === X_TURN) playerTurn = O_TURN;
        else playerTurn = X_TURN;
    }
    
    const toggleOverlayOn = () => {
        OVERLAY.classList.remove('off');
        OVERLAY.classList.add('on');
    }
    const toggleOverlayOff = () => {
        OVERLAY.classList.add('off');
        OVERLAY.classList.remove('on');
    }

    announceWinner = () => {
        if ( playerX.sign === playerTurn ) {
            toggleOverlayOn();
            OVERLAY.innerText = `${playerX.name} has won the game!`;
        } else if ( playerO.sign === playerTurn ) {
            toggleOverlayOn();
            OVERLAY.innerText = `${playerO.name} has won the game!`;
        }
        replay();
    }

    const checkWin = () => {
        const A = gameboard[0];
        const B = gameboard[1];
        const C = gameboard[2];
        const D = gameboard[3];
        const E = gameboard[4];
        const F = gameboard[5];
        const G = gameboard[6];
        const H = gameboard[7];
        const I = gameboard[8];

        if ( A === B && B === C && A !== ''  ) {
            announceWinner();
        }
        if ( D === E && E === F && D !== '' ) {
            announceWinner();
        }
        if ( G === H && H === I && G !== '' ) {
            announceWinner();
        }
        if ( A === D && D === G && A !== '' ) {
            announceWinner();
        }
        if ( B === E && E === H && B !== '' ) {
            announceWinner();
        }
        if ( C === F && F === I && C !== '' ) {
            announceWinner();
        }
        if ( A === E && E === I && A !== '' ) {
            announceWinner();
        }
        if ( C === E && E === G && C !== '' ) {
            announceWinner();
        }
        if ( A !== '' && B !== '' && C !== '' && D !== '' && E !== '' && F !== '' && G !== '' && H !== '' && I !== '') {
            log("It's a draw");
            replay();
        }
    }

    const tickBox = (e) => {
        const targetBox = e.target.getAttribute('data-index');
        gameboard[targetBox] = playerTurn;
        render();
        checkWin();
        switchPlayer();
    }

    const addEvent = () => {
        for ( let i = 0 ; i < BOXES.length ; i++ ) {
        BOXES[i].addEventListener( "click", tickBox, { once: true });
    }}

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
            playerX = createPlayer(PLAYER_X_INPUT.value, 'X');
            PLAYER_X_POP_UP.classList.add('closed');
            PLAYER_X_POP_UP.classList.remove('open');
            PLAYER_X.classList.add('selected');
            toggleOverlayOff();
            PLAYER_X_INPUT.value = "";
            if ( playerX !== {} && playerO !== {} ) replay();
        }
    });
    PLAYER_O_SUBMIT.addEventListener('click', () => {
        if (PLAYER_O_INPUT.value === "") {
            alert('Please insert name');
        } else {
            playerO = createPlayer(PLAYER_O_INPUT.value, 'O');
            PLAYER_O_POP_UP.classList.add('closed');
            PLAYER_O_POP_UP.classList.remove('open');
            PLAYER_O.classList.add('selected');
            toggleOverlayOff();
            PLAYER_O_INPUT.value = "";
            if ( playerX !== {} && playerO !== {} ) replay();
        }
    });

    const playGame = () => {
        addEvent();
        render();
    }

    return {
        playGame,
        playerTurn,
    }

})();