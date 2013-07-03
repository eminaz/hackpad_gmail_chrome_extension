
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


  Meteor.Router.add({

    '/:url_id': function(url_id) {
      Meteor.call('create_hackpad2',url_id);
    }
  });

  Meteor.methods({

    'create_hackpad2':function(url_id){

      var title,email,body,client_id,secret;
      var firebase_url='https://hackpad.firebaseio.com/'+url_id+'.json';

      Meteor.http.call("GET",
        firebase_url,
        {},
        function(error,result){
          snapshot=result.data;
          title = snapshot.title;
          email = snapshot.email;
          body = snapshot.body;
          client_id = snapshot.id;
          secret =  new Buffer(snapshot.secret, 'base64').toString('binary');
          var body2=body.replace(/\n/g,"<br>");
          var client = new Hackpad(client_id, secret);
          client.create(title, function(err, resp) {
              var text1=title+"<br><br>"+email+"<br><br>"+body2;
              client.import(resp.padId,text1,function(err, resp) {
              });
          });
      });

    }

  });


}
