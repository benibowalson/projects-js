
const sample = [
[".","8","7","6","5","4","3","2","1"],
["2",".",".",".",".",".",".",".","."],
["3",".",".",".",".",".",".",".","."],
["4",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".",".","."],
["6",".",".",".",".",".",".",".","."],
["7",".",".",".",".",".",".",".","."],
["8",".",".",".",".",".",".",".","."],
["9",".",".",".",".",".",".",".","."]]

const isValidSudoku = (board) => {

    const mySet = new Set()
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            // check row and column if current element already exists
            if(board[i][j] !== "."){
                if(mySet.has(`row-${i}-${board[i][j]}`) || mySet.has(`col-${j}-${board[i][j]}`)){
                    return false
                }
    
                mySet.add(`row-${i}-${board[i][j]}`)
                mySet.add(`col-${j}-${board[i][j]}`)
    
                if(mySet.has(`box-${Math.floor(i/3)*3 + Math.floor(j/3)}-${board[i][j]}`)) return false
                mySet.add(`box-${Math.floor(i/3)*3 + Math.floor(j/3)}-${board[i][j]}`)
            }            
        }

        console.log(mySet)
    }

    
    return true
}

console.log(isValidSudoku(sample))