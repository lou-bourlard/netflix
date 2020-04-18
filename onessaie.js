(function() {
	'use strict';
	const checkboxes = document.querySelectorAll('#container input[type="checkbox"]');
	if(checkboxes != null) {

		const buttons = document.querySelectorAll('div.buttons button');
		if(buttons != null) {
			for(var i=0, iMax=buttons.length; i<iMax; i++) {
				buttons[i].addEventListener('click', function(event) {
					console.log('On clique sur un bouton');
					const value = event.target.hasAttribute('data-folder');
					for(var i=0, iMax= checkboxes.length; i<iMax; i++) {
						checkboxes[i].checked = value;
					}
					event.preventDefault();
				});
			}
		}

	}
})();