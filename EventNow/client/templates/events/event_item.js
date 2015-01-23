Template.eventItem.helpers({
	ownEvent: function() {
		return this.userId === Meteor.userId();
	},
	upvotedClass: function() {
var userId = Meteor.userId();
if (userId && !_.include(this.upvoters, userId)) {
return 'upvotable';
} else {
return 'disabled';
}
}


});
Template.eventItem.events({
'click .upvotable': function(e) {
e.preventDefault();
Meteor.call('upvote', this._id);
}
});
