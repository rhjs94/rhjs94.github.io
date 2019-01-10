// canvas variables
var canvasBoard = document.getElementById("boardCanvas");
var ctxBoard = canvasBoard.getContext("2d");
var $canvasBoard = $("#boardCanvas");
var canvasBOffset = $canvasBoard.offset();
var offsetXBoard = canvasBOffset.left;
var offsetYBoard = canvasBOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

// set styles
/*
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 2;
*/

drawBoard();

// make shapes
var boardFields = [];
for (var i=0; i<5; i++) {
  for (var j=0; j<5; j++) {
    boardFields.push( new Square( { x:1+i*100, y:1+j*100}, 100 ) );
  }
}

// listen for mousedown events
$("#boardCanvas").mousedown(function (e) {
    handleMouseDown(e, boardFields, ctxBoard, offsetXBoard, offsetYBoard);
});