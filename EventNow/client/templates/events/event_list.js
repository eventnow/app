Template.eventList.helpers({
	eventPosts: function(){
		return Events.find();
	}
})