function createGame(n){
    let gameArray = new Array(n).fill(".");

    // Get a random unoccupied spot
    function getRandomEmptyIndex(excludeIndices) {
        let index;
        do {
            index = Math.floor(Math.random() * n);
        } while (excludeIndices.includes(index));
        return index;
    }

    // Place Pacman ("C")
    const pacmanIndex = getRandomEmptyIndex([]);
    gameArray[pacmanIndex] = "C";

    // Place Ghost ("^")
    const ghostIndex = getRandomEmptyIndex([pacmanIndex]);
    gameArray[ghostIndex] = "^";

    // Place fruit ("@")
    const fruitIndex = getRandomEmptyIndex([pacmanIndex, ghostIndex]);
    gameArray[fruitIndex] = "@";

    return gameArray;
}

console.log(createGame(10));