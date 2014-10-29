var getDefaultData = function(override) {
    var defaultData = {
        fillColor : "rgba(0, 0, 0, 0)",
        strokeColor : "rgba(159, 237, 139, 0.5)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,48,81,56,55,40]
    };
    return $.extend(defaultData, override);
};

var labels = ["|","|","|","|","|","|","|"];

var dataGraphs = {
    health: {
        labels : labels,
        datasets : [getDefaultData({fillColor : "rgba(159, 237, 139, 0.5)", strokeColor : "rgba(220,220,220,1)"})]
    },
    love: {
        labels : labels,
        datasets : [getDefaultData({fillColor : "rgba(255,0,0,0.3)", strokeColor : "rgba(220,220,220,1)", data : [65,80,71,81,56,55,40]})]
    },
    assets: {
        labels : labels,
        datasets : [getDefaultData({fillColor : "rgba(0, 141, 188, 0.5)", strokeColor : "rgba(220,220,220,1)", data : [65,40,48,32,47,55,40]})]
    },
    mood: {
        labels : labels,
        datasets : [getDefaultData({fillColor : "rgba(255, 200, 0, 0.5)", strokeColor : "rgba(220,220,220,1)", data : [65,59,48,41,56,55,40]})]
    },
    totalData: {
    labels : labels,
    datasets : [
      getDefaultData(),
      getDefaultData({strokeColor : "rgba(255,0,0,0.3)", data : [65,80,71,81,56,55,40]}),
      getDefaultData({strokeColor : "rgba(0, 141, 188, 0.5)", data : [65,40,48,32,47,55,40]}),
      getDefaultData({ strokeColor : "rgba(255, 200, 0, 0.5)", data : [65,59,48,41,56,55,40]})
    ]}
};
              
var optionsGraph = {
    scaleFontColor : "#999",  
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    animationSteps : 100
};

var love = $("#historyGraphCanvasLove");
var health = $("#historyGraphCanvasHealth");
var assets = $("#historyGraphCanvasAssets");
var mood = $("#historyGraphCanvasMood");

if(health.length) {
  var graphHealth = health[0].getContext("2d");
  var myGraphHealth = new Chart(graphHealth).Line(dataGraphs.health, optionsGraph);
} else if (love.length) {
  var graphLove = love[0].getContext("2d");
  var myGraphLove = new Chart(graphLove).Line(dataGraphs.love, optionsGraph);
} else if (assets.length) {
  var graphAssets = assets[0].getContext("2d");
  var myGraphAssets = new Chart(graphAssets).Line(dataGraphs.assets, optionsGraph);
} else if (mood.length) {
  var graphMood = mood[0].getContext("2d");
  var myGraphMood = new Chart(graphMood).Line(dataGraphs.mood, optionsGraph);
};

var optionsPie = {
  segmentStrokeWidth : 0,
  percentageInnerCutout : 66,
  animationEasing : "easeOutQuart",
  animateScale : true
};

var doughnutData = {
    love: [{
          value: loveValue,
          color:"#FF9999"
        }, {
          value : 100-loveValue,
          color : "#aaa"
    }],
    health: [{
          value: healthValue,
          color:"#00CC33"
        }, {
          value : 100-healthValue,
          color : "#aaa"
    }],
    assets: [{
          value: assetsValue,
          color:"#3399CC"
        }, {
          value : 100-assetsValue,
          color : "#aaa"
    }],
    mood: [{
          value: moodValue,
          color:"#FFCC00"
        }, {
          value : 100-moodValue,
          color : "#aaa"
    }]
};

if($("canvas").length) {
  var myDoughnut1 = new Chart($("#canvas1")[0].getContext("2d")).Doughnut(doughnutData.love, optionsPie);
  var myDoughnut2 = new Chart($("#canvas2")[0].getContext("2d")).Doughnut(doughnutData.health, optionsPie);
  var myDoughnut3 = new Chart($("#canvas3")[0].getContext("2d")).Doughnut(doughnutData.assets, optionsPie);
  var myDoughnut4 = new Chart($("#canvas4")[0].getContext("2d")).Doughnut(doughnutData.mood, optionsPie);
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

if($('canvas').length) {
  var target = document.getElementById('canvasTotal'); // your canvas element
  var gaugeValue = (loveValue + healthValue + assetsValue + moodValue)/4;
  if (gaugeValue === 0) {
    opts.angle = 0.15;
    opts.pointer.length = 0.74;
    opts.pointer.strokeWidth = 0.044;
    opts.lineWidth = 0.42;
  }
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.animationSpeed = 28; // set animation speed (32 is default value)
  gauge.set(gaugeValue); // set actual value    

  var totalCatgraph = $("#totalCanvasGraph")[0].getContext("2d");
  var TotalGraph = new Chart(totalCatgraph).Line(dataGraphs.totalData, optionsGraph);
}

$.fn.darken = function() {
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
      rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
      $(this).css('background-color', rgb);
    });
};

$(function(){
    $("ol.progtrckr").each(function(){
        $(this).attr("data-progtrckr-steps", 
                     $(this).children("li").length);
    });

    $("ol.progtrckr").show();
  
    var rateButton = $('div.rateButtons button');
    var originalRGB = rateButton.css('background-color');
    rateButton.on('click', function() {
        rateButton.css({
          'font-weight': 'normal',
          'border' : 'none none',
          'background-color' : originalRGB
        });
        $(this).css({
          'font-weight': 'bold'
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

    $('button.submit_button').click(function() {
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
    })();
});
