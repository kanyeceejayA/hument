//[Dashboard Javascript]

//Project:	Aries Admin - Responsive Admin Template
//Last change:  25/11/2017
//Primary use:   Used only for the main dashboard (index.html)



$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

		
// donut chart
		$('.donut').peity('donut');

// chart
	$("#linechart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
			type: 'line',
			width: '100',
			height: '38',
			lineColor: '#06d79c',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#0fc491',
			maxSpotColor: '#0fc491',
		});
		
		$("#barchart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
			type: 'bar',
			height: '38',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#e9ab2e',
		});
		$("#discretechart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
			type: 'discrete',
			width: '50',
			height: '38',
			lineColor: '#745af2',
		});
		// $("#baralc").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
		// 	type: 'bar',
		// 	height: '80',
		// 	width: '500',
		// 	barWidth: 6,
		// 	barSpacing: 4,
		// 	barColor: '#e9ab2e',
		// });

		

	    $("#lineIncrease").sparkline([1,8,6,5,6,8,7,9,7,8,10,16,14,10], {
			type: 'line',
			width: '100%',
			height: '140',
			lineWidth: 2,
			lineColor: '#ffffff',
			fillColor: "#398bf7",
			spotColor: '#ffffff',
			minSpotColor: '#ffffff',
			maxSpotColor: '#ffffff',
			spotRadius: 3,
		});
		$("#linearea").sparkline([1,3,5,4,6,8,7,9,7,8,10,16,14,10], {
			type: 'line',
			width: '100%',
			height: '80',
			lineColor: '#06d79c',
			fillColor: '#06d79c',
			lineWidth: 2,
		});
	
	// Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016',
            enrolled: 80,
            completed: 70,
            passed: 65
        }, {
            period: '2017',
            enrolled: 90,
            completed: 83,
            passed: 80
        }, {
            period: '2018',
            enrolled: 100,
            completed: 99,
            passed: 98
        }, {
            period: '2019',
            enrolled: 100,
            completed: 100,
            passed: 99
        }, {
            period: '2020',
            enrolled: 98,
            completed: 90,
            passed: 87
        }, {
            period: '2021',
            enrolled: 105,
            completed: 100,
            passed: 98
        },
         {
            period: '2022',
            enrolled: 150,
            completed: 120,
            passed: 119
        }],
        xkey: 'period',
        ykeys: ['enrolled', 'completed', 'passed'],
        labels: ['enrolled', 'completed', 'passed'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#00bfc7', '#fb9678', '#9675ce'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#00bfc7', '#fb9678', '#9675ce'],
        resize: true
        
    });
//--------------
		//- AREA CHART -
		//--------------

 // Get context with jQuery - using jQuery's .get() method.
		var areaChartCanvas = $('#areaChart').get(0).getContext('2d')
		// This will get the first returned node in the jQuery collection.
		var areaChart       = new Chart(areaChartCanvas)

		var areaChartData = {
		  labels  : ['0', '4', '8', '12', '16', '20', '24', '30', '16', '20', '24', '30', '34', '38', '42', '46', '50', '54'],
		  datasets: [
			{
			  label               : 'Avg. Cases Opened',
			  fillColor           : 'rgb(233 171 46 / 30%)',
			  strokeColor         : 'rgb(233 171 46)',
			  pointColor          : 'rgb(233 171 46)',
			  pointStrokeColor    : 'rgb(233 171 46)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgb(233 171 46)',
			  data                : [14, 4, 6, 17, 5, 10, 14, 15, 14, 17, 29, 26, 30, 16, 37, 31, 44, 52]
			},
			{
			  label               : 'Avg. Cases Closed',
			  fillColor           : 'rgba(38,198,218,0.7)',
			  strokeColor         : 'rgba(38,198,218,0)',
			  pointColor          : 'rgba(38,198,218)',
			  pointStrokeColor    : 'rgba(38,198,218,0.5)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(38,198,218,1)',
			  data                : [8, 3, 4, 14, 13, 5, 17, 24, 24, 45, 27, 20, 28, 13, 34, 48, 31, 50]
			}
		  ]
		}

		var areaChartOptions = {
		  //Boolean - If we should show the scale at all
		  showScale               : true,
		  //Boolean - Whether grid lines are shown across the chart
		  scaleShowGridLines      : true,
		  //String - Colour of the grid lines
		  scaleGridLineColor      : 'rgba(0,0,0,.05)',
		  //Number - Width of the grid lines
		  scaleGridLineWidth      : 1,
		  //Boolean - Whether to show horizontal lines (except X axis)
		  scaleShowHorizontalLines: true,
		  //Boolean - Whether to show vertical lines (except Y axis)
		  scaleShowVerticalLines  : true,
		  //Boolean - Whether the line is curved between points
		  bezierCurve             : true,
		  //Number - Tension of the bezier curve between points
		  bezierCurveTension      : 0.5,
		  //Boolean - Whether to show a dot for each point
		  pointDot                : true,
		  //Number - Radius of each point dot in pixels
		  pointDotRadius          : 1,
		  //Number - Pixel width of point dot stroke
		  pointDotStrokeWidth     : 1,
		  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		  pointHitDetectionRadius : 20,
		  //Boolean - Whether to show a stroke for datasets
		  datasetStroke           : true,
		  //Number - Pixel width of dataset stroke
		  datasetStrokeWidth      : 0,
		  //Boolean - Whether to fill the dataset with a color
		  datasetFill             : true,
		  //String - A legend template
		  legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		  //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		  maintainAspectRatio     : true,
		  //Boolean - whether to make the chart responsive to window resizing
		  responsive              : true
		};
		
		//Create the line chart
		areaChart.Line(areaChartData, areaChartOptions);

		


}); // End of use strict


$(function () {

	'use strict';
  
	$(function () {

		//-------------
		//- BAR CHART -
		//-------------
		
		// Get context with jQuery - using jQuery's .get() method.
		var barChartCanvas = $('#baralc canvas').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var barChart            = new Chart(barChartCanvas);

		var barChartData = {
		  labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		  datasets: [
			{
			  label               : 'Electronics',
			  fillColor           : 'rgba(38,198,218,1)',
			  strokeColor         : 'rgba(38,198,218,0)',
			  pointColor          : '#06d79c',
			  pointStrokeColor    : 'rgba(38,198,218,0)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(38,198,218,1)',
			  data                : [5, 4, 3, 7, 5, 10, 3]
			}
		  ]
		};
		
		
		var barChartOptions                  = {
		  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		  scaleBeginAtZero        : true,
		  //Boolean - Whether grid lines are shown across the chart
		  scaleShowGridLines      : true,
		  //String - Colour of the grid lines
		  scaleGridLineColor      : 'rgba(0,0,0,.05)',
		  //Number - Width of the grid lines
		  scaleGridLineWidth      : 1,
		  //Boolean - Whether to show horizontal lines (except X axis)
		  scaleShowHorizontalLines: true,
		  //Boolean - Whether to show vertical lines (except Y axis)
		  scaleShowVerticalLines  : true,
		  //Boolean - If there is a stroke on each bar
		  barShowStroke           : true,
		  //Number - Pixel width of the bar stroke
		  barStrokeWidth          : 2,
		  //Number - Spacing between each of the X value sets
		  barValueSpacing         : 30,
		  //Number - Spacing between data sets within X values
		  barDatasetSpacing       : 1,
		  //String - A legend template
		  legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		  //Boolean - whether to make the chart responsive
		  responsive              : true,
		  maintainAspectRatio     : true
		};

		barChartOptions.datasetFill = false,
		barChart.Bar(barChartData, barChartOptions);
	});
}); // End of use strict
