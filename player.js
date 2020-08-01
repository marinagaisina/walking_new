/**
 * A player's object. Methods and properties of a player are presented here.
 * @property {int} x X-coordinate of player's position
 * @property {int} y Y-coordinate of player's position
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Moves the player in the required direction.
     * @param {{x: int, y: int}} nextPoint
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};