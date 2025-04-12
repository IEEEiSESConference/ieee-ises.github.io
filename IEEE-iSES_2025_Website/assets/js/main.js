/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

			// Start the background image carousel after the page loads
			startBackgroundCarousel(); // Call the function here
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// Function for background image carousel
function startBackgroundCarousel() {
    // Array of background images
    const images = [
        'url("images/AI-Banner-home.jpg")',
        'url("images/ieee-ises-2021-slider-05.jpg")',
        'url("images/IEEE-iSES-2024_Banner_Chip.png")',
    ];

    // Reference to the header element
    const header = document.getElementById('header');

    // Index to track the current image
    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        header.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
    }

    // Change the background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);

    // Initial background image setup
    changeBackgroundImage();
}
