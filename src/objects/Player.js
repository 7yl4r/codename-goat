class Player extends Phaser.Sprite{
	constructor(game, x, y) {
		super(game, x, y, 'player');
        this.game = game;
        // this.sprite = this.game.add.sprite(
        //     this.x,
        //     this.y,
        //     'player'
        // );
        this.facing = 'left';
        this.jumpTimer = 0;
        this.game.physics.arcade.enable(this);

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
        if (this.facing != 'idle')
        {
            this.animations.stop();

            if (this.facing == 'left')
            {
                this.frame = 0;
            }
            else
            {
                this.frame = 5;
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
