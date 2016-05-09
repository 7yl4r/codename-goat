class ActionSelectorHUD {
	constructor(game) {
        this.game = game;
        this.spriteW = 64;
        this.pad = 20; // padding btwn UI and screen edge
        this._actionShown = 0;
        this.preload();
	}

    preload(){
        this.game.load.image('icon-walk', 'ass/icons/png/man-walking-directions-button.png');
        this.game.load.image('icon-jump', 'ass/icons/png/man-jumping-an-obstacle.png');
        this.game.load.image('icon-turn', 'ass/icons/png/returning-right-arrow.png');
    }

    create(){
        this.x = this.game.width/2 - this.spriteW/2;
        this.y = this.pad+this.spriteW;  // top-mid
        // this.y = this.game.height-this.pad-this.spriteW;  // bottom-mid
        this._updateSprite();
    }

    update(){  // TODO: could do this with events instead
        if (this._actionShown != this.game.player.inputHandler.selectedActionIndex){
            this._actionShown = this.game.player.inputHandler.selectedActionIndex;

            this.sprite.destroy();  // TODO: this should be done w/ a spritesheet
            this._updateSprite();
        }
    }

    _updateSprite(){
        this.sprite = new Phaser.Sprite(
            this.game, this.x, this.y,
            'icon-' + this.game.player.inputHandler.actions[this._actionShown]
        );
        this.sprite.fixedToCamera = true;
        this.game.world.addChild(this.sprite);
    }
}

export default ActionSelectorHUD;
