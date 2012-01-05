var Trig = {
	distanceBetween2Points: function ( point1, point2 ) {
		
		var dx = point2.x - point1.x;
		var dy = point2.y - point1.y;
		return Math.sqrt( Math.pow( dx, 2 ) + Math.pow( dy, 2 ) );	
	},
	
	angleBetween2Points: function ( point1, point2 ) {
	
		var dx = point2.x - point1.x;
		var dy = point2.y - point1.y;	
		return Math.atan2( dx, dy );
	}
}