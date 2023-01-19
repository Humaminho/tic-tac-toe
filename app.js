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
        
    }
    const tickBox = (e) => {
        const targetBox = e.target.getAttribute('data-index');
        GAMEBOARD[targetBox] = playerTurn;
        render();
        checkWin();
        // checkDraw();
        switchPlayer();
    }
    const addEvent = () => {
        for ( let i = 0 ; i < BOXES.length ; i++ ) {
        BOXES[i].addEventListener( "click", tickBox, { once: true });
    }}
    addEvent();
    
    render();


})();