if (Accounts._resetPasswordToken) {
    Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.account_system.helpers({
    resetPassword: function(){
        return Session.get('resetPassword');
    }
});