let mover = {
    /**
     * Receives and sends the direction required by the user
     * @returns {int} returns the direction required by the user
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Enter a number (1, 2, 3, 4, 6, 7, 8 or 9) to move, press Cancel for exit the game.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('To move enter one of the listed numbers: 1, 2, 3, 4, 6, 7, 8 or 9');
                continue;
            }
            return direction;
        }
    },
    /**
     * Sends new coordinates of the player after getting a direction from the user.
     * @param {int} direction The direction that we got from the user.
     * @returns {{x: int, y: int}} returns udated coordinates.
     */
    getNextPosition(direction) {
        // Getting current coordinates.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // After we have gotten a direction from a user, updating the current coordinates of the player.
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
            break;
        }
        if (nextPosition.x < 0 || nextPosition.y < 0 || nextPosition.x >= config.colsCount || nextPosition.y >= config.rowsCount) {
            return player;
        } else return nextPosition;
    },
};