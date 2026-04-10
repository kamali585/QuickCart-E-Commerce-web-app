function loginUser(event){

event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "admin" && password === "1234")
{
window.location.href = "dashboard.html";
}
else
{
alert("Invalid Login");
}

}

function logout()
{
window.location.href = "index.html";
}
