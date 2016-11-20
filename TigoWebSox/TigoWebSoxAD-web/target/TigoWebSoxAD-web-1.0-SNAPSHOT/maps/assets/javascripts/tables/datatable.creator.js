var TableCreator = (function() {
	function createServicesTable(jsonData){
	
		var headers = ["service_id", "client_id", "driver_id", "requested_at", "status", "confirmed_at", "from_address", "address_note", "requested_at"]
		var $table = $('#datatable-details');
		var $tableBody = $("<tbody></tbody>");
		var services = jsonData.Services
		
		for(var index = 0; index < services.length; index++){
			var service = jsonData.Services[index];
			
			var tableRow = $("<tr></tr>").addClass("gradeX");
			headers.forEach(function(entry, value) {
				if (service.hasOwnProperty(entry)) {
					var tableDetail = $("<td></td>").text(service[entry]);
					
					if(value > 2){
						tableDetail.addClass("center");
					}
					if(value > 8){
						tableDetail.css("display","none");
					}
					tableRow.append(tableDetail);
				}
			});
			$tableBody.append(tableRow);
		}
		
		$table.append($tableBody);
	}
	
	function createDriversTable(jsonData){
	
		var headers = ["driver_id", "unit_number", "name", "last_name", "driver_status_type_id"]
		var $table = $('#datatable-details');
		var $tableBody = $("<tbody></tbody>");
		var drivers = jsonData.drivers;
		
		for(var index = 0; index < drivers.length; index++){
			var driver = drivers[index];
			
			var tableRow = $("<tr></tr>").addClass("gradeX");
			headers.forEach(function(entry, value) {
				if (driver.hasOwnProperty(entry)) {
					var tableDetail = tableDetail = $("<td></td>");
					if(value == 0){
						var driverIdLink = $("<a style='cursor:pointer;' onclick='DriverUtils.showDriverDetails("+driver[entry]+")'></a>").text(driver[entry]);
						tableDetail.append(driverIdLink);
					}else{
						tableDetail.text(driver[entry]);
					}
					if(value > 2){
						tableDetail.addClass("center");
					}
					if(value > 8){
						tableDetail.css("display","none");
					}
					tableRow.append(tableDetail);
				}
			});
			$tableBody.append(tableRow);
		}
		
		$table.append($tableBody);
	}

	return{
		createTable: function(jsonData, type){
			if(type=="services"){
				createServicesTable(jsonData);
			}else if(type=="drivers"){
				createDriversTable(jsonData);
			}
			
		}
	}
})();

