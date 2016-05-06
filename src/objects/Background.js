class Background {
	constructor(game) {
        // super(game, 0, 0, game.width, game.height, 'backdrop');
        this.game = game;

        this.groundHeight = 200;

        //  The 'lvl1' key here is the Loader key given in game.load.tilemap
        this.map = this.game.add.tilemap('lvl1');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        this.map.addTilesetImage('sprites', 'tilesprites');
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'

        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        let w = 5;  // width of tilemap in # of panels
        let scrollFactors = [
            {
                name:'bgsky',
                scrollFactorX: 0
            },{
                name:'bgclouds',
                scrollFactorX:0
            },{
                name:'bg4',
                scrollFactorX: 1/w
            },{
                name:'bg3',
                scrollFactorX: 2/w
            },{
                name:'bg2',
                scrollFactorX: 3/w
            },{
                name:'bg1',
                scrollFactorX: 4/w
            },{
                name:'bg0b',
                scrollFactorX: 1
            },
            {
                name:'bg0a',
                scrollFactorX: 1
            }
        ];

        this.layers = [];
        for (var layer of scrollFactors){
            // console.log("layer " + layer.name + " scrollX:" + layer.scrollFactorX);
            this.layers.push(this.map.createLayer(layer.name));
            this.layers[this.layers.length-1].scrollFactorX = layer.scrollFactorX;
        }
        this.layers[0].resizeWorld();

        this.game.world.setBounds(0, -this.groundHeight, this.width(), this.height());
	}

    width(newWidth){
        if (newWidth && newWidth > 0){
            console.error("NYI set bg width");
        } else {
            return this.map.widthInPixels;
        }
    }

    height(newHeight){
        if (newHeight && newHeight > 0){
            console.error("NYI set bg height");
        } else {
            return this.map.heightInPixels;
        }
    }
}

export default Background;
