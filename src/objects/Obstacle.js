class Obstacle {

	constructor(game, x, y, text) {

		// super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        this.game = game;

        var s = this.game.add.sprite(
            this.game.rnd.between(800, 1100),
            this.game.world.randomY,
            'baddie' + this.game.rnd.between(1, 1)//3)
        );

        this.game.physics.arcade.enable(s);
        s.body.velocity.x = this.game.rnd.between(-25, -50);
        s.autoCull = true;
        s.checkWorldBounds = true;
        s.events.onOutOfBounds.add(this.resetSprite, this);
	}

    resetSprite(sprite) {
    sprite.x = this.game.world.bounds.right;
    }

}

export default Obstacle;
