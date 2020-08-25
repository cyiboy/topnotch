

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
    iziToast.success({
      title: 'OK',
      message: 'Successfully inserted record!',
  });
  
  }
  
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});


 }
       