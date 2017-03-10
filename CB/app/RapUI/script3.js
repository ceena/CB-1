window.onload = function() {
        var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
        var fclick_x, fclick_y;
        var eclick_x, eclick_y;
        var fshape,eshape;

        var dragger = function () {
        fshape = this;
        fclick_x = this.type == "rect" ? this.attr("x") : this.attr("cx");
        fclick_y = this.type == "rect" ? this.attr("y") : this.attr("cy");
        this.animate({"fill-opacity": .2}, 500);
    },
        move = function (dx, dy) {
            var att = this.type == "rect" ? {x: this.ox + dx, y: this.oy + dy} : {cx: this.ox + dx, cy: this.oy + dy};
            this.attr(att);
            console.log(con);
            con.remove();
            
        },
        up = function () {
        	eclick_x = this.type == "rect" ? this.attr("x") : this.attr("cx");
        	eclick_y = this.type == "rect" ? this.attr("y") : this.attr("cy");
       	
        	paper.path("M"+fclick_x+", "+fclick_y+" , "+eclick_x+" , "+eclick_y);
            this.animate({"fill-opacity": 0.5}, 500);
            con = paper.connector(circ,circ2,{ double_headed: true });
        };
 
        var circ = paper.circle(250, 250, 40);
        circ.attr({fill: '#777', stroke: 'none'});
         circ.drag(move, dragger, up);

                var circ2= paper.circle(50, 50, 40);
        circ2.attr({fill: '#777', stroke: 'none'});
        circ2.drag(move, dragger, up);

        con = paper.connector(circ,circ2,{ double_headed: true });
        //con.remove();

        var text = paper.text(250, 250, 'Bye Bye Circleeeee!')
text.attr({opacity: 0, 'font-size': 12}).toBack();

circ.node.onmouseover = function() {
    this.style.cursor = 'pointer';
}

circ.node.onclick = function() {
    text.animate({opacity: 1}, 2000);
    circ.animate({opacity: 0}, 2000, function() {
        this.remove();
    });
}

}

