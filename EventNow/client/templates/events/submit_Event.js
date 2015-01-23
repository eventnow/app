Template.submitEvent.events({
	'submit form': function(e) {
		e.preventDefault();

		var events = {
			title: $(e.target).find('[name=title]').val(),
			description: $(e.target).find('[name=description]').val()
			

		}

		Meteor.call('eventInsert', events, function(error, result) {

			if(error)
				return alert(error.reason);
		
			Router.go('home', {_id: result._id});
		});
	}
});