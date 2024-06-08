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

function moveLeft(game){
    const pacmanIndex = game.indexOf("C");
    if (pacmanIndex > 0){
        game[i - 1] = "C";
        game[i] = "";
    }
    else{
        game[game.length - 1] = "C";
        game[i] = "";
    }
    return game;
}

function moveRight(game){
    //index of pacman
    const i = game.indexOf("C");
    if (pacmanIndex < game.length - 1){
        game[i + 1] += game[i];
        game[i] = "";
    }
    else{
        game[0] = "C";
        game[i] = "";
    }
    return game;
}

console.log(createGame(10));