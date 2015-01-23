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
			author: user.username,
			submitted: new Date(),
			commentsCount: 0,
			upvoters: [],
			votes: 0
		});

		var eventId = Events.insert(events);

		return {
			_id: eventId
		};
	},

	upvote: function(eventId) {
		var user = Meteor.user();

if (!user)
	throw new Meteor.Error(401, "You need to login to upvote");
var eventPosts = Events.findOne(eventId);

Events.update({
_id: eventId,
upvoters: {$ne: user._id}
}, {
$addToSet: {upvoters: user._id},
$inc: {votes: 1}
});

}

});
