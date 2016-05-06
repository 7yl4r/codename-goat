class Background {
	constructor(game) {
        // super(game, 0, 0, game.width, game.height, 'backdrop');
        this.game = game;

        this.groundHeight = 200;
        this.w = 1920;  // TODO: get these values from map
        this.h = 1080;
        // this.tilePosition.y = 1080 - this.groundHeight;
        // this.tilePosition.x = game.width/2;


        //  The 'mario' key here is the Loader key given in game.load.tilemap
        this.map = this.game.add.tilemap('lvl1');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        this.map.addTilesetImage('sprites', 'tilesprites');
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'

        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        this.layers = [this.map.createLayer('background1')];
        this.layers[0].resizeWorld();
        this.layers[0].scrollFactorX = 0.5;
        console.log(this.layers[0]);

        this.layers.push(this.map.createLayer('background0'));


        // this.game.world.addChild(this);

        this.game.world.setBounds(0, -this.groundHeight, this.w, this.h);
	}

    update(){
        // this.tilePosition.x = -this.game.camera.x;
        // this.x = this.game.camera.x;
        //
        // this.tilePosition.y = -this.game.camera.y;
        // this.y = this.game.camera.y;

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
