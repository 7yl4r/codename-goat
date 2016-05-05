class Player extends Phaser.Sprite{
	constructor(game, x, y) {
		super(game, x, y, 'player');
        this.game = game;

        this.jumpTimer = 0;
        this.game.physics.arcade.enable(this);
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        // this.body.setSize(20, 32, 5, 16); // TODO: ???

        this.animations.add('left', [4, 5, 6, 7 ], 10, true);
        this.animations.add('turn', [8], 10, true);
        this.animations.add('right', [12, 13, 14, 15], 10, true);
        this.animations.add('left-idle',  [20,21,22,23,23,23,22,21,20], 3, true);
        this.animations.add('right-idle', [28,29,30,31,31,31,30,29,28], 3, true);

        this.facing = 'left';

        this.body.collideWorldBounds = true;

		this.game.world.addChild(this);
	}

    faceLeft(){
        if (this.facing != 'left')
        {
            this.animations.play('left');
            this.facing = 'left';
        }
    }
    faceRight(){
        if (this.facing != 'right')
        {
            this.animations.play('right');
            this.facing = 'right';
        }
    }
    idle(){
        if (this.facing != 'idle' && this.body.onFloor())
        {

            if (this.facing == 'left')
            {
                this.animations.play('left-idle');
            }
            else
            {
                this.animations.play('right-idle');
            }
            this.facing = 'idle';
        }
    }
    jump(){
        if(this.body.onFloor() && this.game.time.now > this.jumpTimer){
            this.body.velocity.y = -250;
            this.jumpTimer = this.game.time.now + 750;
        }
    }
}

export default Player;
