class KeyboardHandler {
	constructor(game, inputHandler) {
        this.game = game;
        this.inputHandler = inputHandler;
        this.cursors = game.input.keyboard.addKeys({
            'action': Phaser.Keyboard.SPACEBAR,
            'left': Phaser.Keyboard.LEFT,
            'right': Phaser.Keyboard.RIGHT
        });
	}

    update(){
        this.game.player.body.velocity.x = 0;

        if (this.cursors.action.isDown){
            this.inputHandler.action();
        } else if (this.cursors.right.isDown){
            this.inputHandler.nextAction();
        } else if (this.cursors.left.isDown){
            this.inputHandler.previousAction();
        } else {
            this.game.player.idle();
        }
    }
}

export default KeyboardHandler;
