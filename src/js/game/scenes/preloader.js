var preloader = {};

preloader.preload = function () {
  this.game.load.image('logo', 'images/phaser.png');
};

preloader.create = function () {
  this.game.scene.start('game');
};

module.exports = preloader;
