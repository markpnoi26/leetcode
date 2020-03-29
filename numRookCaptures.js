/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    
    let counter = 0
    let rookRow;
    let rookCol;
    let maxLeft = board[0].length
    let maxBot = board.length
    
    for (let row of board) {
        for (let col of row) {
            if (col === "R") {
                rookRow = board.indexOf(row)
                rookCol = row.indexOf(col)
            }
        }
    }
    
    for (let i = rookRow; i > 0; i--) {
        if (board[i][rookCol] === "p") {
            counter = counter += 1
            break
        }
        if (board[i][rookCol] === "B") break
    }
    
    for (let i = rookRow; i < maxBot; i++) {
        if (board[i][rookCol] === "p") {
            counter = counter += 1
            break
        }
        if (board[i][rookCol] === "B") break
    }
    
    for (let i = rookCol; i > 0; i--) {
        if (board[rookRow][i] === "p") {
            counter = counter += 1
            break
        }
        if (board[rookRow][i] === "B") break
    }
    
     for (let i = rookCol; i < maxLeft; i++) {
        if (board[rookRow][i] === "p") {
            counter = counter += 1
            break
        }
        if (board[rookRow][i] === "B") break
    }

    return counter
    
};

// up = [-1, 0]
// down = [1, 0]
// right = [0, 1]
// left = [0, -1]

// PseudoCode
// from position of Rook, look up until you see a B/p or hit a wall, if it hits a B/wall do nothing, if p counter += 1
// same for other positions,
// we can write it as DFS first to check furthest.

/* [[".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    ["p","p",".","R",".","p","B","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."]] */