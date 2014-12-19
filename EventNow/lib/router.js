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

Router.route('/eventPosts/:_id/edit', {
	name: 'editEvent',
	data: function() { return Events.findOne(this.params._id);}
});

Router.route('/submit', {name: 'submitEvent'});

var requireLogin = function() {
	if(! Meteor.user()) {
		if(Meteor.logginIn()) {
			this.render(this.loadingTemplate);
		} else {
		this.render('accessDenied');
		}
	} else {
		this.next();
	}
	
}

Router.onBeforeAction('dataNotFound', {only: 'eventDetails'});
Router.onBeforeAction(requireLogin, {only: 'submitEvent'});

/*Router.onBeforeAction(function(){
  loadFilePicker('AF196afisTtSLY6jCk6DTz');
 
},{only:['submitEvent']}); */