export const getEmptyBoard = () => [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
];

const holdsValue = (board, value) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === value) {
                return true;
            }
        }
    }
    return false;
};

export const isFull = (board) => {
    return !holdsValue(board, 0);
};

const getRandomSpot = () => {
    const rowSpot = Math.floor(Math.random() * 8);
    const colSpot = Math.floor(Math.random() * 8);
    return [rowSpot, colSpot];
};

export const createRandomSpot = (board) => {
    if (isFull(board)) {
        return board;
    }

let [row, col] = getRandomSpot();
while (board[row][col] !== 0) {
    [row, col] = getRandomSpot();
}

board[row][col] = 4;
return board;

};