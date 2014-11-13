Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('eventPosts');}
});

Router.route('/', {name: 'eventList'});
Router.route('/eventPosts/:_id', {
	name: 'eventDetails',
	data: function() { return Events.findOne(this.params._id);}
});

Router.onBeforeAction('dataNotFound', {only: 'eventDetails'});