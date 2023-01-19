const log = console.log;
const game = (function() {
    const GAMEBOARD = ['','','','','','','','',''];
    
    const X_BUTTON = document.querySelector('#x-btn');
    const O_BUTTON = document.querySelector('#o-btn');
    const REPLAY_BUTTON = document.querySelector('#replay-btn');
    const BOXES = document.querySelectorAll('.box');

    const X_TURN = 'X';
    const O_TURN = 'O';
    let playerTurn = X_TURN;

    const A = GAMEBOARD[0];
    const B = GAMEBOARD[1];
    const C = GAMEBOARD[2];
    const D = GAMEBOARD[3];
    const E = GAMEBOARD[4];
    const F = GAMEBOARD[5];
    const G = GAMEBOARD[6];
    const H = GAMEBOARD[7];
    const I = GAMEBOARD[8];
    
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
    }
    const checkDraw = () => {
        if ( A !== '' && B !== '' && C !== '' && D !== '' && E !== '' && F !== '' && G !== '' && H !== '' && I !== '') {
            log("It's a draw");
        }
    }
    const tickBox = (e) => {
        const targetBox = e.target.getAttribute('data-index');
        GAMEBOARD[targetBox] = playerTurn;
        render();
        checkWin();
        checkDraw();
        switchPlayer();
    }
    const addEvent = () => {
        for ( let i = 0 ; i < BOXES.length ; i++ ) {
        BOXES[i].addEventListener( "click", tickBox, { once: true });
    }}
    addEvent();
    
    render();


})();