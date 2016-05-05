class PlayerInputHandler {
	constructor(game) {
        this.game = game;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.cursors.up;
	}

    update(){
        this.game.player.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            this.game.player.body.velocity.x = -150;

            this.game.player.faceLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.game.player.body.velocity.x = 150;

            this.game.player.faceRight();
        }
        else
        {
            this.game.player.idle();
        }

        if (this.jumpButton.isDown)
        {
            this.game.player.jump();
        }

    }
}

export default PlayerInputHandler;
