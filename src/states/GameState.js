import Player from 'objects/Player';
import Obstacle from 'objects/Obstacle';
import PlayerInputHandler from 'objects/PlayerInputHandler';
import Background from 'objects/Background';

class GameState extends Phaser.State {

    preload() {
        this.game.load.image('backdrop', 'ass/pics/DistantCity/PNG/1920x1080.png');
        this.game.load.image('player', 'ass/sprites/1goat.png');
        this.game.load.image('baddie1', 'ass/sprites/x.png');

        this.inputHandler = new PlayerInputHandler(this.game);

        this.obstacles = [];
    }

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY };

        this.background = new Background(this.game);
        this.game.player = new Player(this.game, center.x, center.y);

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
        this.inputHandler.update();
        //Position and size the world
        // this.game.world.setBounds(
        //     this.game.player.position.x - this.game.width/2,
        //     this.game.player.position.y - this.game.height/2,
        //     this.game.width,
        //     this.game.height
        // );

        //Move the tilesprite (fixed to camera) depending on the player's positiontile
        // this.background.tilePosition.y = -this.game.camera.view.y;

    }

    render() {
        this.game.debug.spriteCoords(this.game.player, 32, 32);
        this.game.debug.cameraInfo(this.game.camera, 500, 32);
    }
}

export default GameState;
