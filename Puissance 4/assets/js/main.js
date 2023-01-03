var playerR = "R"
var playerY = "Y"
var currPlayer = playerR

var gameOver = false
var board
var currCol

var rows = 6
var cols = 7

window.onload = function () {
    setGame()
}

function setGame() {
    document.getElementById("board").innerHTML = ''
    board = []
    currCol = [5, 5, 5, 5, 5, 5, 5]


    for (let r = 0; r < rows; r++) {
        let row = []
        for (let c = 0; c < cols; c++) {
            row.push(' ')

            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add("tile")
            tile.addEventListener("click", setPiece)
            document.getElementById("board").append(tile)
        }
        board.push(row)
    }
}

function setPiece() {
    if (gameOver) {
        return
    }
    let coords = this.id.split("-")
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])

    r = currCol[c]
    if (r < 0) {
        return
    }

    board[r][c] = currPlayer
    let tile = document.getElementById(r.toString() + "-" + c.toString())
    if (currPlayer == playerR) {
        tile.classList.add("red-piece")
        currPlayer = playerY
    } else {
        tile.classList.add("yellow-piece")
        currPlayer = playerR
    }

    r -= 1;
    currCol[c] = r

    checkWinner()
}

function checkWinner() {
    //Horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c + 1] && board[r][c + 1] == board[r][c + 2] && board[r][c + 2] == board[r][c + 3]) {
                    setWinner(r, c)
                    return
                }
            }

        }
        //Vertical
        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows - 3; r++) {
                if (board[r][c] != ' ') {
                    if (board[r][c] == board[r + 1][c] && board[r + 1][c] == board[r + 2][c] && board[r + 2][c] == board[r + 3][c]) {
                        setWinner(r, c)
                        return
                    }
                }
            }
            //anti diagonal
            for (let r = 0; r < rows - 3; r++) {
                for (let c = 0; c < cols - 3; c++) {
                    if (board[r][c] != ' ') {
                        if (board[r][c] == board[r + 1][c + 1] && board[r + 1][c + 1] == board[r + 2][c + 2] && board[r + 2][c + 2] == board[r + 3][c + 3]) {
                            setWinner(r, c)
                            return
                        }
                    }

                }

            }
            // diagonal
            for (let r = 3; r < rows; r++) {
                for (let c = 0; c < cols - 3; c++) {
                    if (board[r][c] != ' ') {
                        if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
                            setWinner(r, c)
                            return
                        }
                    }

                }

            }
        }
    }

}

function setWinner(r, c) {
    let winner = document.getElementById("winner")
    if (board[r][c] == playerR) {
        winner.innerText = "Victoire du joueur ROUGE"
    } else {
        winner.innerText = "Victoire du joueur JAUNE"
    }
    gameOver = true;
}

function replay() {

   setGame()

}





