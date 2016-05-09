
class Character extends Phaser.Sprite{
	constructor(game, x, y, name, spritesheetFile, spriteW, spriteH) {
        super(game, x, y)
        this.game = game;
        this.charName = name;
        this.sheetFile = spritesheetFile;
        this.spriteW = spriteW;
        this.spriteH = spriteH;
        this.facing = 'right';

        this.addSignals();
        this.preload();
    }

    preload(){
        this.game.load.spritesheet(this.charName, this.sheetFile,
            this.spriteW, this.spriteH);
    }

    create(){
        this.loadTexture(this.charName);
        this.game.world.addChild(this);
    }

    update(){

    }

    addSignals(){
        // this.signals = {
        //     // TODO: player signals here
        // };
    }

    turn(){
        // console.log('turn');
        if (this.facing == 'right'){
            this.facing = 'left';
        } else {
            this.facing = 'right';
        }
        // TODO: try/catch this:
        this.animations.play('turn-'+this.facing);
    }
}

export default Character;
