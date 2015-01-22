
// add file read and print code
// wrap it up in a function
// export that function as `print`

var fs = require('fs');

module.exports = { 
	print: function(path) {
		fs.readFile(path, function(err, data) {
		
			if (err) { // Always do error checking first!
				// sad
			} else {
				console.log('File contents:');
				console.log(data.toString());
			}
		});
	}
}