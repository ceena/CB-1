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

        //editor vars
        var shape_to_draw;
        var current_shape;
        var shapes_drawn = [];

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

var cbglow = function(el){
	if(el.type === 'text')
		el.attr({'stroke':cn_colors[no_of_cn] , 'stroke-width':'1px'});
	else
		el.attr({'stroke':cn_colors[no_of_cn] , 'stroke-width':'3px'});

}

var cbfocus = function(el){
	if(el.type === 'text')
		el.attr({'stroke':'green' , 'stroke-width':'1px'});
	else
		el.attr({'stroke':'green' , 'stroke-width':'3px'});

}


var clicked = function(el){
	console.log(this);
	//click on first element of connection
	if(fshape === undefined){
		console.log('first shape of connection clicked');
		fshape = this;
		//fshape_glow = fshape.glow();
		cbglow(fshape);
	}
	else{
		console.log('second shape of connection clicked');
		if(fshape.pos == this.pos){
			fshape.attr({'stroke-width':'0px'});
			fshape = this;
			cbglow(fshape);
			return;
		}

		cbglow(this);
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
        for(i=0;i<shapes_drawn.length;i++){
			shapes_drawn[i].ft.updateHandles();
    	}
        //this.updateHandles();
        document.getElementById('bar').innerHTML = paper.toSVG();
        console.log(paper.toSVG());
    }, true);
};

var sd_cnt = 0;
var addShape = function(el,shape){
	cbfocus(el);

	for(i=0;i<shapes_drawn.length;i++){
			shapes_drawn[i].ft.hideHandles();
    }

	var shape_to_draw;
	if(shape === 'rect'){
	    // Retrieve created <input type=text> field
	    shape_to_draw = paper.rect(0,0,250,250);
	    shape_to_draw.attr({'fill':'#ddd', 'opacity':'0.2'}).toBack();
	}
	else if(shape === 'text'){
		shape_to_draw = paper.text(20,20,'Drag to desired location and double click to edit text.');
   		shape_to_draw.attr({'text-anchor': 'start', 'font-size':'25px'}).toFront();
   		paper.inlineTextEditing(shape_to_draw);
		shape_to_draw.dblclick(dblclicked);
	}

    shape_to_draw.ft = paper.freeTransform(shape_to_draw);
    shape_to_draw.ft.showHandles();
    shape_to_draw.ft.state = 'show';
    shape_to_draw.id = sd_cnt++;
    shapes_drawn.push(shape_to_draw);



    shape_to_draw.click(function(){
    	console.log('std clicked');
    	console.log(shape_to_draw);
    	console.log('current shape');
    	console.log(current_shape);
    	if(current_shape===undefined)
			current_shape = shape_to_draw;
    	if( shape_to_draw.id === current_shape.id)
    		return;
    	for(i=0;i<shapes_drawn.length;i++){
			shapes_drawn[i].ft.hideHandles();
    	}
    	this.ft.showHandles();
    	current_shape = shape_to_draw;
    });

    current_shape = shape_to_draw;
    //ft.setOpts({ keepRatio: false });
    //shape_to_draw.drag(onmove, onstart, onend);
    //shape_to_draw.drag();

};

var addRect = function(){
	addShape(this,'rect');
}

