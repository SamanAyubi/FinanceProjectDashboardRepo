var chart = AmCharts.makeChart("chartdiv2", {
	"type": "serial",
     "theme": "light",
	"categoryField": "year",
	//"rotate": true,
	"startDuration": 1,
	 balloon: {
         adjustBorderColor: true,
         horizontalPadding: 10,
         verticalPadding: 4,
         borderThickness:1,
         fillColor:"#ffffff",
         borderAlpha:0 ,
         cornerRadius:5,
         fillAlpha:2
         
      },	
      autoDisplay:true,
      legend :
     	{
     	align:'left',
		    position:'top',
		    textClickEnabled: false,
		    switchable:false,
		    valueText:'',
		    fontFamily: "Roboto-Medium",
		    fontSize:12,
      textColor:'#3D4850'
		  
	   },
	  valueAxes: [{
        axisColor:"#fff",
        align:'left',
        gridColor:"#95a0a3",
        color:'#000000',
        fontSize:11,
        fontFamily:"Roboto-Regular",
        boldLabel:true,
	  }],
	  columnSpacing:0,
      columnWidth: 0.5,
	"graphs": [
		{
			"balloonText": "Income:[[value]]",
			"fillAlphas": 0.8,
			"id": "AmGraph-1",
			//"lineAlpha": 0.2,
			"title": "Income",
			"type": "column",
			"valueField": "income"
		},
		{
			"balloonText": "Expenses:[[value]]",
			"fillAlphas": 0.8,
			"id": "AmGraph-2",
			//"lineAlpha": 0.2,
			"title": "Expenses",
			"type": "column",
			"valueField": "expenses"
		}
	],
	
	"dataProvider": [
		{
			"year": 2005,
			"income": 23.5,
			"expenses": 18.1
		},
		{
			"year": 2006,
			"income": 26.2,
			"expenses": 22.8
		},
		{
			"year": 2007,
			"income": 30.1,
			"expenses": 23.9
		},
		{
			"year": 2008,
			"income": 29.5,
			"expenses": 25.1
		},
		{
			"year": 2009,
			"income": 24.6,
			"expenses": 25
		}
	],
    "export": {
    	"enabled": true
     }

});

<!-- Chart code -->
/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "chartdiv1", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "latitude": 55.6763,
      "longitude": 12.5681
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Peking",
      "latitude": 39.9056,
      "longitude": 116.3958
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823,
      "url": "http://www.google.co.jp"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ankara",
      "latitude": 39.9439,
      "longitude": 32.8560
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Buenos Aires",
      "latitude": -34.6118,
      "longitude": -58.4173
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brasilia",
      "latitude": -15.7801,
      "longitude": -47.9292
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ottawa",
      "latitude": 45.4235,
      "longitude": -75.6979
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Kinshasa",
      "latitude": -4.3369,
      "longitude": 15.3271
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pretoria",
      "latitude": -25.7463,
      "longitude": 28.1876
    } ]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
																			
    $(document).ready(function(){
        $(".add-row").click(function(){
            var Product = $("#Product").val();
            var Jan = $("#Jan").val();
            var Feb = $("#Feb").val();
            var Mar = $("#Mar").val();
            var Apr = $("#Apr").val();
            var May = $("#May").val();
            var Jun = $("#Jun").val();
            var Change = Math.abs(parseFloat($("#May").val()) - parseFloat($("#Jun").val()));
            var riskColorClass = "";
            if(Change >= 50){
            	riskColorClass = "led-red";
            }else if(Change < 50 && Change >= 15){
            	riskColorClass = "led-yellow";
            }else if(Change < 15){
            	riskColorClass = "led-green";
            }
            
            if($.isNumeric(Jan) && $.isNumeric(Feb) && $.isNumeric(Mar) && $.isNumeric(Apr) && $.isNumeric(May) && $.isNumeric(Jun)){
                var markup = "<tr>"
                                +"<td><input type='checkbox' class='checkBoxClass' name='record'></td>"
                                +"<td>" + Product + "</td>"
                                +"<td>" + Jan + "</td>"
                                +"<td>" + Feb + "</td>"
                                +"<td>" + Mar + "</td>"
                                +"<td>" + Apr + "</td>"
                                +"<td>" + May + "</td>"
                                +"<td>" + Jun + "</td>"
                                +"<td>" + Change + "</td>"
                                +"<td><div class='led-box'><div class='"+riskColorClass+"'></div></div></td>"
                                +"<td>"
                                    +"<a href='#' class='view-graph btn a-btn-slide-text' data-toggle='modal' data-target='#myModal'>"
                                        +"<span class='glyphicon glyphicon-eye-open' aria-hidden='true'></span>"
                                        +"<span><strong>View</strong></span>"
                                    +"</a>"
                                +"</td>"
                             +"</tr>";
                $("table tbody").append(markup);
        	}else{
                alert("Invalid Inputs!!!");            
            }
            clearInputs();
        });
        
        function clearInputs(){
            $("#Product").val("");
            $("#Jan").val("");
            $("#Feb").val("");
            $("#Mar").val("");
            $("#Apr").val("");
            $("#May").val("");
            $("#Jun").val("");
        }
        
       $("#ckbCheckAll").click(function () {
        	$(".checkBoxClass").prop('checked', $(this).prop('checked'));
    	});
        
        $(document).on('click', '.view-graph', function(){
            var data = [];
            $(this).parents("tr").find('td').each (function() {
               data.push($(this).text()); 
            }); 
	   $(".modal-title").text(data[1]+" Profit Graph");
           chart.dataProvider = [];
                var productData = [{
                "month": 'January',
                "income": data[2]
            }, {
                "month": 'February',
                "income": data[3]
            }, {
                "month": 'March',
                "income": data[4]
            }, {
                "month": 'April',
                "income": data[5]
            }, {
                "month": 'May',
                "income": data[6]
            }, {
                "month": 'June',
                "income": data[7]
            }];
        	chart.dataProvider = productData;
        	chart.validateData();
    	});
        
        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    }); 
    
    var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    colors:['#07bebf'],
    "dataProvider": [],
    "valueAxes": [{
        "title": "Income in millions, USD",
    }],
    "graphs": [{
        "balloonText": "Income in [[category]]:[[value]]",
        "fillAlphas": 1,
        "lineAlpha": 0.2,
        "title": "Income",
        "type": "column",
        "valueField": "income"
    }],
    "depth3D": 20,
    "angle": 30,
    "rotate": true,
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left"
    },
    "export": {
    	"enabled": true
     }
});

