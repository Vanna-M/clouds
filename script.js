var dSpent = [752, 1000];
var dSpentChart =  d3.selectAll(".dSpent");

var pDefense = [62.4,48.7];
var pDefenseChart = d3.selectAll(".pDefense");

var debt = [46.7, 105.2];
var debtChart = d3.selectAll(".debt");

var health = [17.3, 38.9];
var healthChart = d3.selectAll(".health");

var bars = function() {
    dSpentChart
	.selectAll("div")
	.data( dSpent )
	.enter().append("div")
	.style("width", function(d) {
	    return d + "px"; })
	.text(function(d) {return d;} );

    pDefenseChart
	.selectAll("div")
	.data( pDefense )
	.enter().append("div")
	.style("width", function(d) {
	    return d*10 + "px"; })
	.text(function(d) {return d;} );

    debtChart
	.selectAll("div")
	.data( debt )
	.enter().append("div")
	.style("width", function(d) {
	    return d*10 + "px"; })
	.text(function(d) {return d;} );

    healthChart
	.selectAll("div")
	.data( health )
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

var myTimedTransition = function(m, dur) {
    chart.selectAll('div')
	.data(nums)
	.transition()
	.duration(dur)
	.style('width', function(d) {
	    return d * m + "px";
	});
};
