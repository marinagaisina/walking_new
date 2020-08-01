let renderer = {
    map: '',
    /**
     * This method draws the game in console.
     * X coordinate - columns;
     * Y coordinate - rows
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.x == col && player.y == row) {
                    this.map += 'o ';
                } else this.map += 'x ';
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        // Clear console.
        console.clear();
        // Clear the field.
        this.map = "";
    }
};