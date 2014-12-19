if(Events.find().count() === 0 ) {
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor'
	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor'
	});
}