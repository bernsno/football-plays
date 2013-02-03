# TODOS:
# Draw lines when clicking on the background
# Only enable line drawing after selecting a player
# Tie beginning of line to player
# Add arrow to end of line
# Sharper line so it has hard corners/breaks into segments to signify time
# Move players along lines

class FootballPlay

  @DEFAULT_PLAY: [ {position:"QB", yOffset:1, xOffset: 0},
    {position:"LT", yOffset:0, xOffset: -2},
    {position:"LG", yOffset:0, xOffset: -1},
    {position:"C", yOffset:0, xOffset: 0},
    {position:"RT", yOffset:0, xOffset: 2},
    {position:"RG", yOffset:0, xOffset: 1},
    {position:"TE", yOffset:0, xOffset: -3},
    {position:"WR", yOffset:0, xOffset: -7},
    {position:"FB", yOffset:3, xOffset: 0},
    {position:"RB", yOffset:2, xOffset: 0},
    {position:"WR", yOffset:0, xOffset: 7}
  ]

  constructor: (domID, width, height, @play=FootballPlay.DEFAULT_PLAY)->
    @paper = Raphael(domID, width, height);
    window.paper = @paper

    @playerRadius = 20
    @defaultYOffset = 150
    @setupPlayingField();
    @setupOffense();


  # THIS IS THE BEGINNING OF DRAWING LINES
  setupPlayingField:()->
    field = @paper.rect(0,0, @paper.width, @paper.height);
    field.attr
      'fill': '#ccc'

    move = (x,y)->
      console.log "moveX: ", x, "moveY: ", y

    start = (x, y)->
      console.log "startX: ", x, "startY: ", y
      @paper.path("M#{x},#{y}L90,90")

    end = (e)->
      console.log "end: ", e

    field.drag(move, start, end);

  setupOffense:()->
    for player in @play
      @positionPlayer(player.position, player.xOffset, player.yOffset);


  positionPlayer:(playerPosition, xOffset, yOffset)->
    xposition = @paper.width / 2 + (@playerRadius+30)*xOffset
    yposition = @defaultYOffset + (@playerRadius+5)*2*yOffset

    player = @paper.circle(xposition, yposition, @playerRadius);
    player.attr
      'fill': '#000000'

    label = @paper.text(xposition, yposition, playerPosition);
    label.attr
      'fill':'#ffffff'

    mousedownEvent = ->
      @attr
        'fill': 'pink'

    player.mousedown(mousedownEvent);




$ ->
  play = new FootballPlay('playing-field', 900, 500);