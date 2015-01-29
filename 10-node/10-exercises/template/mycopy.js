
var fs = require('fs');

var path1 = process.argv[2];
var path2 = process.argv[3];

var copiedData = 'Lawl, you thought this would actually work!';

fs.readFile(path1, function(err, data) {
	if (err) { // Always do error checking first!
		// sad
		console.log('Couldn\'t copy... :(');
	} else {
		console.log('Copied successfully!');
		//copiedData = data.toString();

		fs.writeFile(path2, data.toString(), function(err, data) {
			if (err) {
				// sad
				console.log('Couldn\'t write... :(');
			} else {
				console.log('Written successfully!');

			}
		});
	}
});

