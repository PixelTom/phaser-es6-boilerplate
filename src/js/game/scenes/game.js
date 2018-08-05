export default class game extends Phaser.Scene{

  constructor(){
    super({key: 'game'});
  }

  create(){
    var logo = this.add.sprite(200, 200, 'logo');
  }

}
