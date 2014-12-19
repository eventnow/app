Template.imageupload.created = function(){
    loadFilePicker('AF196afisTtSLY6jCk6DTz');
};

Template.imageupload.events({
    'click #upload': function () {
      filepicker.pick(
        {
          mimetypes: ['image/gif','image/jpeg','image/png'],
          multiple: false
        },
        function(InkBlob){
          var image = Images.findOne({userId:Meteor.userId()});
          if(image){
            Images.update({_id:image._id},
            {
              $set:{
                filepickerId:_.last(InkBlob.url.split("/"))
              }  
            });
          }else{
            Images.insert({
              userId:Meteor.userId(),
              filepickerId:_.last(InkBlob.url.split("/")),
              createdAt:new Date() //this isnt guarnteed accurate, but its ok for this simple demo
            });
          }
        },
        function(FPError){
           if(FPError && FPError.code !== 101)
            alert(FPError.toString());
        }
      );
    }
});