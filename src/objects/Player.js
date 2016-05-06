class Player extends Phaser.Sprite{
	constructor(game, x, y) {
		super(game, x, y, 'player');
        this.game = game;

        this.jumpTimer = 0;
        this.game.physics.arcade.enable(this);
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        // this.body.setSize(20, 32, 5, 16); // TODO: ???

        this.animations.add('left', [7,6,5,4], 10, true);
        this.animations.add('turn', [8], 10, true);
        this.animations.add('right', [15,14,13,12], 10, true);
        this.animations.add('left-idle',  [20,21,22,23,23,23,22,21,20], 3, true);
        this.animations.add('right-idle', [28,29,30,31,31,31,30,29,28], 3, true);

        this.facing = 'left';
        this.idleBool = false;
        this.idleTimer = 0;

        this.body.collideWorldBounds = true;

		this.game.world.addChild(this);
	}

    turn(){
        if (this.facing == 'right'){
            this.faceLeft();
        } else {
            this.faceRight();
        }
    }

    faceLeft(){
        if (this.facing != 'left')
        {
            this.facing = 'left';
        }
    }
    faceRight(){
        if (this.facing != 'right')
        {
            this.facing = 'right';
        }
    }
    idle(){
        if (!this.idleBool && this.body.onFloor()){
            if(this.game.time.now > this.idleTimer){
                if (this.facing == 'left')
                {
                    this.animations.play('left-idle');
                }
                else
                {
                    this.animations.play('right-idle');
                }
                this.idleBool = true;
            }
        } else {
            this.idleTimer = this.game.time.now + 1000;
            this.idleBool = false;
        }
    }
    jump(){
        if(this.body.onFloor() && this.game.time.now > this.jumpTimer){
            this.body.velocity.y = -250;
            this.jumpTimer = this.game.time.now + 750;
        }
    }
    walk(){
        if (this.facing == 'right'){
            this.game.player.body.velocity.x = 150;
            this.animations.play('right');
        } else if (this.facing == 'left'){
            this.game.player.body.velocity.x = -150;
            this.animations.play('left');
        } else {
            console.warn('cannot walk when facing' + this.facing);
        }
    }
}

export default Player;
