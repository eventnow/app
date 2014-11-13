Meteor.publish('eventPosts', function()
{
	return Events.find();
});