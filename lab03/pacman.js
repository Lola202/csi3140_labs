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
    gameArray[ghostIndex] += "^";

    // Place fruit ("@")
    const fruitIndex = getRandomEmptyIndex([pacmanIndex, ghostIndex]);
    gameArray[fruitIndex] = "@";

    var score = 0;

    return gameArray;
}

function moveLeft(game){
    const i = game.indexOf("C");
    if (i > 0){
        game[i - 1] = "C";
        game[i] = "";
    }
    else{
        game[game.length - 1] = "C";
        game[i] = "";
    }
    score += 1;
    return game;
}

function moveRight(game){
    //index of pacman
    const i = game.indexOf("C");
    if (i < game.length - 1){
        game[i + 1] = "C";
        game[i] = "";
    }
    else{
        game[0] = "C";
        game[i] = "";
    }
    score += 1;
    return game;
}

console.log(createGame(10));