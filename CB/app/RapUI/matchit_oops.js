window.onload = function() {
        var paper = new Raphael(document.getElementById('canvas_container'), 1200, 600);

        var fclick_x, fclick_y;
        var eclick_x, eclick_y;
        var fshape,eshape;
        var line;

        //colors definition
        var block_bg = '#eee';
        var cn_colors = ['green','blue','red','orange','yellow','#CCC','#FFF'];
        var no_of_cn = 0;


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
		//fshape_glow = fshape.glow();
		fshape.attr({'stroke':cn_colors[no_of_cn] , 'stroke-width':'3px'});
	}
	else{
		console.log('second shape of connection clicked');
		if(fshape.pos == this.pos){
			fshape.attr({'stroke-width':'0px'});
			fshape = this;
			fshape.attr({'stroke':cn_colors[no_of_cn] , 'stroke-width':'3px'});
			return;
		}

		this.attr({'stroke':cn_colors[no_of_cn] , 'stroke-width':'3px'});
		if(fshape.pos < this.pos){
			paper.connector(fshape,this,{double_headed: true});
		}else
			paper.connector(this,fshape,{double_headed: true});
		no_of_cn++;
		fshape = undefined;
	}

}


var square_left = paper.rect(60, 50, 500, 100);
square_left.attr('fill', block_bg);
//square.attr('src_no', 1);
square_left.src_no =  1;
square_left.pos =  0;
square_left.attr('opacity', 0.3);
square_left.text_el = paper.text((60+250), (50+50), "Flexiility").attr({'font-size':'20px','text-anchor': 'center'}).toBack();

var square2_left = paper.rect(60, 175, 500, 100);
square2_left.attr('fill', block_bg);
square2_left.src_no =  2;
square2_left.pos =  0;
square2_left.attr('opacity', 0.3);
square2_left.text_el = paper.text((60+250), (175+50), "Design Patterns").attr({'font-size':'20px','text-anchor': 'center'}).toBack();

var square3_left = paper.rect(60, 300, 500, 100);
square3_left.attr('fill', block_bg);
square3_left.src_no =  3;
square3_left.pos =  0;
square3_left.attr('opacity', 0.3);
square3_left.text_el = paper.text((60+250), (300+50), "Encapsulation").attr({'font-size':'20px','text-anchor': 'center'}).toBack();

var square = paper.rect(660, 50, 500, 100);
square.attr('fill', block_bg);
//square.attr('src_no', 1);
square.src_no =  1;
square.pos =  1;
square.attr('opacity', 0.3);
square.text_el = paper.text((600+20+250), (50+50), "Keep parts of code which change seperate\n from parts which change.").attr({'font-size':'20px','text-anchor': 'middle'}).toBack();

var square2 = paper.rect(660, 175, 500, 100);
square2.attr('fill', block_bg);
square2.src_no =  2;
square2.pos =  1;
square2.attr('opacity', 0.3);
square2.text_el = paper.text((600+20+250), (175+50), "Ensures s/w can grow without\n constant changes.").attr({'font-size':'20px','text-anchor': 'middle'}).toBack();

var square3 = paper.rect(660, 300, 500, 100);
square3.attr('fill', block_bg);
square3.src_no =  3;
square3.pos =  1;
square3.attr('opacity', 0.3);
square3.text_el = paper.text((600+20+250), (300+50), "Well designed applications addressing \n all common software repetative principles.").attr({'font-size':'20px','text-anchor': 'middle'}).toBack();


//var text = paper.text(760, 100, 'Bye Bye Circleeeee!')
//text.attr({opacity: 1, 'font-size': 12}).toBack();


//square.drag(onmove, onstart, onend);

 paper.forEach(function (el) {
    el.attr({ cursor: "pointer" });
    el.click(clicked);
    //el.drag(onmove, onstart, onend);
});	

// var target = paper.rect(0, 0, 600, 600);
// target.attr("fill", "#ddf");
// target.attr("stroke", "#000").toBack();


// var rect2 = paper.rect(600, 0, 600, 600);
// rect2.attr("fill", "#ddf");
// rect2.attr("stroke", "#000").toBack();


}

