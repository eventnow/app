Events = new Mongo.Collection('eventPosts');

Events.allow({
	update: function(userId, events) {return ownsDocument(userId, events);},
	remove: function(userId, events) {return ownsDocument(userId, events);}
});

Meteor.methods({
	eventInsert: function(eventAttributes) {
		check(Meteor.userId(), String);
		check(eventAttributes, {
			title: String,
			description: String
		});

		var user = Meteor.user();
		var events = _.extend(eventAttributes, {
			userId: user._id,
			host: user._id,
			submitted: new Date()
		});

		var eventId = Events.insert(events);

		return {
			_id: eventId
		};
	}
});
