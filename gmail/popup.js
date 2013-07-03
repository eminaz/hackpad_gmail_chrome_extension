
document.addEventListener('DOMContentLoaded', function () {

  var the_code=
   'var myDataRef = new Firebase("https://hackpad.firebaseio.com"); var table1 = document.body.getElementsByClassName("adn ads")[0].getElementsByTagName("table")[0].innerText; '
  +'var body_text=document.body.getElementsByClassName("adn ads")[0].getElementsByClassName("ii")[0].innerText; '
  +'var email_title=document.body.getElementsByClassName("hP")[0].innerText;'
  +'var client_id="'+localStorage["client_id"]+'"; var secret="'+localStorage["secret"]+'"; var semi_encrypted_secret = btoa(secret);'
  +'myDataRef.push({id: client_id, secret: semi_encrypted_secret, title: email_title, email:table1, body: body_text}, function(err){'
  +'myDataRef.on("value", function(snapshot) {var objects = snapshot.val(); for(var last in objects){};'
  +'var meteor_url="https://hackpad.meteor.com/"+last;  $.ajax({type: "GET",url: meteor_url });'
  +' }); });';

  chrome.tabs.executeScript(null,{code:the_code},function(){
    document.getElementById('front_text').innerHTML="Saved";
  });

});









