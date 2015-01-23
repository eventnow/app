Comments = new Meteor.Collection('comments');


Meteor.methods({
	commentInsert: function(commentAttributes) {

		var user = Meteor.user();
		var events = Events.findOne(commentAttributes.eventId);

		var comments = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		Events.update(comments.eventId, {$inc: {commentsCount: 1}});
		return Comments.insert(comments);

	}
});