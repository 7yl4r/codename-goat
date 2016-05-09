class GoatCamCtrl {

	constructor(game) {
        this.game = game;
	}

    create(){
        this.game.camera.follow(this.game.player, this.game.camera.FOLLOW_PLATFORMER, 0.1, 0.1);
        // let pad = 100;
        // this.game.camera.deadzone = new Phaser.Rectangle(pad, pad, this.game.width-pad, this.game.height-pad);
    }
}

export default GoatCamCtrl;
