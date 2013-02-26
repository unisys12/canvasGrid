function init(){

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
height = canvas.clientHeight;
width = canvas.clientWidth;
inc = 10; // change this to adjust your grid spacing!!
}

init();

function drawGrid(){

	for (var h = 0; h < width; h++) {
		if(h % inc === 0){
			ctx.beginPath();
			ctx.moveTo(h, 0);
			ctx.lineTo(h, height);
			ctx.closePath();
			ctx.strokeStyle = "rgba(0,0,0,.2)";
			ctx.stroke();
		}
	}

	for (var l = inc; l < width; l++) {
		if(l % inc === 0){
			ctx.beginPath();
			ctx.moveTo(0, l);
			ctx.lineTo(width, l);
			ctx.closePath();
			ctx.stroke();
		}
	}


}

drawGrid();
