(function(){
var t;
function size(animate){
	if (animate == undefined){
		animate = false;
	}
	clearTimeout(t);
	t = setTimeout(function(){
		$("canvas").each(function(i,el){
			$(el).attr({
				"width":$(el).parent().width(),
				"height":$(el).parent().outerHeight()
			});
		});
		redraw(animate);
		var m = 0;
		$(".widget").height("");
		$(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
		$(".widget").height(m);
	}, 100);
}
$(window).on('resize', function(){ size(false); });


function redraw(animation){
	var options = {};
	if (!animation){
		options.animation = false;
	} else {
		options.animation = true;
	}
	var data = [
		{
            label: 109101,
			value: 1,
			color:"#637b85"
		},
		{
            label : 109301,
			value : 2,
			color : "#2c9c69"
		},
		{
            label : 338150,
			value : 1,
			color : "#dbba34"
		},
		{
            label : 511401,
			value : 1,
			color : "#c62f29"
		},
	{
        label : 511801,
	    value : 1,
	    color : "#3e95cd"
	},
    {
            label : 512101,
			value : 1,
			color : "#8e5ea2"
		},
        {
            label : 516301,
			value : 1,
			color : "#c62f29"
		},
        {
            label : 554850,
			value : 1,
			color : "#3cba9f"
		},
        {
            label : 556650,
			value : 3,
			color : "#e8c3b9"
		},
        {
            label : 557050,
			value : 1,
			color : "#c45850"
		},
        {
            label : 557250,
			value : 2,
			color: "#637b85"
		},
        {
            label : 563101,
			value : 1,
			color : "#2c9c69"
		},
        {
            label : 564050,
			value : 3,
			color : "#dbba34"
		},
        {
            label : 565250,
			value : 2,
			color : "#e8c3b9"
		}
	];
	var canvas = document.getElementById("hours");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Doughnut(data, options);

	var data = {
	    labels: ["565250", "565250", "563101", "557250", "557050", "556650", "556650", "554850", "516301", "512101", "511801", "511401", "109301", "109301", "109301", "109101"],
		datasets : [
			{
				fillColor : "rgba(99,123,133,0.4)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [.11, .87, 10.7, 2.4, 1.9, 1.5, 2.1, 2.4, .8, .8, .18, .51, .07, 1.03, .13, .14]
			},
			{
				fillColor : "rgba(219,186,52,0.4)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			},
		]
	}
	
	var canvas = document.getElementById("shipments");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Line(data, options);



	var data = {
	    labels: ["565250", "565250", "563101", "557250", "557050", "556650", "556650", "554850", "516301", "512101", "511801", "511401", "109301", "109301", "109301", "109101"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "#637b85",
				pointColor : "#dbba34",
				pointStrokeColor : "#637b85",
				data : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	}
	var canvas = document.getElementById("departments");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Radar(data, options);
}
size(true);

}());
