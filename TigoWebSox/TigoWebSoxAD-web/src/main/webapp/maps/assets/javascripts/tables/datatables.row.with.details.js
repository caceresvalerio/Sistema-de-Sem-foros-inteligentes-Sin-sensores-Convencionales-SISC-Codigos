(function( $ ) {

	'use strict';

	var datatableInit = function() {
		var $table = $('#datatable-details');

		// format function for row details
		var fnFormatDetails = function( datatable, tr ) {
			var data = datatable.fnGetData( tr );

			return [
				'<table class="table mb-none">',
					'<tr class="b-top-none">',
						'<td><label class="mb-none">Service ID:</label></td>',
						'<td><a href="#">' + data[1] + '</a></td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Status:</label></td>',
						'<td>' + data[5] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Date:</label></td>',
						'<td>' + data[9] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Time at Create:</label></td>',
						'<td>' + data[9] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Client ID:</label></td>',
						'<td><a href="#">' + data[2] + '</a></td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Client Email:</label></td>',
						'<td>example@example.com</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Client Phone:</label></td>',
						'<td>(809)756-7375</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Driver ID:</label></td>',
						'<td><a href="#">' + data[3] + '</a></td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Driver Email:</label></td>',
						'<td>driverexample@example.com</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Driver Phone:</label></td>',
						'<td>(809)756-7375</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Unit #:</label></td>',
						'<td>156</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Placa:</label></td>',
						'<td>G-10099</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Car Make:</label></td>',
						'<td>Toyota</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Car Model:</label></td>',
						'<td>Corolla</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Year:</label></td>',
						'<td>2005</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Car Color:</label></td>',
						'<td>Blue</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">GPS Position:</label></td>',
						'<td>Latitude: -38.908133, Longitude: -13.692628</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Address:</label></td>',
						'<td>' + data[7] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">More details:</label></td>',
						'<td>' + data[8] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Assigment Clock:</label></td>',
						'<td>' + data[6] + '</td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Arrival Clock:</label></td>',
						'<td> - </td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Relevo:</label></td>',
						'<td> - </td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Driver ID:</label></td>',
						'<td><a href="#"> - </a></td>',
					'</tr>',
					'<tr>',
						'<td><label class="mb-none">Arrival Clock:</label></td>',
						'<td> - </td>',
					'</tr>',
				'</div>'
			].join('');
		};

		// insert the expand/collapse column
		var th = document.createElement( 'th' );
		var td = document.createElement( 'td' );
		td.innerHTML = '<i data-toggle class="fa fa-plus-square-o text-primary h5 m-none" style="cursor: pointer;"></i>';
		td.className = "text-center";

		$table
			.find( 'thead tr' ).each(function() {
				this.insertBefore( th, this.childNodes[0] );
			});

		$table
			.find( 'tbody tr' ).each(function() {
				this.insertBefore(  td.cloneNode( true ), this.childNodes[0] );
			});

		// initialize
		var datatable = $table.dataTable({
			aoColumnDefs: [{
				bSortable: false,
				aTargets: [ 0 ]
			}],
			aaSorting: [
				[1, 'asc']
			]
		});

		// add a listener
		$table.on('click', 'i[data-toggle]', function() {
			var $this = $(this),
				tr = $(this).closest( 'tr' ).get(0);

			if ( datatable.fnIsOpen(tr) ) {
				$this.removeClass( 'fa-minus-square-o' ).addClass( 'fa-plus-square-o' );
				datatable.fnClose( tr );
			} else {
				$this.removeClass( 'fa-plus-square-o' ).addClass( 'fa-minus-square-o' );
				datatable.fnOpen( tr, fnFormatDetails( datatable, tr), 'details' );
			}
		});
	};

	$(function() {
		datatableInit();
	});

}).apply( this, [ jQuery ]);