// https://randomuser.me/api/
var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
  
  function handleErrors(request){
    if(!request.ok){
      throw Error(request.status)
    }
    return request;
  }
  
function parseJSON(request){
    return request.json();
  }
  
function updateProfile(data){
  var user = data.results[0];
  avatar.src = user.picture.medium;
  fullname.innerHTML = user.name.first + " " + user.name.last;
  username.innerHTML = user.login.username;
  email.innerHTML = user.email;
  city.innerHTML = user.location.city;
  
    console.log("this is the updateProfile function:");
    console.log();
  }
  
function printError(error){
    console.log(error);
  }
    
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
  
})