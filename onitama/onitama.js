function drawBoard(){
  var c = document.getElementById("boardCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(101,0);
  ctx.lineTo(101,502);
  ctx.moveTo(201,0);
  ctx.lineTo(201,502);
  ctx.moveTo(301,0);
  ctx.lineTo(301,502);
  ctx.moveTo(401,0);
  ctx.lineTo(401,502);
  ctx.stroke();
}