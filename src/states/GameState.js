import Player from 'objects/Player';
import Obstacle from 'objects/Obstacle';
import Background from 'objects/Background';
import ActionSelectorHUD from 'objects/ActionSelectorHUD';

let DEBUG = true;

class GameState extends Phaser.State {

    preload() {
        this.game.load.image('baddie1', 'ass/sprites/x.png');

        this.game.time.desiredFps = 30;
        this.game.time.advancedTiming = DEBUG;

        this.background = new Background(this.game);
        this.actionHUD = new ActionSelectorHUD(this.game);
        this.game.player = new Player(this.game, center.x, center.y);

        this.obstacles = [];
    }

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY };

        this.background.create();
        this.game.player.create();

        this.actionHUD.create();

        this.game.camera.follow(this.game.player, this.game.camera.FOLLOW_PLATFORMER, 0.1, 0.1);
        // let pad = 100;
        // this.game.camera.deadzone = new Phaser.Rectangle(pad, pad, this.game.width-pad, this.game.height-pad);

        this.game.physics.arcade.gravity.y = 250;

        //  Generate 100 random sprites
        for (var i = 0; i < 100; i++)
        {
            this.obstacles.push(new Obstacle(this.game))
        }
	}

    update() {
        this.game.player.update();
        this.actionHUD.update();
        // this.background.update();
    }

    render() {
        if (DEBUG){
            this.game.debug.spriteCoords(this.game.player, 32, 32);
            this.game.debug.spriteCoords(this.actionHUD.sprite, 32, 200);

            this.game.debug.cameraInfo(this.game.camera, 500, 32);

            this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
        }
    }
}

export default GameState;
