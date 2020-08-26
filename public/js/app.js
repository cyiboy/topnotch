

var firebaseConfig = {
    apiKey: "AIzaSyBaCJK30hGFWu-hcKLmZFcRWozcow1ty1o",
    authDomain: "topnotch-99f79.firebaseapp.com",
    databaseURL: "https://topnotch-99f79.firebaseio.com",
    projectId: "topnotch-99f79",
    storageBucket: "topnotch-99f79.appspot.com",
    messagingSenderId: "602021827706",
    appId: "1:602021827706:web:a975bada5e4e4116dd17c3",
    measurementId: "G-BETX37Q1D1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();


 // index page 
 document.getElementById("newsletter_btn").addEventListener("click", newsletter, {passive: true});
 function newsletter (){
   console.log('i was here')
   var email = document.getElementById('newsletterEmail').value
   console.log(email)
  if(email == ''){
    iziToast.warning({
      title: 'OK',
      message: 'Successfully inserted record!',
  });
  
  }else{
    db.collection("NewsLetter").add({
      email: email,
       })
    .then(function(docRef) {
      iziToast.success({
        title: 'OK',
        position: 'topRight',
        message: 'Successfully inserted record!',
    });
    })
    .catch(function(error) {
     console.log(error)
    });}}
 document.getElementById("partner-btn").addEventListener("click", partner, {passive: true});
 function partner(){
   var email = document.getElementById('partner-email').value
   var fname = document.getElementById('partner-fullname').value
   var message = document.getElementById('partner-message').value
   console.log(email, fname, message);
   db.collection("partners").add({
    email: email,
    fullname: fname,
    message: message
     })
  .then(function(docRef) {
    iziToast.success({
      title: 'OK',
      position: 'topRight',
      message: 'Successfully sent, would get back to you soon',
  });
  })
  .catch(function(error) {
   console.log(error)
  });
 }
  
       