var addText = function(){
	addShape(this,'text');
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


var menu_rect = paper.rect(0, 50, 30, 30);
menu_rect.attr({'fill': '#ddd', 'opacity':'50%'});
menu_rect.click(addRect);

var menu_text = paper.text(10, 100, 'T');
menu_text.attr({'text-anchor': 'start', 'font-size':'25px'});
menu_text.click(addText);

var delbtn = paper.path("M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z");
delbtn.attr({fill: "#000", stroke: "none"});
delbtn.transform("t0,115");
delbtn.click(function(){

	for(i=0;i<shapes_drawn.length;i++){
			if(shapes_drawn[i].id === current_shape.id){
				shapes_drawn.splice(i,1);
				break;
			}
    }

	current_shape.ft.unplug();
	current_shape.remove();
});

var savebtn = paper.path("M16,9.904c-3.366,0-6.096,2.729-6.096,6.096c0,3.366,2.729,6.096,6.096,6.096s6.096-2.729,6.096-6.096S19.366,9.904,16,9.904zM16,20.48c-2.475,0-4.48-2.006-4.48-4.48c0-2.474,2.006-4.48,4.48-4.48c2.475,0,4.48,2.006,4.48,4.48C20.48,18.475,18.475,20.48,16,20.48zM24.576,2.321H7.423c-2.848,0-5.156,2.309-5.156,5.157v17.043c0,2.849,2.309,5.155,5.156,5.155h17.153c2.849,0,5.156-2.309,5.156-5.155V7.479C29.732,4.63,27.425,2.321,24.576,2.321zM22.236,5.394c0-0.605,0.49-1.097,1.097-1.097h3.219c0.605,0,1.097,0.491,1.097,1.097v3.219c0,0.605-0.489,1.097-1.097,1.097h-3.219c-0.604,0-1.097-0.491-1.097-1.097V5.394zM28.637,24.521c0,2.237-1.82,4.06-4.061,4.06H7.423c-2.238,0-4.06-1.82-4.06-4.06V10.879H4.19c0.102-0.5,0.544-0.877,1.075-0.877h3.438c0.53,0,0.974,0.377,1.074,0.877h1.498c1.242-1.146,2.9-1.847,4.724-1.847s3.481,0.701,4.724,1.847h7.912v13.643H28.637L28.637,24.521z");
savebtn.attr({fill: "#000", stroke: "none"});
savebtn.transform("t0,175");

var okbtn = paper.path("M29.548,3.043c-1.081-0.859-2.651-0.679-3.513,0.401L16,16.066l-3.508-4.414c-0.859-1.081-2.431-1.26-3.513-0.401c-1.081,0.859-1.261,2.432-0.401,3.513l5.465,6.875c0.474,0.598,1.195,0.944,1.957,0.944c0.762,0,1.482-0.349,1.957-0.944L29.949,6.556C30.809,5.475,30.629,3.902,29.548,3.043zM24.5,24.5h-17v-17h12.756l2.385-3H6C5.171,4.5,4.5,5.171,4.5,6v20c0,0.828,0.671,1.5,1.5,1.5h20c0.828,0,1.5-0.672,1.5-1.5V12.851l-3,3.773V24.5z");
okbtn.attr({fill: "#000", stroke: "none"});
okbtn.transform("t0,225");

var keybtn = paper.path("M18.386,16.009l0.009-0.006l-0.58-0.912c1.654-2.226,1.876-5.319,0.3-7.8c-2.043-3.213-6.303-4.161-9.516-2.118c-3.212,2.042-4.163,6.302-2.12,9.517c1.528,2.402,4.3,3.537,6.944,3.102l0.424,0.669l0.206,0.045l0.779-0.447l-0.305,1.377l2.483,0.552l-0.296,1.325l1.903,0.424l-0.68,3.06l1.406,0.313l-0.424,1.906l4.135,0.918l0.758-3.392L18.386,16.009z M10.996,8.944c-0.685,0.436-1.593,0.233-2.029-0.452C8.532,7.807,8.733,6.898,9.418,6.463s1.594-0.233,2.028,0.452C11.883,7.6,11.68,8.509,10.996,8.944z");
keybtn.attr({fill: "#000", stroke: "none"});
keybtn.transform("t0,275");
// var target = paper.rect(0, 0, 600, 600);
// target.attr("fill", "#ddf");
// target.attr("stroke", "#000").toBack();


// var rect2 = paper.rect(600, 0, 600, 600);
// rect2.attr("fill", "#ddf");
// rect2.attr("stroke", "#000").toBack();


}

