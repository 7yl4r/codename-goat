import Player from 'objects/Player';
import Obstacle from 'objects/Obstacle';

class GameState extends Phaser.State {

    preload() {
        this.game.load.image('backdrop', 'ass/pics/DistantCity/PNG/1920x1080.png');
        this.game.load.image('player', 'ass/sprites/1goat.png');
        this.game.load.image('baddie1', 'ass/sprites/x.png');

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.obstacles = [];
    }

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        this.setupBackground();

        this.player = new Player(this.game, this.game.width/2, this.game.height/2);
	}


    update() {
        if (this.cursors.up.isDown)
        {
            this.game.camera.y -= 4;
        }
        else if (this.cursors.down.isDown)
        {
            this.game.camera.y += 4;
        }

        if (this.cursors.left.isDown)
        {
            this.game.camera.x -= 4;
        }
        else if (this.cursors.right.isDown)
        {
            this.game.camera.x += 4;
        }
    }

    render() {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }

    setupBackground() {
        this.game.world.setBounds(0, 0, 1920, 1200);

        this.game.add.sprite(0, 0, 'backdrop');

        //  Generate 100 random sprites
        for (var i = 0; i < 100; i++)
        {
            this.obstacles.push(new Obstacle(this.game))
        }

    }
}

export default GameState;
