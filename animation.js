(function (window) {
  var EE = 238;
  var ANIME_DELAY = 80;
  var TILE_SIZE = 15;
  var TILE_ROWS = 30;

  var tiles = [];

  var Tile = function (x, y) {
    this.color = 255;
    this.alpha = 1 - (y / TILE_ROWS) * 1;

    this.render = function () {
      var dice = Math.random();
      var flag;
      if (dice < 0.3) {
        flag = 0;
      } else if (0.3 <= dice && dice < 0.65) {
        flag = -1;
      } else {
        flag = this.color >= EE ? 0 : 1;
      }
      var span = flag * Math.floor(Math.random() * 3);
      this.color = Math.max(210, Math.min(255, this.color + span));
      c.fillStyle = 'rgba(' + this.color + ',' + this.color + ',' + this.color + ',' + this.alpha + ')';
      c.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  var start = null;
  var animate = function (timestamp) {
    if (!start) start = timestamp;
    if (timestamp - start >= ANIME_DELAY) {
      c.clearRect(0,0, bg.width, bg.height);
      for (var i = tiles.length - 1; i >= 0; i--) {
        tiles[i].render();
      }
      start = timestamp;
    }
    window.requestAnimationFrame(animate);
  }

  window.TILE_SIZE = TILE_SIZE;
  window.TILE_ROWS = TILE_ROWS;
  window.tiles = tiles;
  window.Tile = Tile;
  window.animate = animate;
})(window);