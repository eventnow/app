Template.account_system.helpers({
    showForgotPassword: function() {
        return Session.get('showForgotPassword');
    }
});

Template.signIn.events({
    'submit #signInForm': function(e, t) {
       
    },

    'click #showForgotPassword': function(e, t) {
        Session.set('showForgotPassword', true);
        return false;
    },
});