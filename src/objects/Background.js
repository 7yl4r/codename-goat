class Background {
	constructor(game) {
        this.game = game;
        this.groundHeight = 200;
        this.game.world.setBounds(0, -this.groundHeight, 1920, 1080);
        this.game.add.tileSprite(0, 0, 1920, 1080, 'backdrop');
	}
}

export default Background;
