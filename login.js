var username = document.querySelector('#username');
var password = document.querySelector('#password');
var loginButton = document.querySelector('#login');


loginButton.addEventListener('click',setLogin);

function setLogin(event){
    if(typeof(Storage)!== 'undefined'){
        if(sessionStorage.username == username.value && sessionStorage.password == password.value){

            location.href="history.html";

        }else{

            alert("Username or Password are incorrect.Please try again!");
        }
    }
    event.preventDefault();
};