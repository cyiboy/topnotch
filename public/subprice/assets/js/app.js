const firebaseConfig = {
    apiKey: "AIzaSyBaCJK30hGFWu-hcKLmZFcRWozcow1ty1o",
    authDomain: "topnotch-99f79.firebaseapp.com",
    databaseURL: "https://topnotch-99f79.firebaseio.com",
    projectId: "topnotch-99f79",
    storageBucket: "topnotch-99f79.appspot.com",
    messagingSenderId: "602021827706",
    appId: "1:602021827706:web:9177b06f8e3f5e99dd17c3",
    measurementId: "G-EVS89YLFLR"
  };
  
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();
    var spinHandle = loadingOverlay()

$(document).ready(function(){

    // Slider Syncing
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});

//multi-step-form
const form = document.querySelector('.booking-form');
const tabs = document.querySelectorAll('.tab');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const steps = document.querySelectorAll('.step');
var conts= 0


let curTab = 0;

//show tabs
const showTabs = tab => {

    //show current tab
    tabs[tab].style.display = 'block';

    (tab == 0) ? prevBtn.style.display = 'none' : prevBtn.style.display = 'block';

    if(tab == (tabs.length - 1)) {
        nextBtn.innerHTML = 'submit'
          
    } else {
        nextBtn.innerHTML = 'next';
    }

    stepIndicator(curTab)

};

//change to the next tab
const nextTab = num => {
   
    // num === 5 ? console.log(num) : alert('t')
    
    if (num == 1 && !formValidate()) return false;

    tabs[curTab].style.display = "none";

    curTab += num;

    if (curTab === 4) {
        console.log('i was here')
        return false;
    }else{
        showTabs(curTab);
    }

   

};

//check all inputs and textarea in all tabs
const formValidate = () => {

    const inputs = document.querySelectorAll("tabs[curTab] input");
    const textarea = document.querySelector("tabs[curTab] textarea");

    let valid = true;

    inputs.forEach(input => {
        if (input.value == '' && textarea.value == '') {
            valid = false;
        }
    });


    if (valid) {
        let b = document.querySelector('#subBtn')
        if(b.innerHTML === 'submit') {
            // b.setAttribute('type','submit')
            // b.submit(function(e){
            //     e.preventDefault()
            // alert(b.getAttribute('type'))
            // return
            // })
            console.log('hello world')
        }else{
            steps[curTab].className = steps[curTab].className.replace(" active", " finish"); 
        }
        
    }

    return valid

};

//change style on step icon
const stepIndicator = tab => {
    steps.forEach(step => {
        step.className = step.className.replace(" active", "")
    });
    steps[tab].className += " active";
};

//button to click to change to next tab
nextBtn.addEventListener('click', () => {
// alert('hi')
//conts++
console.log(conts)
if(conts>= 3){
    console.log(conts)
    
    request()
}else{
    
    nextTab(1);
    conts++  
}

});

//button to click to change to previous tab
prevBtn.addEventListener('click', () => {
    conts--
    console.log(conts)
    nextTab(-1);

});

function request(){
    spinHandle.activate();
    var time = document.getElementById('time').value;
    var date = document.getElementById('date').value;
    var pname = document.getElementById('pName').value;
    var pemail = document.getElementById('pEmail').value;
    var pPhone = document.getElementById('pPhone').value;
    var extranote = document.getElementById('extraNote').value;
    var rname = document.getElementById('rName').value;
    var raddress = document.getElementById('raddress').value;
    var city = document.getElementById('city').value;
    var rphone = document.getElementById('rphone').value;
    console.log(time, date, pname, pemail, pPhone, extranote, rname, raddress, city, rphone)

  var docref =  db.collection("subprice").doc('request').collection(city).doc()
  
  docref.set({
       time: time,
       date: date,
       requesterNumber: pPhone,
       requesterEmail: pemail,
       requesterName: pname,
       extranote: extranote,
       Name: rname,
       address: raddress,
       city: city,
       phone: rphone,
       subpriceType: subpriceType,
       subpricePackage: subpricePackage,
       price: price,
id:docref.id
       
       
    
        })
     .then(function(docRef) {
       
    jQuery.noConflict(); 
  $('#myModal').modal('show');
   console.log(docref.id)
   loadingOverlay.cancelAll();
   
     })
     .catch(function(error) {
      console.log(error.message, URL)
      loadingOverlay.cancelAll();
     });

}

showTabs(curTab);

