var nums = [4, 8, 15, 18, 16, 23, 42]
var chart =  d3.select(".chart"); 

var bars = function() {
    chart
	.selectAll("div")
	.data( nums )
	.enter().append("div")
	.style("width", function(d) {
	    return d*10 + "px"; })
	.text(function(d) {return d;} );
};

bars();

var myTransition = function(m) {
    chart.selectAll('div')
	.data(nums)
	.transition()
	.style('width', function(d) {
	    return d * m + "px";
	});
};
