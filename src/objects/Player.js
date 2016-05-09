import KeyboardHandler from 'objects/KeyboardHandler';
import PlayerInputHandler from 'objects/PlayerInputHandler';

let MIN_TURN_TIME = 200;
let MIN_JUMP_TIME = 750;
let TIME_UNTIL_IDLE = 1000;

class Player extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'player');
        this.game = game;

        this.jumpTimer = 0;
        this.game.physics.arcade.enable(this);
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        // this.body.setSize(20, 32, 5, 16); // TODO: ???
        this.facing = 'left';
        this.idleBool = false;
        this.idleTimer = 0;
        this.turnTimer = 0;
        this.body.collideWorldBounds = true;
        preload();
    }

    preload(){
        this.game.load.spritesheet('player', 'ass/sprites/goat.png', 128, 128);
        this.animations.add('left', [7,6,5,4], 10, true);
        this.animations.add('turn', [8], 10, true);
        this.animations.add('right', [15,14,13,12], 10, true);
        this.animations.add('left-idle',  [20,21,22,23,23,23,22,21,20], 3, true);
        this.animations.add('right-idle', [28,29,30,31,31,31,30,29,28], 3, true);
        this.inputHandler = new PlayerInputHandler(this.game);
        this.keyboardHandler = new KeyboardHandler(this.game, this.inputHandler);
    }

    create(){
        this.game.world.addChild(this);
    }

    update(){
        // this.inputHandler.update();
        this.keyboardHandler.update();
    }

    turn(){
        if(this.game.time.now > this.turnTimer){
            // console.log('turn');
            if (this.facing == 'right'){
                this.facing = 'left';
            } else {
                this.facing = 'right';
            }
            this.turnTimer = this.game.time.now + MIN_TURN_TIME;
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
            this.idleTimer = this.game.time.now + TIME_UNTIL_IDLE;
            this.idleBool = false;
        }
    }
    jump(){
        if(this.body.onFloor() && this.game.time.now > this.jumpTimer){
            this.body.velocity.y = -250;
            this.jumpTimer = this.game.time.now + MIN_JUMP_TIME;
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
