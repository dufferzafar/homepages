jQuery(document).ready(function($) {
	var text = [
		"hello there...",
		"i'm shadab",
		"a cs undergrad.",
		"i write code",
		"chunks and blocks of it",
		"most of which is on github.",
		"when i'm not writing code",
		"i like to read",
		"anything...",
		"i also like good music.",
		"alright, that's it.",
		"bye."
	];

var htmlElement = document.getElementById("text");

var realisticTypewriter = new RealisticTypewriter();

// 10% typo rate
realisticTypewriter.accuracy = 100;

// typing speed will be from 5 to 10 characters per second.
realisticTypewriter.minimumCharactersPerSecond = 4;
realisticTypewriter.maximumCharactersPerSecond = 8;

// waits at least 0.5 second and at most 1 second before it starts typing
realisticTypewriter.minimumInitialDelay = 1000;
realisticTypewriter.maximumInitialDelay = 2000;

function writeText (counter) {
	realisticTypewriter.type(text[counter], htmlElement, function () {

		if (counter < (text.length - 1)) {

			setTimeout(function() {
				counter++;
				document.getElementById('text').innerHTML = '';
				writeText(counter);
			}, 1500); }
		else {
			console.log('done');
		}
	});
}

writeText(0);
});
