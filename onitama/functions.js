// function to draw (but not fill/stroke) a shape
// (needed because isPointInPath only tests the last defined path)

function define(shape, ctx) {
    var points = shape.points;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
}

// function to display a shape on the canvas (define + fill + stroke)

function draw(shape) {
    define(shape);
    ctx.fill();
    ctx.stroke();
}

// called when user clicks the mouse

function handleMouseDown(e, shapes, ctx, offsetX, offsetY) {
    e.preventDefault();

    // get the mouse position
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    // iterate each shape in the shapes array
    for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        // define the current shape
        define(shape);
        // test if the mouse is in the current shape
        if (ctx.isPointInPath(mouseX, mouseY)) {
            // if inside, display the shape's index
            alert("shape number " + i);
        }
    }
}

function drawBoard(){
  var c = document.getElementById("boardCanvas");
  var ctx = c.getContext("2d");
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