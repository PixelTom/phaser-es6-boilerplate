var _ = require('lodash');
var properties = require('./properties');
// var boot = require('./scenes/boot.js');
// var preloader = require('./scenes/preloader.js');
var game = require('./scenes/game.js')

var gameConfig = {
  type: Phaser.AUTO,
  width: properties.size.x,
  height: properties.size.y,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    }
  },
  scene: [game],
};
var phaserGame = new Phaser.Game(gameConfig);
console.log('game', phaserGame);

// Automatically register each scene.
// _.each(scenes, function(scene, key) {
//   console.log('scene', scene);
//   console.log('key', key);
//   game.scene.add(key, scene);
// });

// game.physics = {
//   default: "arcade",
//   arcade: {
//     gravity: { y: 0 }
//   }
// }

phaserGame.scene.start('boot');
