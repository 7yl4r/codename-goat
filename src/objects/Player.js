import KeyboardHandler from 'objects/KeyboardHandler';
import PlayerInputHandler from 'objects/PlayerInputHandler';

let MIN_TURN_TIME = 200;
let MIN_JUMP_TIME = 750;
let TIME_UNTIL_IDLE = 1000;

class Player extends Phaser.Sprite{
	constructor(game, x, y) {
        super(game, x, y)
        this.game = game;
        // this.signals = {
        //     // TODO: player signals here
        // };
        this.facing = 'right';
        this.idleBool = false;
        this.idleTimer = 0;
        this.turnTimer = 0;
        this.jumpTimer = 0;
        this.preload();
    }

    preload(){
        this.game.load.spritesheet('player', 'ass/sprites/goat.png', 128, 128);
        this.inputHandler = new PlayerInputHandler(this.game);
        this.keyboardHandler = new KeyboardHandler(this.game, this.inputHandler);
    }

    create(){
        this.loadTexture('player');
        this.game.physics.arcade.enable(this);

        this.animations.add('left-walk', [7,6,5,4], 10, true);
        this.animations.add('turn', [8], 1, true);
        this.animations.add('left', [20], 10, true);
        this.animations.add('right', [28], 10, true);
        this.animations.add('right-walk', [15,14,13,12], 10, true);
        this.animations.add('left-idle',  [20,21,22,23,23,23,22,21,20], 3, true);
        this.animations.add('right-idle', [28,29,30,31,31,31,30,29,28], 3, true);

        this.game.world.addChild(this);

        this.body.drag.x = 50;
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        // this.body.setSize(20, 32, 5, 16); // TODO: ???
        this.animations.play('right');
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

            this.animations.play('turn');
            this.animations.currentAnim.onComplete.add(function () {
                this.animations.play(this.facing);
            });

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
            this.body.velocity.x = 150;
            this.animations.play('right-walk');
        } else if (this.facing == 'left'){
            this.body.velocity.x = -150;
            this.animations.play('left-walk');
        } else {
            console.warn('cannot walk when facing' + this.facing);
        }
    }
}

export default Player;
