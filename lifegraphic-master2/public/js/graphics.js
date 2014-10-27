
var totalDataGraph = {
                  labels : ["|","|","|","|","|","|","|"],
                  datasets : [
                    {
                      fillColor : "rgba(0, 0, 0, 0)",
                      strokeColor : "rgba(159, 237, 139, 0.5)",
                      // strokeColor : "rgba(220,220,220,1)",
                      pointColor : "rgba(220,220,220,1)",
                      pointStrokeColor : "#fff",
                      data : [65,59,48,81,56,55,40]
                    },
                    {
                      fillColor : "rgba(0, 0, 0, 0)",
                      strokeColor : "rgba(255,0,0,0.3)",
                      // strokeColor : "rgba(220,220,220,1)",
                      pointColor : "rgba(220,220,220,1)",
                      pointStrokeColor : "#fff",
                      data : [65,80,71,81,56,55,40]
                    },
                    {
                      fillColor : "rgba(0, 0, 0, 0)",
                      strokeColor : "rgba(0, 141, 188, 0.5)",
                      // strokeColor : "rgba(220,220,220,1)",
                      pointColor : "rgba(220,220,220,1)",
                      pointStrokeColor : "#fff",
                      data : [65,40,48,32,47,55,40]
                    },
                    {
                      fillColor : "rgba(0, 0, 0, 0)",
                      strokeColor : "rgba(255, 200, 0, 0.5)",
                      // strokeColor : "rgba(0, 0, 0, 0.5)",
                      pointColor : "rgba(220,220,220,1)",
                      pointStrokeColor : "#fff",
                      data : [65,59,48,41,56,55,40]
                    }
                  ]
                }

  var dataGraphHealth = {
                labels : ["|","|","|","|","|","|","|"],
                datasets : [
                  {
                    fillColor : "rgba(159, 237, 139, 0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,48,81,56,55,40]
                  }
                ]
              }


  var dataGraphLove = {
                labels : ["|","|","|","|","|","|","|"],
                datasets : [
                  {
                    fillColor : "rgba(255,0,0,0.3)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,80,71,81,56,55,40]
                  }
                ]
              }            

  var dataGraphAssets = {
                labels : ["|","|","|","|","|","|","|"],
                datasets : [
                  {
                    fillColor : "rgba(0, 141, 188, 0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,40,48,32,47,55,40]
                  }
                ]
              }            

  var dataGraphMood = {
                labels : ["|","|","|","|","|","|","|"],
                datasets : [
                  {
                    fillColor : "rgba(255, 200, 0, 0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,48,41,56,55,40]
                  }
                ]
              }            
              
  var optionsGraph = {
      //Boolean - If we show the scale above the chart data     
      scaleOverlay : false,
      
      //Boolean - If we want to override with a hard coded scale
      scaleOverride : false,
      
      //** Required if scaleOverride is true **
      //Number - The number of steps in a hard coded scale
      scaleSteps : null,
      //Number - The value jump in the hard coded scale
      scaleStepWidth : null,
      //Number - The scale starting value
      scaleStartValue : null,

      //String - Colour of the scale line 
      scaleLineColor : "rgba(0,0,0,.1)",
      
      //Number - Pixel width of the scale line  
      scaleLineWidth : 1,

      //Boolean - Whether to show labels on the scale 
      scaleShowLabels : true,
      
      //Interpolated JS string - can access value
      scaleLabel : "<%=value%>",
      
      //String - Scale label font declaration for the scale label
      scaleFontFamily : "'Arial'",
      
      //Number - Scale label font size in pixels  
      scaleFontSize : 12,
      
      //String - Scale label font weight style  
      scaleFontStyle : "normal",
      
      //String - Scale label font colour  
      scaleFontColor : "#999",  
      
      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : true,
      
      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",
      
      //Number - Width of the grid lines
      scaleGridLineWidth : 1, 
      
      //Boolean - Whether the line is curved between points
      bezierCurve : true,
      
      //Boolean - Whether to show a dot for each point
      pointDot : true,
      
      //Number - Radius of each point dot in pixels
      pointDotRadius : 3,
      
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,
      
      //Boolean - Whether to show a stroke for datasets
      datasetStroke : true,
      
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,
      
      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,
      
      //Boolean - Whether to animate the chart
      animation : true,

      //Number - Number of animation steps
      animationSteps : 100,
      
      //String - Animation easing effect
      animationEasing : "easeOutQuart",

      //Function - Fires when the animation is complete
      onAnimationComplete : null
  }

  var Love = document.getElementById("historyGraphCanvasLove");
  var Health = document.getElementById("historyGraphCanvasHealth");
  var Assets = document.getElementById("historyGraphCanvasAssets");
  var Mood = document.getElementById("historyGraphCanvasMood");

  if(Health) {
    var graphHealth = Health.getContext("2d");
    var myGraphHealth = new Chart(graphHealth).Line(dataGraphHealth, optionsGraph);
  } else if (Love) {
    var graphLove = Love.getContext("2d");
    var myGraphLove = new Chart(graphLove).Line(dataGraphLove, optionsGraph);
  } else if (Assets) {
    var graphAssets = Assets.getContext("2d");
    var myGraphAssets = new Chart(graphAssets).Line(dataGraphAssets, optionsGraph);
  } else if (Mood) {
    var graphMood = Mood.getContext("2d");
    var myGraphMood = new Chart(graphMood).Line(dataGraphMood, optionsGraph);
  }
  
  var optionsPie = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    
    //Number - The width of each segment stroke
    segmentStrokeWidth : 0,
    
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 66,
    
    //Boolean - Whether we should animate the chart 
    animation : true,
    
    //Number - Amount of animation steps
    animationSteps : 100,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",
    
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    
    //Function - Will fire on animation completion.
    onAnimationComplete : null
  }


  var doughnutDataLove = [
      {
        value: loveValue,
        color:"#FF9999"
      },
      {
        value : 100-loveValue,
        color : "#aaa"
      }
  ];

  var doughnutDataHealth = [
      {
        value: healthValue,
        color:"#00CC33"
      },
      {
        value : 100-healthValue,
        color : "#aaa"
      }
  ];

  var doughnutDataAssets = [
      {
        value: assetsValue,
        color:"#3399CC"
      },
      {
        value : 100-assetsValue,
        color : "#aaa"
      }
  ];

  var doughnutDataMood = [
      {
        value: moodValue,
        color:"#FFCC00"
      },
      {
        value : 100-moodValue,
        color : "#aaa"
      }
  ];

  if(document.getElementsByTagName("canvas").length > 0) {
    var myDoughnut1 = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutDataLove, optionsPie);
    var myDoughnut2 = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutDataHealth, optionsPie);
    var myDoughnut3 = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutDataAssets, optionsPie);
    var myDoughnut4 = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutDataMood, optionsPie);
  }


  var opts = {
    lines: 12, // The number of lines to draw
    angle: 0.11, // The length of each line
    lineWidth: 0.42, // The line thickness
    pointer: {
      length: 0.74, // The radius of the inner circle
      strokeWidth: 0.044, // The rotation offset
      color: '#000000' // Fill color
    },
    percentColors: [[0.0, "#FF0000" ], [0.50, "#FFFF00"], [1.0, "#00FF00"]],
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#00CC33',   // Colors
    colorStop: '#00CC33',    // just experiment with them
    strokeColor: '#E0E0E0',   // to see which ones work best for you
    generateGradient: true
  };

  if(document.getElementsByTagName('canvas').length > 0) {
    var target = document.getElementById('canvasTotal'); // your canvas element
    var gaugeValue = (loveValue+healthValue+assetsValue+moodValue)/4;
    if(gaugeValue == 0) {
      opts.angle = 0.15;
      opts.pointer.length = 0.74;
      opts.pointer.strokeWidth = 0.044;
      opts.lineWidth = 0.42;
    }
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 28; // set animation speed (32 is default value)
    gauge.set(gaugeValue); // set actual value    

    var totalCatgraph = document.getElementById("totalCanvasGraph").getContext("2d");
    var TotalGraph = new Chart(totalCatgraph).Line(totalDataGraph, optionsGraph);
  }

  jQuery.fn.darken = function() {
      $(this).each(function() {
        var darkenPercent = 15; // darken color by 15 percent
        var rgb = $(this).css('background-color');
        rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
        var red = $.trim(rgb[0]);
        var green = $.trim(rgb[1]);
        var blue = $.trim(rgb[2]);
        // darken
        red = parseInt(red * (100 - darkenPercent) / 100);
        green = parseInt(green * (100 - darkenPercent) / 100);
        blue = parseInt(blue * (100 - darkenPercent) / 100);
        // lighten
        /* red = parseInt(red * (100 - darkenPercent) / 100);
        green = parseInt(green * (100 - darkenPercent) / 100);
        blue = parseInt(blue * (100 - darkenPercent) / 100); */
        rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        $(this).css('background-color', rgb);
      });
 }     

  $(window).load(function(){
    $("ol.progtrckr").each(function(){
        $(this).attr("data-progtrckr-steps", 
                     $(this).children("li").length);
    });
    $("ol.progtrckr").show();
  });

  $(document).ready(function() {

    var rateButton = $('div.rateButtons button');
    var originalRGB = rateButton.css('background-color');
    rateButton.on('click', function() {
      rateButton.css({
        'font-weight': 'normal',
        'border' : 'none none',
        'background-color' : originalRGB
      });
      $(this).css({
        'font-weight': 'bold',
      });
      $(this).darken();
      if($(this).hasClass('rateValue1')) {
        $('input.catValue').val(20);
      } else if($(this).hasClass('rateValue2')) {
        $('input.catValue').val(40);
      } else if($(this).hasClass('rateValue3')) {
        $('input.catValue').val(60);
      } else if($(this).hasClass('rateValue4')) {
        $('input.catValue').val(80);
      } else {
        $('input.catValue').val(100);
      }
    });

    $('button.submit_button').on('click', function() {
      $('form.categoryForm').submit();
    });

      (function(){
        if(numberOfSubmissions > 0) {
          for(var i = 0; i < numberOfSubmissions; i++) {
            var basicSelector = 'ol.progtrckr li';
            var selector = basicSelector.concat(':nth-child(', i+1, ')');
            $(selector).removeClass('progtrckr-todo').addClass('progtrckr-done');
          }
        }
      })() 

  });

  