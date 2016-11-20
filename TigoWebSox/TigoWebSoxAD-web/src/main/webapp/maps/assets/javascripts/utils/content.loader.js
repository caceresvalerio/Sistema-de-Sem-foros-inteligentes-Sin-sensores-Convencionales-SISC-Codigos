(function( $ ) {
	function loadContent() {
		$("#headerContainer").load("./assets/view/header.html"); 
		//nav-active  nav-expanded
	}

	// auto initialize
	$(function() {
		loadContent();
	});

}).apply(this, [ jQuery ]);