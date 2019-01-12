// function to draw (but not fill/stroke) a shape
// (needed because isPointInPath only tests the last defined path)

function drawGrid(ctx, intX, intY, start, diagSize) {
	iX = diagSize.x/intX;
	iY = diagSize.y/intY;
	ctx.beginPath();
	for (var i=1; i<intX; i++) {
		ctx.moveTo(start.x+iX*i, start.y);
		ctx.lineTo(start.x+iX*i, start.y+diagSize.y);
	}
	ctx.stroke();
	ctx.beginPath();
	for (var i=1; i<intY; i++) {
		ctx.moveTo(start.x, start.y+iY*i);
		ctx.lineTo(start.x+diagSize.x, start.y+iY*i);
	}
	ctx.stroke();
}

function drawBoard(ctx){
	// draw rectangular border
	ctx.moveTo(0,0);
	ctx.lineTo(502,0);
	ctx.lineTo(502,502);
	ctx.lineTo(0,502);
	ctx.lineTo(0,0);
	
	drawGrid(ctx, 5, 5, {x:1,y:1}, {x:500,y:500});

/* // manual moves, should be equivalent to appropriate drawGrid() call
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
*/
}

function cross(ctx, topLeft, width, line, color) {
	var margin = width/4;
	ctx.beginPath();
	ctx.moveTo(topLeft.x + margin, topLeft.y + margin);
	ctx.lineTo(topLeft.x + width - margin, topLeft.y + width - margin);
	ctx.moveTo(topLeft.x + width - margin, topLeft.y + margin);
	ctx.lineTo(topLeft.x + margin, topLeft.y + width - margin);
	ctx.lineWidth = line;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function circle(ctx, topLeft, width, line, color) {
	var margin = width/10;
	ctx.beginPath();
	ctx.arc(topLeft.x + width/2, topLeft.y + width/2, (width/2)-margin, 0, 2 * Math.PI);
	ctx.strokeStyle = color;
	ctx.lineWidth = line;
	ctx.stroke();	
}

function drawCross(ctx, topLeft, width) {
	cross(ctx, topLeft, width, CROSS_LINEWIDTH, COLOR_RED);
}

function drawCircle(ctx, topLeft, width) {
	circle(ctx, topLeft, width, CIRCLE_LINEWIDTH, COLOR_RED);
}

function drawCross2(ctx, topLeft, width) {
	cross(ctx, topLeft, width, CROSS_LINEWIDTH, COLOR_BLUE);
}

function drawCircle2(ctx, topLeft, width) {
	circle(ctx, topLeft, width, CIRCLE_LINEWIDTH, COLOR_BLUE);
}

function drawPieces(ctx) {
	for (var i=0; i<5; i++) {
		drawCross(ctx, { x:1, y:1+i*100 }, 100);
		drawCross2(ctx, { x:401, y:1+i*100 }, 100);
	}
	drawCircle(ctx, { x:1, y:201 }, 100);
	drawCircle2(ctx, { x:401, y:201 }, 100);
}

function define(shape, ctx) {
    var points = shape.points();
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
        define(shape, ctx);
        // test if the mouse is in the current shape
        if (ctx.isPointInPath(mouseX, mouseY)) {
            // if inside, display the shape's index
            alert("shape number " + i);
        }
    }
}
