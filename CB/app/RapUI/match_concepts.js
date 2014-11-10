window.onload = function() {
        var paper = new Raphael(document.getElementById('canvas_container'), 1200, 600);

        var fclick_x, fclick_y;
        var eclick_x, eclick_y;
        var fshape,eshape;
        var line;



var startX, startY;
var cnt = 0;
var result = [];

function onstart() {
startX = this.attr('x');
startY = this.attr('y');
}
function onend() {
}

function onmove(dx, dy) {
this.attr({
x: startX + dx,
y: startY + dy
});
}

var clicked = function(el){
	console.log(this);
	//click on first element of connection
	if(fshape === undefined){
		console.log('first shape of connection clicked');
		fshape = this;
	}
	else{
		console.log('second shape of connection clicked');
		paper.connector(fshape,this,{double_headed: true});
		fshape = undefined;
	}

}


var square_left = paper.rect(60, 50, 500, 100);
square_left.attr('fill', 'red');
//square.attr('src_no', 1);
square_left.src_no =  1;
square_left.attr('opacity', 0.3);

var square2_left = paper.rect(60, 175, 500, 100);
square2_left.attr('fill', 'green');
square2_left.src_no =  2;
square2_left.attr('opacity', 0.3);


var square3_left = paper.rect(60, 300, 500, 100);
square3_left.attr('fill', 'blue');
square3_left.src_no =  3;
square3_left.attr('opacity', 0.3);

var square = paper.rect(660, 50, 500, 100);
square.attr('fill', 'blue');
//square.attr('src_no', 1);
square.src_no =  1;
square.attr('opacity', 0.3);

var square2 = paper.rect(660, 175, 500, 100);
square2.attr('fill', 'red');
square2.src_no =  2;
square2.attr('opacity', 0.3);


var square3 = paper.rect(660, 300, 500, 100);
square3.attr('fill', 'green');
square3.src_no =  3;
square3.attr('opacity', 0.3);


//var text = paper.text(760, 100, 'Bye Bye Circleeeee!')
//text.attr({opacity: 1, 'font-size': 12}).toBack();


//square.drag(onmove, onstart, onend);

 paper.forEach(function (el) {
    el.attr({ cursor: "pointer" });
    el.click(clicked);
    el.drag(onmove, onstart, onend);
});	

// var target = paper.rect(0, 0, 600, 600);
// target.attr("fill", "#ddf");
// target.attr("stroke", "#000").toBack();


// var rect2 = paper.rect(600, 0, 600, 600);
// rect2.attr("fill", "#ddf");
// rect2.attr("stroke", "#000").toBack();


}

