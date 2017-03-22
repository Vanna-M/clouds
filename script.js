var nums = [4, 8, 15, 18, 16, 23, 42]

var bars = function() {
    d3.select(".chart")
	.selectAll("div")
	.data( nums )
	.enter().append("div")
	.style("width", function(d) {
	    return d*10 + "px"; })
	.text(function(d) {return d;} );
};

bars();
