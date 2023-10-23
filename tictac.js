
const spans = document.querySelectorAll('span');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
 
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
 
function handleCellClick(span, index) {
 if (gameBoard[index] === '' && gameActive) {
 span.textContent = currentPlayer;
 gameBoard[index] = currentPlayer;
 if (checkWin()) {
 gameActive = false;
 message.textContent = `${currentPlayer} wins!`;
 } else if (!gameBoard.includes('')) {
 gameActive = false;
 message.textContent = "It's a draw!";
 } else {
 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 message.textContent = `Player ${currentPlayer}'s turn`;
 }
 }
}
 
function checkWin() {
 const winCombos = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
 ];
 
 for (const combo of winCombos) {
 const [a, b, c] = combo;
 if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
 return true;
 }
 }
 return false;
}
 
function handleResetClick() {
 gameBoard = ['', '', '', '', '', '', '', '', ''];
 gameActive = true;
 currentPlayer = 'X';
 message.textContent = `Player ${currentPlayer}'s turn`;
 spans.forEach(span => span.textContent = '');
}
 
spans.forEach((span, index) => {
 span.addEventListener('click', () => handleCellClick(span, index));
});
 
resetButton.addEventListener('click', handleResetClick);