var _ = require('lodash');
var properties = require('./properties');

var scenes = {
  boot: require('./scenes/boot.js'),
  preloader: require('./scenes/preloader.js'),
  game: require('./scenes/game.js')
};

var game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

// Automatically register each scene.
_.each(scenes, function(scene, key) {
  console.log('scene', scene);
  console.log('key', key);
  game.scene.add(key, scene);
});

game.scene.start('boot');
