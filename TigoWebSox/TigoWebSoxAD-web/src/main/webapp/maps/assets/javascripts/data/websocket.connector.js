(function( $ ) {

	'use strict';

	var $window = $(window);

	/* Fix Map size on Mobile */
	function connect() {
		if ("WebSocket" in window){
			var ws = new WebSocket("ws://162.243.152.220:8080/drtaxi-ccgateway/query?username=userName1&password=password1&companyid=1");
		     ws.onopen = function()
		     {
		        alert("Message is sent...");
				new PNotify({
					title: 'Conexion Establecida',
					text: 'Bienvenido al Sistema DR-Taxi',
					type: 'success'
				});
		     };
		     ws.onmessage = function (evt) 
		     { 
		        var received_msg = evt.data;
		        alert("Message is received...");
		     };
		     ws.onclose = function()
		     { 
		        new PNotify({
					title: 'Conexion cerrada',
					text: 'Se ha cerrado la conexion con el servidor, o la misma no ha podido ser establecida.',
					type: 'info'
				});
		     };
		  }
		  else
		  {
		     new PNotify({
				title: 'Error de Conexion',
				text: 'El navegador que esta utilizando no es compatible.',
				type: 'error'
			});
		  }

	}

	// auto initialize
	$(function() {

		connect();

	});

}).apply(this, [ jQuery ]);