var email = document.getElementById('email');
var password = document.getElementById('password');
var login_btn = document.getElementById('login_btn');
var user_container = [];

if (window.localStorage.getItem('data')){
    console.log();
    user_container =JSON.parse(window.localStorage.getItem('data'))
}
console.log(user_container);
login_btn.addEventListener('click' , function(e){
e.preventDefault();

if (user_container[0].email == email.value){
    
    setTimeout(function(){
        window.location.assign('dashboard.html')
    }, 3000)
}
else{
   
    setTimeout(function(){
        window.location.assign('index.html')
    }, 3000)
    
}

})