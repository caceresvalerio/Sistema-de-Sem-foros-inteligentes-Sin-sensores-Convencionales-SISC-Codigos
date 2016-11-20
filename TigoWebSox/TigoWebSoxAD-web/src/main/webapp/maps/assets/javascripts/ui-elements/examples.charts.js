/*
Name: 			UI Elements / Charts - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.1.0
*/

(function( $ ) {

	'use strict';

	
	/*
	Gauge: Basic
	*/
	(function() {
		var target = $('#gaugeBasic'),
			opts = $.extend(true, {}, {
				lines: 12, // The number of lines to draw
				angle: 0.12, // The length of each line
				lineWidth: 0.5, // The line thickness
				pointer: {
					length: 0.7, // The radius of the inner circle
					strokeWidth: 0.05, // The rotation offset
					color: '#444' // Fill color
				},
				limitMax: 'true', // If true, the pointer will not go past the end of the gauge
				colorStart: '#0088CC', // Colors
				colorStop: '#0088CC', // just experiment with them
				strokeColor: '#F1F1F1', // to see which ones work best for you
				generateGradient: true
			}, target.data('plugin-options'));

			var gauge = new Gauge(target.get(0)).setOptions(opts);

		gauge.maxValue = opts.maxValue; // set max gauge value
		gauge.animationSpeed = 32; // set animation speed (32 is default value)
		gauge.set(opts.value); // set actual value
		gauge.setTextField(document.getElementById("gaugeBasicTextfield"));
	})();

	/*
	Gauge: Alternative
	*/
	(function() {
		var target = $('#gaugeAlternative'),
			opts = $.extend(true, {}, {
				lines: 12, // The number of lines to draw
				angle: 0.12, // The length of each line
				lineWidth: 0.5, // The line thickness
				pointer: {
					length: 0.7, // The radius of the inner circle
					strokeWidth: 0.05, // The rotation offset
					color: '#444' // Fill color
				},
				limitMax: 'true', // If true, the pointer will not go past the end of the gauge
				colorStart: '#2BAAB1', // Colors
				colorStop: '#2BAAB1', // just experiment with them
				strokeColor: '#F1F1F1', // to see which ones work best for you
				generateGradient: true
			}, target.data('plugin-options'));

			var gauge = new Gauge(target.get(0)).setOptions(opts);

		gauge.maxValue = opts.maxValue; // set max gauge value
		gauge.animationSpeed = 32; // set animation speed (32 is default value)
		gauge.set(opts.value); // set actual value
		gauge.setTextField(document.getElementById("gaugeAlternativeTextfield"));
	})();

	/*
	Liquid Meter
	*/
	$('#meter').liquidMeter({
		shape: 'circle',
		color: '#0088CC',
		background: '#F9F9F9',
		fontSize: '24px',
		fontWeight: '600',
		stroke: '#F2F2F2',
		textColor: '#333',
		liquidOpacity: 0.9,
		liquidPalette: ['#333'],
		speed: 3000,
		animate: !$.browser.mobile
	});

	/*
	Liquid Meter Dark
	*/
	$('#meterDark').liquidMeter({
		shape: 'circle',
		color: '#0088CC',
		background: '#272A31',
		stroke: '#33363F',
		fontSize: '24px',
		fontWeight: '600',
		textColor: '#FFFFFF',
		liquidOpacity: 0.9,
		liquidPalette: ['#0088CC'],
		speed: 3000,
		animate: !$.browser.mobile
	});

	/*
	Sparkline: Line
	*/
	$("#sparklineLine").sparkline(sparklineLineData, {
		type: 'line',
		width: '80',
		height: '30',
		lineColor: '#0088cc'
	});

	/*
	Sparkline: Bar
	*/
	$("#sparklineBar").sparkline(sparklineBarData, {
		type: 'bar',
		width: '80',
		height: '30',
		barColor: '#0088cc',
		negBarColor: '#B20000'
	});

	/*
	Sparkline: Tristate
	*/
	$("#sparklineTristate").sparkline(sparklineTristateData, {
		type: 'tristate',
		width: '80',
		height: '30',
		posBarColor: '#0088cc',
		negBarColor: '#B20000'
	});

	/*
	Sparkline: Discrete
	*/
	$("#sparklineDiscrete").sparkline(sparklineDiscreteData, {
		type: 'discrete',
		width: '80',
		height: '30',
		lineColor: '#0088cc'
	});

	/*
	Sparkline: Bullet
	*/
	$("#sparklineBullet").sparkline(sparklineBulletData, {
		type: 'bullet',
		width: '80',
		height: '30',
		targetColor: '#ff7f00',
		performanceColor: '#0088cc'
	});

	/*
	Sparkline: Pie
	*/
	$("#sparklinePie").sparkline(sparklinePieData, {
		type: 'pie',
		height: '30',
		barColor: '#0088cc'
	});

}).apply( this, [ jQuery ]);