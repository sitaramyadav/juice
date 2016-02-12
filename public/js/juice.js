var juiceVDrinkName = function(){
	var juiceData=[];
	var dataArray =[];
	$.get('juice',function(data){
		data = JSON.parse(data)
		data.forEach(function(each){
			if(each.drinkName!='CTL')
				dataArray[each.drinkName]=(dataArray[each.drinkName]||0)+each.quantity;
		})
		var keys = Object.keys(dataArray);
		for(var key in keys){
			juiceData.push({'label':keys[key],'value':dataArray[keys[key]]})
		}
		d3BarGraph(juiceData)
	})
}

var d3BarGraph = function(data){
	console.log(data,'data')
	d3.selectAll('svg').remove();
	var height = 800;
	var width = 1500;
	var max = d3.max(data,function(d,i){return d.value});
	console.log(max,'max')
	var min = d3.min(data,function(d,i){return d.value});
	var svgContainer = d3.select('.graph')
					.append('svg')
					.attr('height',height)
					.attr('width',width);
	var scale = d3.scale.linear()
						.domain([0,max])
						.range([600,100]);
	var group = d3.selectAll('svg').append('g')
				.attr('id','juiceConsumed')
				.attr('class','graph');
	var lines = svgContainer.selectAll('line')
					.data(data)
					.enter()
					.append('line')
					.attr('x1',function(d,i){return (i*30)+50})
					.attr('x2',function(d,i){return (i*30)+50})
					.attr('y1',600)
					.attr('y2',function(d,i){return scale(d.value)})
					.attr('stroke','black')
					.attr('stroke-width',10)
					.on('mouseover',function(d,i){
						d3.select(this)
						.attr('stroke','red')
					})
					.on('mouseout',function(d,i){
						d3.select(this)
						.attr('stroke','black')
					})
	lines.append('svg:title')
		.text(function(d,i){return d.label+' '+d.value})

	var yAxis = d3.selectAll('g').append('line')
				.attr('x1',0)
				.attr('x2',0)
				.attr('y1',0)
				.attr('y2',600)
				.attr('stroke','black')
				.attr('stroke-width',10);						
	var XAxis = d3.selectAll('g').append('line')
				.attr('x1',0)
				.attr('x2',1400)
				.attr('y1',600)
				.attr('y2',600)
				.attr('stroke','black')
				.attr('stroke-width',2);
}

		