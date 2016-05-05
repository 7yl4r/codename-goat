class Player {

	constructor(game, x, y) {

		// super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        this.game = game;
        this.x = x;
        this.y = y;
        this.sprite = this.game.add.sprite(
            this.x,
            this.y,
            'player'
        );

		this._speed = 125; //ms
		this._colorIndex = 0;

		this.game.stage.addChild(this.sprite);
	}
}

export default Player;
