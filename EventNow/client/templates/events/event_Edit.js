Template.editEvent.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentEventId = this._id;

		var eventsItems = {
			title: $(e.target).find('[name=title]').val(),
			description: $(e.target).find('[name=description]').val()
			

		}

		Events.update(currentEventId, {$set: eventsItems}, function(error){

			if(error) {
				return alert(error.reason);
			} else {

			Router.go('eventDetails', {_id: currentEventId});	
			}		
			});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if(confirm("Möchten Sie dieses Event wirklich löschen?")) {
			var currentEventId = this._id;
			Events.remove(currentEventId);
			Router.go('eventDetails');
		}
	}
});