function drawGrid(increment){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var height = canvas.clientHeight;
	var width = canvas.clientWidth;
	var inc = increment;

	for (var h = 0; h < width; h+=inc) {
			ctx.beginPath();
			ctx.moveTo(h, 0);
			ctx.lineTo(h, height);
			ctx.closePath();
			ctx.strokeStyle = "rgba(0,0,0,.2)";
			ctx.stroke();
	}

	for (var l = inc; l < width; l+=inc) {
			ctx.beginPath();
			ctx.moveTo(0, l);
			ctx.lineTo(width, l);
			ctx.closePath();
			ctx.stroke();
	}
}
