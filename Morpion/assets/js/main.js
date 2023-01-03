
// let cell = documentQueryselector(".cell")
// let p1 = X
// let p2 = O


// function placeX() {
//     let board = ["","","","","","","","",""]
//     let cell = documentQueryselector(".cell")
//     if (board == null) {
//         documentQueryselector(".cell") = "X"
//     }

// }

let statut = document.querySelector("h2")
let jeuActif = true
let random ;
let player = "X"
let board = ["", "", "", "", "", "", "", "", ""]
let pCPU = false

let condWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let win = () => `Le joueur ${player} a gagné`
let draw = () => "Egalité"
let tour = () => `C'est au tour du joueur ${player}`

statut.innerHTML = tour()

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", clickCell))
document.querySelector("#replay").addEventListener("click", replay)

function clickCell() {
    if (jeuActif) {
        let = indexCell = parseInt(this.dataset.index)
        if (board[indexCell] != "" || !board) {
            return
        }
        board[indexCell] = player
        console.log(board);
        this.innerHTML = player

        uWin()
        if (jeuActif) {
            playCPU()
            uWin() 
        }
    
    }

}

function uWin() {
    let pWin = false
    for (let uWin of condWin) {
        let val1 = board[uWin[0]]
        let val2 = board[uWin[1]]
        let val3 = board[uWin[2]]
        if (val1 === "" || val2 === "" || val3 === "") {
            continue
        }
        if (val1 == val2 && val1 == val3) {
            pWin = true
            jeuActif = false
            break
        }
    }
    if (pWin) {
        statut.innerHTML = win()
        jeuActif = false
        return
    }

    if (!board.includes("")) {
        statut.innerHTML = draw()
        jeuActif = false
        return
    }
    player = player === "X" ? "O" : "X"
    statut.innerHTML = tour()
}

function replay() {
    player = "X"
    jeuActif = true
    board = ["", "", "", "", "", "", "", "", ""]
    statut.innerHTML = tour()
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "")

}

function playCPU() {
    random = randomNumber(0,8)
    console.log(document.querySelectorAll(".cell")[random]);
    while (true) {
        if ( document.querySelectorAll(".cell")[random].innerHTML != "") {
            random = randomNumber(0,8)
        }else{
            document.querySelectorAll(".cell")[random].innerHTML = "O"
            break
        }
    }
}

function cpuMode() {
    
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}