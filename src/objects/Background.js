class Background extends Phaser.TileSprite{
	constructor(game) {
        super(game, 0, 0, game.width, game.height, 'backdrop');
        this.game = game;

        this.groundHeight = 200;
        this.w = 1920;
        this.h = 1080;
        // this.tilePosition.y = 1080 - this.groundHeight;
        // this.tilePosition.x = game.width/2;

        this.game.world.addChild(this);

        this.game.world.setBounds(0, -this.groundHeight, this.w, this.h);
	}

    update(){
        this.tilePosition.x = -this.game.camera.x;
        this.x = this.game.camera.x;

        this.tilePosition.y = -this.game.camera.y;
        this.y = this.game.camera.y;

        //Position and size the world
        // this.game.world.setBounds(
        //     0,
        //     -this.groundHeight, //this.game.player.position.y - this.game.height/2,
        //     this.game.world.width,
        //     this.game.world.height
        // );

        //Move the tilesprite (fixed to camera) depending on the player's positiontile
        // this.background.tilePosition.y = -this.game.camera.view.y;
    }
}

export default Background;
