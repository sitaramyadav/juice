var tryout = function(){
		var dataArray=[10,40,50,60];
		// var dataArray = [{drinkName:'Apple',quantity:10},{drinkName:'Mausambi',quantity:40},{drinkName:'Orange',quantity:50},{drinkName:'Banana',quantity:60}]
		var width = 500;
		var height = 500;
		var widthScale = d3.scale.linear()
							.domain([0,60])
							.range([0,width]);
		var color = d3.scale.linear()
					.domain([0,60])
					.range(['red','blue']);							
		var canvas = d3.select('body')
				.append('svg')
				.attr('width',width)
				.attr('height',height)
				.append('g')
				.attr('transform','translate(20,0)')
		var bars = canvas.selectAll('rect')
				.data(dataArray)
				.enter()
					.append('rect')
					.attr('width',function(d){return widthScale(d.quantity);})			
					.attr('height',50)
					.attr('fill',function(d){return color(d.quantity);})
					.attr('y',function(dataElement,index){return index*100});
					// .attr('x',0);
		var text = canvas.selectAll('text')
					.data(dataArray)
					.enter()
						.append('text')
						.attr('x',function(d,i){return (d/10)+5})
						.attr('y',function(d,i){return (i*20)+15})
						.attr('fill','red')
						.text(function(d){return d});				
		canvas.append("g")
				.attr('transform','translate(0,400)')
    			.call(d3.svg.axis()
                .scale(widthScale)
                .orient("bottom"));
}();
		