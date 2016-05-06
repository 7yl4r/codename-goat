let MIN_ACTION_SWITCH_TIME = 100;  // [ms]

class PlayerInputHandler {
	constructor(game) {
        this.game = game;
        this.actions = ['jump', 'walk', 'turn'];
        this.selectedActionIndex = 0;
        this.switchTimer = 0;
	}

    action() {
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

    selectAction(newIndex){
        if(this.game.time.now > this.switchTimer){
            console.log('indexCheck('+newIndex+')='+this._checkIndex(newIndex))
            newIndex = this._checkIndex(newIndex);
            // console.log('action change : ' + this.actions[this.selectedActionIndex] + '->' + this.actions[newIndex]);
            this.selectedActionIndex = newIndex;
            this.switchTimer = this.game.time.now + MIN_ACTION_SWITCH_TIME;
        }
    }

    nextAction(){
        this.selectAction(this.selectedActionIndex + 1);
    }

    previousAction(){
        this.selectAction(this.selectedActionIndex - 1);
    }

    _checkIndex(index){
        if (index===0 || index){
            if (index >= this.actions.length){
                return 0;
            } else if (index < 0){
                return this.actions.length-1;
            } else {
                return index;
            }
        } else {
            this.selectedActionIndex = this._checkIndex(this.selectedActionIndex);
        }
    }
}

export default PlayerInputHandler;
