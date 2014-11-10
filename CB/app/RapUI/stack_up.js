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
var bBox = this.getBBox(),
targetBBox = target.getBBox();
if(Raphael.isBBoxIntersect(bBox, targetBBox)) {
this.undrag();
result.push(this.src_no);
console.log(result);
this.attr({
x: 50,
y: 50 + (cnt * 100)
});
cnt = cnt + 1;
}
}

function onmove(dx, dy) {
this.attr({
x: startX + dx,
y: startY + dy
});
}


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
    el.drag(onmove, onstart, onend);
});	

var target = paper.rect(0, 0, 600, 600);
target.attr("fill", "#ddf");
target.attr("stroke", "#000").toBack();


var rect2 = paper.rect(600, 0, 600, 600);
rect2.attr("fill", "#ddf");
rect2.attr("stroke", "#000").toBack();


}

