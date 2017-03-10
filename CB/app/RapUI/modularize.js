window.onload = function() {
        var paper = new Raphael(document.getElementById('canvas_container'), 1200, 600);

        var fclick_x, fclick_y;
        var eclick_x, eclick_y;
        var fshape,eshape;
        var line;

        //colors definition
        var block_bg = '#eee';
        var cn_colors = ['green','blue','orange','yellow','red','#CCC','#444','green','blue','orange','yellow','red','#CCC','#444'];
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

var dblclicked = function(){
    // Retrieve created <input type=text> field
    var ite = this.inlineTextEditing;
    var input = this.inlineTextEditing.startEditing();

    input.addEventListener("blur", function(e){
        // Stop inline editing after blur on the text field
        ite.stopEditing();
        document.getElementById('bar').innerHTML = paper.toSVG();
        console.log(paper.toSVG());
    }, true);
};


var c1 = paper.text(400, 50, 'Represent a subway line and all the stations in that line.')
c1.attr({'link_type':2, opacity: 1, 'font-size': 20});
c1.src_no =  1;
c1.pos =  0;
paper.inlineTextEditing(c1);
c1.dblclick(dblclicked);



var c2 = paper.text(400, 100, 'Load the lines and stations information from a flat file.')
c2.attr({'link_type':2, opacity: 1, 'font-size': 20});
c2.pos =  0;
c2.src_no =  2;

var c3 = paper.text(400, 150, 'Given two stations, determine valid path connecting the two stations.')
c3.attr({'link_type':2, opacity: 1, 'font-size': 20});
c3.pos =  0;
c3.src_no =  3;

var c4 = paper.text(400, 200, 'Get the timings information for lines based on the given date and time.')
c4.attr({'link_type':2, opacity: 1, 'font-size': 20});
c4.pos =  0;
c4.src_no =  4;

var c5 = paper.text(400, 250, 'Print tickets, fare details and route information.')
c5.attr({'link_type':2, opacity: 1, 'font-size': 20});
c5.pos =  0;
c5.src_no =  4;

var square = paper.rect(860, 0, 200, 100);
square.attr('fill', '#ddd');
//square.attr('src_no', 1);
square.src_no =  1;
square.pos =  1;
square.attr('opacity', 0.3);
square.text_el = paper.text((860+100), (0+50), "Subway").attr({'font-size':'20px','text-anchor': 'center'}).toBack();


var square2 = paper.rect(860, 125, 200, 100);
square2.attr('fill', '#ddd');
square2.src_no =  2;
square2.pos =  1;
square2.attr('opacity', 0.3);
square2.text_el = paper.text((860+100), (125+50), "Subway Loader").attr({'font-size':'20px','text-anchor': 'center'}).toBack();


var square3 = paper.rect(860, 250, 200, 100);
square3.attr('fill', '#ddd');
square3.src_no =  3;
square3.pos =  1;
square3.attr('opacity', 0.3);
square3.text_el = paper.text((860+100), (250+50), "Printer").attr({'font-size':'20px','text-anchor': 'center'}).toBack();


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

