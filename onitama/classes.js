function Square(topLeft, width){
  this.topLeft = topLeft;
  this.width = width;

  this.points = function() {
    return [
    { x : topLeft.x, y : topleft.y },
    { x : topLeft.x + this.width, y : topLeft.y },
    { x : topLeft.x + this.width, y : topLeft.y + this.width },
    { x : topLeft.x, y : topLeft.y + width } ];
  }
}

