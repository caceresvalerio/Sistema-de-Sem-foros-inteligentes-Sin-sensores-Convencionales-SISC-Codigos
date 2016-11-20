(function( $ ) {

	'use strict';

	var $window = $(window);
	var queryString = "ws://162.243.152.220:8080/drtaxi-ccgateway/query?username=userName1&password=password1&companyid=1";
	var ws;
	var closeFunction = function(){
		new PNotify({
			title: 'Conexion cerrada',
			text: 'Se ha cerrado la conexion con el servidor, o la misma no ha podido ser establecida.',
			type: 'info'
		});
	};
	var openFunction = function(){
		ws.send("{'action':'select','target':'driver'}");
	};

	/* Fix Map size on Mobile */
	function connect() {
		var jsonData = JSON.parse('{"drivers":[{"driver_id":1,"unit_number":1,"name":"Wilson","last_name":"Garcia","driver_status_type_id":"1"}]}');
		TableCreator.createTable(jsonData, "drivers");
		if(ws == null){
			ws = WebsocketConnector.connect(queryString, openFunction, closeFunction);
			$window.driverWs = ws;
			ws.onmessage = function (evt){ 
				var received_msg = evt.data;
		        var jsonData = JSON.parse(received_msg);
				TableCreator.createTable(jsonData, "drivers");
			};
		}
		
	}

	// auto initialize
	$(function() {

		connect();

	});

}).apply(this, [ jQuery ]);