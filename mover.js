let mover = {
    /**
     * Receives and sends the direction required by a user
     * @returns {int} returns the direction required by a user
     */
    getDirection() {
        const availableDirections = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt('Enter a number (2, 4, 6 or 8) to move, press Cancel for exit the game.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('To move enter one of the listed numbers 2, 4, 6 or 8');
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
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
        }
        if (nextPosition.x < 0 || nextPosition.y < 0 || nextPosition.x >= config.colsCount || nextPosition.y >= config.rowsCount) {
            return player;
        } else return nextPosition;
    },
};