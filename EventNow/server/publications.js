Meteor.publish('eventPosts', function(options)
{
	check(options, {
		sort:Object,
		limit: Number
	});
	return Events.find({},options);
});

Meteor.publish('comments', function(eventId) {
	check(eventId, String);
	return Comments.find({eventId: eventId});
});
Meteor.publish('singlePost', function(id) {
	check(id, String);
	return Events.find(id);
});
