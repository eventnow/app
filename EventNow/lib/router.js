Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	progress: true,
});


Router.route('/submit', {name: 'submitEvent', progress: false
});

Router.route('/eventPosts/:_id', {
	name: 'eventDetails',
	waitOn: function() {
	return [
	Meteor.subscribe('singlePost', this.params._id),

	Meteor.subscribe('comments', this.params._id)
	];
	},
	data: function() { return Events.findOne(this.params._id);}
});

Router.route('/eventPosts/:_id/edit', {
	name: 'editEvent',
	waitOn: function() {
    return Meteor.subscribe('singlePost', this.params._id);
  },
	data: function() { return Events.findOne(this.params._id);}
});

EventsListController = RouteController.extend({
template: 'eventList',
increment: 5,
eventsLimit: function() {
return parseInt(this.params.eventsLimit) || this.increment;
},
findOptions: function() {
 return {sort: this.sort, limit: this.eventsLimit()};
},
subscriptions: function() {
    this.postsSub = Meteor.subscribe('eventPosts', this.findOptions());
},
events: function() {
    return Events.find({}, this.findOptions());
},
data: function() {
    var hasMore = this.events().count() === this.eventsLimit();
   // var nextPath = this.route.path({eventsLimit: this.eventsLimit() + this.increment});
    return {
      eventPosts: this.events(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

NewEventController = EventsListController.extend({
sort: {submitted: -1, _id: -1},
 nextPath: function() {
    return Router.routes.newEvents.path({eventsLimit: this.eventsLimit() + this.increment})
  }
});

BestEventController = EventsListController.extend({
sort: {votes: -1, submitted: -1, _id: -1},
 nextPath: function() {
    return Router.routes.bestEvents.path({eventsLimit: this.eventsLimit() + this.increment})
  }
});


Router.route('/', {name: 'home',
	controller: NewEventController
});
Router.route('/new/:eventsLimit?', {name: 'newEvents',
	controller: NewEventController
});

Router.route('/best/:eventsLimit?', {name: 'bestEvents',
	controller: BestEventController
});



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

