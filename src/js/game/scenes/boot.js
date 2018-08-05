var Stats = require('../../lib/stats.min');
var properties = require('../properties');

export default class boot extends Phaser.Scene {

  constructor(){
    console.log('boot constructed');
    super({key: 'boot'});
  }

  create() {
    console.log('Create called on boot');
    // Commented out Stats until we find a loop outside of the scenes
    // if (properties.showStats) {
    //   this.states = addStats();
    // }

    // this.game.sound.mute = properties.mute;

    this.scene.start('preloader');
  };

  update() {
    this.stats.begin();
    // Tick
    this.stats.end();
  }

  addStats() {
    let stats = new Stats(); 

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    return stats;

    // Monkey patch Phaser's update in order to correctly monitor FPS.
    // var oldUpdate = game.update;
    // game.update = function() {
    //   stats.begin();
    //   oldUpdate.apply(game, arguments);
    //   stats.end();
    // };
  }
}
