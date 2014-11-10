window.onload = function() {
        var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
        var fclick_x, fclick_y;
        var eclick_x, eclick_y;
        var fshape,eshape;
        var line;

var dragger = function () {
         	fshape = this;
         	console.log(this);
         	console.log('fshape ');
         	console.log(fshape);
    },
        move = function (dx, dy) {
        	if(line !== undefined)
        		line.remove();
        	if(fshape !== undefined)
	           line = paper.path("M"+fshape.attrs.x+", "+fshape.attrs.y+" , "+fshape.attrs.x+dx+" , "+fshape.attrs.y+dy);
        },
        up = function () {
         	eshape = this;
         	console.log(eshape);
         	paper.connector(fshape,eshape,false);
        };

var clicked = function(el){
	console.log(this);
	//click on first element of connection
	if(fshape === undefined){
		console.log('first shape of connection clicked');
		fshape = this;
	}
	else{
		console.log('second shape of connection clicked');
		paper.connector(fshape,this,false);
		fshape = undefined;
	}

}

var clickedfirst = function(el){
	console.log(this);
	//click on first element of connection
		console.log('first shape of connection clicked');
		fshape = this;
}

var clickedsecond = function(el){
	console.log(this);
	//click on first element of connection
	if(fshape !== undefined){
		console.log('second shape of connection clicked');
		paper.connector(fshape,this,false);
		fshape = undefined;
	}

}

var clicked_ext = function(el){
	console.log(this);
	//click on first element of connection
	if(fshape === undefined){
		console.log('first shape of connection clicked');
		fshape = this;
	}
	else{
		console.log('second shape of connection clicked');
		paper.connector(fshape,this,false);
		fshape = undefined;
	}

}

var u1 = paper.image("RapUI/user.gif", 0, 50, 75, 100);
u1.attr({'link_type':1});
var text = paper.text(30, 135, 'ADMIN')
text.attr({'link_type':1, opacity: 1, 'font-size': 12});
u1.click(clicked);

var c1 = paper.text(330, 135, 'Load Metro Network Lines.')
c1.attr({'link_type':2, opacity: 1, 'font-size': 12});
c1.click(clicked);

var u2 = paper.image("RapUI/user.gif", 0, 350, 75, 100);
u1.attr({'link_type':1});
u2.click(clicked);
var text2 = paper.text(45, 430, 'TICKET AGENT');
text2.attr({'link_type':1, opacity: 1, 'font-size': 12}).toBack();


var c2 = paper.text(330, 400, 'Get Directions.')
c2.attr({'link_type':2, opacity: 1, 'font-size': 12});
c2.click(clicked);




 paper.forEach(function (el) {
    el.attr({ cursor: "pointer" });
});	



}

