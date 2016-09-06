// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEyTUkzZ_86EwwZm1116k6VKq01vsWOEU",
  authDomain: "photo-stories-8f4a9.firebaseapp.com",
  databaseURL: "https://photo-stories-8f4a9.firebaseio.com",
  storageBucket: "photo-stories-8f4a9.appspot.com",
};
firebase.initializeApp(config);


  firebase.auth().signInAnonymously().catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

  });

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

          var isAnonymous = user.isAnonymous;
          var uid = user.uid;

          var stories = firebase.database().ref('stories').once('value').then(function(data) {
              var d = data.val();
              new Vue({
                  el: '#app',
                  data: {
                      stories: d
                  }
              })

          });


      } else {

      }

  });
