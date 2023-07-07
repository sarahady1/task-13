var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var register_btn = document.getElementById('register_btn');
var user_container = [];

register_btn.addEventListener('click', function(e){
    e.preventDefault()
    var user_data = {
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        password:password.value

    }
    user_container.push(user_data);
    window.localStorage.setItem('data', JSON.stringify(user_container))
    window.location.assign('login.html');
})
