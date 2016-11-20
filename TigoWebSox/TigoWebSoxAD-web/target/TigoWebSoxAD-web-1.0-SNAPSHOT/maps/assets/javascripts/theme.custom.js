// Panels
(function( $ ) {

	$(function() {
		$('.panel')
			.on( 'click', '.panel-actions a.fa-times', function( e ) {
				e.preventDefault();

				var $panel,
					$row,
					$next_panel;
				
				$panel = $(this).closest('.panel');
				$next_panel = $(this).closest('.col-md-6').prev();
				
				$next_panel.removeClass('col-md-6');
				$next_panel.addClass('col-md-12');
				if ( !!( $panel.parent('div').attr('class') || '' ).match( /col-(xs|sm|md|lg)/g ) && $panel.siblings().length === 0 ) {
					$row = $panel.closest('.row');
					$panel.parent('div').hide();
					if ( $row.children().length === 0 ) {
						$row.hide();
					}
				} else {
					$panel.hide();
				}
			});
	});

})( jQuery );