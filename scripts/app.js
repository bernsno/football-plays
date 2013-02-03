// Generated by CoffeeScript 1.3.3
(function() {
  var FootballPlay;

  FootballPlay = (function() {

    FootballPlay.DEFAULT_PLAY = [
      {
        position: "QB",
        yOffset: 1,
        xOffset: 0
      }, {
        position: "LT",
        yOffset: 0,
        xOffset: -2
      }, {
        position: "LG",
        yOffset: 0,
        xOffset: -1
      }, {
        position: "C",
        yOffset: 0,
        xOffset: 0
      }, {
        position: "RT",
        yOffset: 0,
        xOffset: 2
      }, {
        position: "RG",
        yOffset: 0,
        xOffset: 1
      }, {
        position: "TE",
        yOffset: 0,
        xOffset: -3
      }, {
        position: "WR",
        yOffset: 0,
        xOffset: -7
      }, {
        position: "FB",
        yOffset: 3,
        xOffset: 0
      }, {
        position: "RB",
        yOffset: 2,
        xOffset: 0
      }, {
        position: "WR",
        yOffset: 0,
        xOffset: 7
      }
    ];

    function FootballPlay(domID, width, height, play) {
      this.play = play != null ? play : FootballPlay.DEFAULT_PLAY;
      this.paper = Raphael(domID, width, height);
      window.paper = this.paper;
      this.playerRadius = 20;
      this.defaultYOffset = 150;
      this.setupPlayingField();
      this.setupOffense();
    }

    FootballPlay.prototype.setupPlayingField = function() {
      var end, field, move, start;
      field = this.paper.rect(0, 0, this.paper.width, this.paper.height);
      field.attr({
        'fill': '#ccc'
      });
      move = function(x, y) {
        return console.log("moveX: ", x, "moveY: ", y);
      };
      start = function(x, y) {
        console.log("startX: ", x, "startY: ", y);
        return this.paper.path("M" + x + "," + y + "L90,90");
      };
      end = function(e) {
        return console.log("end: ", e);
      };
      return field.drag(move, start, end);
    };

    FootballPlay.prototype.setupOffense = function() {
      var player, _i, _len, _ref, _results;
      _ref = this.play;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        _results.push(this.positionPlayer(player.position, player.xOffset, player.yOffset));
      }
      return _results;
    };

    FootballPlay.prototype.positionPlayer = function(playerPosition, xOffset, yOffset) {
      var label, mousedownEvent, player, xposition, yposition;
      xposition = this.paper.width / 2 + (this.playerRadius + 30) * xOffset;
      yposition = this.defaultYOffset + (this.playerRadius + 5) * 2 * yOffset;
      player = this.paper.circle(xposition, yposition, this.playerRadius);
      player.attr({
        'fill': '#000000'
      });
      label = this.paper.text(xposition, yposition, playerPosition);
      label.attr({
        'fill': '#ffffff'
      });
      mousedownEvent = function() {
        return this.attr({
          'fill': 'pink'
        });
      };
      return player.mousedown(mousedownEvent);
    };

    return FootballPlay;

  })();

  $(function() {
    var play;
    return play = new FootballPlay('playing-field', 900, 500);
  });

}).call(this);