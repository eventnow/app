if(Events.find().count() === 0 ) {

	var now = new Date().getTime();

	var tomId = Meteor.users.insert({
		profile: { name: 'Tom Coleman' }
	});
	var tom = Meteor.users.findOne(tomId);
	var sachaId = Meteor.users.insert({
		profile: { name: 'EventNow Team' }
	});
	var sacha = Meteor.users.findOne(sachaId);
	var telescopeId = Events.insert({
		title: 'Die neue Event App für unterwegs',
		userId: sacha._id,
		author: sacha.profile.name,
		url: 'http://www.eventnow.at',
		submitted: now - 7 * 3600 * 1000,
		commentsCount: 2,
		upvoters: [], votes: 999


	});
	Comments.insert({
		eventId: telescopeId,
		userId: tom._id,
		author: tom.profile.name,
		submitted: now - 5 * 3600 * 1000,
		body: 'Interesting project EventNow Team, can I get involved?'
	});
	Comments.insert({
		eventId: telescopeId,
		userId: sacha._id,
		author: sacha.profile.name,
		submitted: now - 3 * 3600 * 1000,
		body: 'You sure can!'
	});

	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'Erste Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	Events.insert({
		title: 'Meteorapp',
		url: 'http://www.meteor.com',
		description: 'zweite Meteor App',
		host: 'meteor',
		commentsCount: 0,
		upvoters: [], votes: 0


	});
	
}