// canvas variables - board
var canvasBoard = document.getElementById("boardCanvas");
var ctxBoard = canvasBoard.getContext("2d");
var $canvasBoard = $("#boardCanvas");
var canvasBOffset = $canvasBoard.offset();
var offsetXBoard = canvasBOffset.left;
var offsetYBoard = canvasBOffset.top;
var scrollXBoard = $canvasBoard.scrollLeft();
var scrollYBoard = $canvasBoard.scrollTop();

// canvas variables - cards left
var canvasCardL = document.getElementById("cardLCanvas");
var ctxCardL = canvasCardL.getContext("2d");
var $canvasCardL = $("#cardLCanvas");
var canvasBOffset = $canvasCardL.offset();
var offsetXCardL = canvasBOffset.left;
var offsetYCardL = canvasBOffset.top;
var scrollXCardL = $canvasCardL.scrollLeft();
var scrollYCardL = $canvasCardL.scrollTop();

// canvas variables - cards left
var canvasCardR = document.getElementById("cardRCanvas");
var ctxCardR = canvasCardR.getContext("2d");
var $canvasCardR = $("#cardRCanvas");
var canvasBOffset = $canvasCardR.offset();
var offsetXCardR = canvasBOffset.left;
var offsetYCardR = canvasBOffset.top;
var scrollXCardR = $canvasCardR.scrollLeft();
var scrollYCardR = $canvasCardR.scrollTop();

// set styles
/*
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 2;
*/

drawBoard(ctxBoard);

// make shapes
var boardFields = [];
for (var i=0; i<5; i++) {
  for (var j=0; j<5; j++) {
    boardFields.push( new Square( { x:1+i*100, y:1+j*100 }, 100 ) );
  }
}

drawPieces(ctxBoard);

// listen for mousedown events
$("#boardCanvas").mousedown(function (e) {
    handleMouseDown(e, boardFields, ctxBoard, offsetXBoard, offsetYBoard);
});
