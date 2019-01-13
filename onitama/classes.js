function Square(topLeft, width, occupied){
	this.topLeft = topLeft;
	this.width = width;
	// occupancy: 0 for unoccupied field
	// 1 for player 1 pawn, 2 for player 2 pawn
	// 3 for player 1 big one, 4 for player 2 big one
	this.occupied = occupied;

	this.points = function() {
	return [
		{ x : topLeft.x, y : topLeft.y },
		{ x : topLeft.x + this.width, y : topLeft.y },
		{ x : topLeft.x + this.width, y : topLeft.y + this.width },
		{ x : topLeft.x, y : topLeft.y + width } ];
	}
}

function Board(xMax, yMax) {
	this.xMax = xMax;
	this.yMax = yMax;
	
	// Construct the fields on the board
	this.fields = [];
	for (var i=0; i<xMax; i++) {
		for (var j=0; j<yMax; j++) {
			var occ; // Initialise to have player 1 in the leftmost column, player 2 on the right.
			if (i==0) {
				if (j == 2) {occ = 3;}
				else {occ = 1;}
			} else if (i==4) {
				if (j == 2) {occ = 4;}
				else {occ = 2;}
			} else {occ = 0;}
			this.fields.push( new Square( { x:1+i*100, y:1+j*100 }, 100, occ ) );
		}
	}

	// for easy integer coordinates
	this.getField = function(integerX, integerY) {
		return this.fields[(integerX-1)*this.yMax + (integerY-1)];
	}

	// for changing occupancy
	this.setOcc = function(intX, intY, occ) {
		if (occ >= 0 && occ <= 4) {
			this.fields[(integerX-1)*this.yMax + (integerY-1)].occupied = occ;
		} else {alert("Error: Tried to write faulty occupancy value.");}
	}

	this.hasP1 = function() {
		return this.occ == 1 || this.occ == 3;
	}

	this.hasP2 = function() {
		return this.occ == 2 || this.occ == 4;
	}

	this.hasBig = function() {
		return this.occ == 3 || this.occ ==4;
	}
	
}
