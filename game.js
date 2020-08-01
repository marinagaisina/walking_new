let game = {
    /**
     * runs a game.
     */
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log ('Game over');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },
    /**
     * This function lounches as the walking.html opens.
     */
    init() {
        console.log('Your position in the field presents "o"');
        renderer.render();
        console.log('To start the game type game.run() and press Enter');
    }
};

game.init();