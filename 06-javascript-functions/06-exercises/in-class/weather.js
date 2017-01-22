function generateRandomChance() {
	return Math.round(Math.random() * 100);
}

function checkActivity() {
	var willRain = checkRainChance();
	var temperature = checkTemperature();

	if (willRain) {
		if (temperature == 'cold') {
			return 'Go play in the snow!';
		} else {
			return 'Get out those rain boots!';
		}
	} else {
		if (temperature == 'cold') {
			return 'Perfect time for some hot chocolate by the fireplace!';
		} else if (temperature == 'warm') {
			return 'Beach day!';
		} else {
			return 'Normal, boring day. Go to work.';
		}
	}
}

function checkRainChance() {
	var chanceOfPrecipitation = generateRandomChance();
	console.log('The chance of rain is: ' + chanceOfPrecipitation + '%');

	return chanceOfPrecipitation > 75;
}

function checkTemperature() {
	var temperature = generateRandomChance();
	console.log('The temperature is: ' + temperature + '°F');

	if (temperature < 32) {
		return 'cold';
	} else if (temperature > 72) {
		return 'warm';
	} else {
		return 'temperate'
	}	
}

// Check the activity
console.log(checkActivity());


