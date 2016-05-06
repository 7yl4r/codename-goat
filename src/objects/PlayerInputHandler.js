class PlayerInputHandler {
	constructor(game) {
        this.game = game;
        this.actions = ['jump', 'walk', 'turn'];
        this.selectedActionIndex = 0;
	}

    action(){
        switch (this.actions[this.selectedActionIndex]){
            case 'jump':
                this.game.player.jump();
                break;
            case 'walk':
                this.game.player.walk();
                break;
            case 'turn':
                this.game.player.turn();
                break;
            default:
                console.error("unrecognized action: " + this.selectedAction);
        }
    }

    nextAction(){
        this.selectedActionIndex += 1;
        this._checkIndex();
    }

    previousAction(){
        this.selectedActionIndex -=1;
        this._checkIndex();
    }

    _checkIndex(){
        if (this.selectedActionIndex >= this.actions.length){
            this.selectedActionIndex = 0;
        } else if (this.selectedActionIndex < 0){
            this.selectedActionIndex = this.actions.length-1;
        }
    }
}

export default PlayerInputHandler;
