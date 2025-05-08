function LotteryCard(index,isWinning) {
    this.index = index
    this.isWinning = isWinning
    this.handleTry = function (attempt, square, squareContainer) {
        if (this.isWinning) {
            alert("Виграш")
            square.classList.add('square-correct')
        } else {
            if (attempt === 4) {
                alert('Остання спроба')
                squareContainer.innerHTML = null;
                return;
            }
            alert('Не виграв');
            square.classList.add('square-wrong')
        }
    };
}

const cards = [
    new LotteryCard(3,true),
    new LotteryCard(56,false),
    new LotteryCard(64,false),
    new LotteryCard(85,false),
    new LotteryCard(45,false),
    new LotteryCard(32,false),
    new LotteryCard(49,false),
    new LotteryCard(35,false),
    new LotteryCard(25,false),
    new LotteryCard(33,false),
    new LotteryCard(26,false),
    new LotteryCard(87,false),
    new LotteryCard(65,false),
    new LotteryCard(92,false),
    new LotteryCard(41,false),
    new LotteryCard(87,false),
    new LotteryCard(44,false),
    new LotteryCard(68,false),
    new LotteryCard(13,false),
    new LotteryCard(4,false),
    new LotteryCard(7,false),
    new LotteryCard(9,false),
    new LotteryCard(31,false),
    new LotteryCard(40,false),
]

function renderSquares(squares) {
    let attempt = 0
    const squareContainer = document.querySelector('.squares-container')
    squares.forEach((item) => {
        const square = document.createElement('div')
        const squareIndex = document.createElement('h4')
        squareIndex.innerHTML = item.index
        square.appendChild(squareIndex)
        square.classList.add('square')
        square.addEventListener('click', () => 
            item.handleTry(++attempt, square, squareContainer)
        );
        squareContainer.appendChild(square)
    });
    };

    renderSquares(cards)
