var chanceOfPrecipitation = Math.round(Math.random() * 100);
var temperature = Math.round(Math.random() * 100);

console.log('The chance of rain is: ' + chanceOfPrecipitation + '%');
console.log('The temperature is: ' + temperature + '°F');

if (chanceOfPrecipitation > 75) {
	if (temperature < 32) {
		console.log('Go play in the snow!');
	} else {
		console.log('Get out those rain boots!');
	}	
} else {
	if (temperature < 32) {
		console.log('Perfect time for some hot chocolate by the fireplace!');
	} else if (temperature > 72) {
		console.log('Beach day!');
	} else {
		console.log('Normal, boring day. Go to work.');
	}	
}

