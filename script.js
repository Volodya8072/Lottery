function LotteryCard (index, isWinning) {
    this.index = index;
    this.isWinning = isWinning;
    this.handleTry = function (attempt, square, squareContainer) {
        if (this.isWinning) {
            alert("Ти виграла масаж від Котика");
            square.classList.add("square-correct")
        } else {
            if (attempt === 4) {
                alert("Не вгадала нажаль  :((((");
                squareContainer.innerHTML = null;
                return;
            }
            alert("Ще раз спробуй");
            square.classList.add("square-wrong")
        }
    };
}

const cards = [
    new LotteryCard (7,false),
    new LotteryCard (10,false),
    new LotteryCard (6,false),
    new LotteryCard (34,false),
    new LotteryCard (67,false),
    new LotteryCard (23,false),
    new LotteryCard (15,false),
    new LotteryCard (12,false),
    new LotteryCard (45,false),
    new LotteryCard (37,false),
    new LotteryCard (29,false),
    new LotteryCard (86,false),
    new LotteryCard (56,false),
    new LotteryCard (91,true),
    new LotteryCard (45,false),
    new LotteryCard (26,false),
    new LotteryCard (87,false),
    new LotteryCard (57,false),
    new LotteryCard (37,false),
    new LotteryCard (65,false),
]

function renderSquares(squares) {
    let attempt = 0;
    const squareContainer = document.querySelector(".squares-container");
    squares.forEach((item) => {
        const square = document.createElement("div");
        const squareIndex = document.createElement("h4");
        squareIndex.innerHTML = item.index;
        square.appendChild(squareIndex);
        square.classList.add("square");
        square.addEventListener("click", () =>
        item.handleTry(++attempt, square, squareContainer)
    );
    squareContainer.appendChild(square);
    });
}

renderSquares(cards);