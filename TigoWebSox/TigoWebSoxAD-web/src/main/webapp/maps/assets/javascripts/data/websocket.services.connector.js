(function( $ ) {

	'use strict';

	var $window = $(window);

	/* Fix Map size on Mobile */
	function connect() {
		var jsonData = JSON.parse('{"Services":[{"service_id":1,"company_id":1,"from_location":"(65.96669994339966,-18.53329986333847)","client_feedback_id":null,"client_device_id":"001","status":2,"vehicle_type":null,"boarded_at":null,"relieved":null,"confirmed_at":"2014-08-24T15:05Z","arrived_at":null,"distance":null,"requested_at":"2014-08-24T15:05Z","to_address":null,"from_address":"Skíðabraut, Dalvík","to_location":null,"driver_id":2,"client_id":2,"address_note":" en apec","finished_at":null}]}');
		TableCreator.createTable(jsonData, "services");
	}

	// auto initialize
	$(function() {

		connect();

	});

}).apply(this, [ jQuery ]);