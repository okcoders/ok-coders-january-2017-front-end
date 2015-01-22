
var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
	if (err) { // Always do error checking first!
		// sad
	} else {
		console.log('File contents:');
		console.log(data.toString());
	}
});
