import Player from 'objects/Player';
import Obstacle from 'objects/Obstacle';
import Background from 'objects/Background';
import ActionSelectorHUD from 'objects/ActionSelectorHUD';
import GoatCamCtrl from 'objects/GoatCamCtrl';

let DEBUG = true;

class GameState extends Phaser.State {

    preload() {
        this.game.load.image('baddie1', 'ass/sprites/x.png');
        this.obstacles = [];

        this.game.time.desiredFps = 30;
        this.game.time.advancedTiming = DEBUG;

        this.background = new Background(this.game);
        this.actionHUD = new ActionSelectorHUD(this.game);
        this.game.player = new Player(this.game,
            this.game.world.centerX, this.game.world.centerY);
        this.camCtrl = new GoatCamCtrl(this.game);
    }

	create() {
        this.background.create();
        this.game.player.create();
        this.actionHUD.create();
        this.cameCtrl.create();

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
