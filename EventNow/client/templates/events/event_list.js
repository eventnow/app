Template.eventList.helpers({
	eventPosts: function(){
		return Events.find({}, {sort: {submitted: -1}}) ;
	}
});

