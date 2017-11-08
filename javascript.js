
// купить

// var button = document.querySelector(".buy");
// var modal = document.querySelector(".ctg-modal");
// var link = modal.querySelector(".check-order");
// var button = modal.querySelector(".shopping");

// button.addEventListener('click', function(e){
// e.preventDefault();
// console.log(modal.classList.contains("open"));
// modal.classList.toggle("open");









// карта
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.9388068, lng: 30.3230066},
    zoom: 16
  });
}
function initMap() {
    var myLatLng = {lat: 59.9388068, lng: 30.3230066};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,

    });
  }
// напишите нам

  var button = document.querySelector(".write-us");
  var modal = document.querySelector(".modal");
  var login = modal.querySelector("[name=login]");
  var email = modal.querySelector("[name=email]");
  var letter = modal.querySelector("[name=letter]");
  var form = modal.querySelector('form');
  var submit = modal.querySelector(".submit");
  var error = modal.querySelector('span');
  var storage = localStorage.getItem('login');  

  button.addEventListener("click", function (e) {
 	 e.preventDefault();
 	 console.log(modal.classList.contains("open"));
     modal.classList.toggle("open");
     login.focus();


     if(storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
    });

    window.addEventListener("keydown", function(e) {
    	if(e.keyCode === 27) {
    		modal.classList.remove('open');
    	}
    });

    window.addEventListener("keyup", function(e) {
    	if(e.keyCode === 13) {
    		form.addEventListener("submit", function(e){;
    	});
    	}
    });
    
 	form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(!email.value) {
        error.classList.add("err");
    
    }else {
        localStorage.setItem("Ваш email",email.value);
        form.addEventListener("submit", function(e){;
        });
      
    }
  });