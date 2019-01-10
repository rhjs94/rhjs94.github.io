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

function drawBoard(ctx){
  ctx.moveTo(0,0);
  ctx.lineTo(502,0);
  ctx.lineTo(502,502);
  ctx.lineTo(0,502);
  ctx.lineTo(0,0);
  ctx.moveTo(101,0);
  ctx.lineTo(101,502);
  ctx.moveTo(201,0);
  ctx.lineTo(201,502);
  ctx.moveTo(301,0);
  ctx.lineTo(301,502);
  ctx.moveTo(401,0);
  ctx.lineTo(401,502);
  ctx.moveTo(0,101);
  ctx.lineTo(502,101);
  ctx.moveTo(0,201);
  ctx.lineTo(502,201);
  ctx.moveTo(0,301);
  ctx.lineTo(502,301);
  ctx.moveTo(0,401);
  ctx.lineTo(502,401);
  ctx.stroke();
}

drawBoard(ctxBoard);

// make shapes
var boardFields = [];
for (var i=0; i<5; i++) {
  for (var j=0; j<5; j++) {
    boardFields.push( new Square( { x:1+i*100, y:1+j*100 }, 100 ) );
  }
}

// listen for mousedown events
$("#boardCanvas").mousedown(function (e) {
    handleMouseDown(e, boardFields, ctxBoard, offsetXBoard, offsetYBoard);
});