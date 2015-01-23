Template.signOut.events({
    'click #signOut': function(e, t) {
        Meteor.logout(function() {
            Session.set('alert', 'Bye! Come back whenever you want!');
        });
        return false;
    }
});