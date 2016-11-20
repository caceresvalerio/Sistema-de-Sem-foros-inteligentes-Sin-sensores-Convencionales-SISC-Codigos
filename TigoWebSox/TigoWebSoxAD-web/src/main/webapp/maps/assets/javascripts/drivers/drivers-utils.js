var DriverUtils = (function() {
	
	var $window = $(window);
	return{
		showDriverDetails: function(driverId){
			var driverList = $(".drivers-list");
				var driverDetails = driverList.next("div.col-md-6");

				driverList.removeClass("col-md-12");
				driverList.addClass("col-md-6");
				driverDetails.css("display","block");
		
			var ws = $window.driverWs;
			var message = ws.send("{'action':'select','target':'driver', 'query':'driver_id="+driverId+"'}");

			ws.send(message);
			ws.onmessage = function (evt){ 
		        var received_msg = evt.data;
		        var jsonData = JSON.parse(received_msg);
		        alert(received_msg);

				
		    };
			
		}
	}
})();