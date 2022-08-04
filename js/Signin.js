document.querySelector("form").addEventListener("submit", checkUser);

var UserObjArr = JSON.parse(localStorage.getItem("UserObjArr")) || [];

function checkUser() {
  event.preventDefault();
  var email_address = document.querySelector("#email").value;
  var user_password = document.querySelector("#password").value;

  if (email_address.length == 0 || user_password.length == 0) {
    alert("Please enter email and password");
  } else {
    var email_present = false;
    UserObjArr.forEach((element) => {
      if (element.email_address == email_address) {
        email_present = true;
        if (element.user_password == user_password) {
          alert("Sign In Successfull");
          location.href = "index.html";
        } else {
          alert("Password is incorrect");
          return false;
        }
      }
    });
  }
}
