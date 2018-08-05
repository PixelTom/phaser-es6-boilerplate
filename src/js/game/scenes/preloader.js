export default class preloader extends Phaser.Scene{

  constructor(){
    super({key: 'preloader'});
  }

  preload(){
    this.load.image('logo', 'images/phaser.png');
  }

  create(){
    this.scene.start('game');
  }

}
