// Define states array
var states = [
	{
		name: "Oklahoma",
		abbreviation: "OK",
		basketball: ["Thunder"],
		football: undefined,
		bird: "Scissor-Tailed Flycatcher",
		flower: "Oklahoma Rose"
	},
	{
		name: "Washington",
		abbreviation: "WA",
		basketball: undefined,
		football: ["Seahawks"],
		bird: "American Goldfinch",
		flower: "Pacific Rhododendron"
	},
	{
		name: "Texas",
		abbreviation: "TX",
		basketball: ["Spurs", "Rockets", "Mavericks"],
		football: ["Cowboys", "Texans"],
		bird: "Northern Mockingbird",
		flower: "Bluebonnet"
	},
	{
		name: "New York",
		abbreviation: "NY",
		basketball: ["Knicks, Nets"],
		football: ["Giants, Jets, Bills"],
		bird: "Eastern Bluebird",
		flower: "Rose"
	}
]

// Loop through array and display state information
for (var i = 0; i < states.length; i++) {;
	var state = states[i];
	console.log('State: ' + state.name);
	console.log('Abbreviation: ' + state.abbreviation);

	if (state.basketball != undefined) {
		console.log('Basketball team(s): ' + state.basketball);
	} else {
		console.log('No basketball team(s)');
	}

	if (state.football != undefined) {
		console.log('Football team(s): ' + state.football);
	} else {
		console.log('No football team(s)');
	}

	console.log('Bird: ' + state.bird);
	console.log('Flower: ' + state.flower);

	console.log('')
}