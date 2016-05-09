import KeyboardHandler from 'objects/KeyboardHandler';
import PlayerInputHandler from 'objects/PlayerInputHandler';
import Character from 'objects/Characters/Character';

let MIN_TURN_TIME = 200;
let MIN_JUMP_TIME = 750;
let TIME_UNTIL_IDLE = 1000;

class Player extends Character{
	constructor(game, x, y) {
        super(game, x, y, 'player', 'ass/sprites/goat.png', 128, 128)
        this.idleBool = false;
        this.idleTimer = 0;
        this.turnTimer = 0;
        this.jumpTimer = 0;
        this.preload();
    }

    preload(){
        super.preload();
        this.inputHandler = new PlayerInputHandler(this.game);
        this.keyboardHandler = new KeyboardHandler(this.game, this.inputHandler);
    }

    create(){
        super.create();
        this.game.physics.arcade.enable(this);

        this.animations.add('left-walk', [7,6,5,4], 10, true);
        this.animations.add('turn-left',  [28, 24, 20], 5, false);
        this.animations.add('turn-right', [20, 16, 28], 5, false);
        this.animations.add('left', [20], 10, false);
        this.animations.add('right', [28], 10, false);
        this.animations.add('right-walk', [15,14,13,12], 10, true);
        this.animations.add('left-idle',  [20,21,22,23,23,23,22,21,20], 3, true);
        this.animations.add('right-idle', [28,29,30,31,31,31,30,29,28], 3, true);

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
            super.turn();
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
