document.querySelector("form").addEventListener("submit", checkUser);

var UserObjArr = JSON.parse(localStorage.getItem("UserObjArr")) || [];

function checkUser() {
  var email_address = document.querySelector("#email").value;
  var user_password = document.querySelector("#password").value;

  var user_present = false;

  UserObjArr.forEach((element) => {
    if (
      element.email_address == email_address &&
      element.user_password == user_password
    ) {
      user_present = true;
    }
    if (user_present) {
      return false;
    }
  });

  if (user_present) {
    alert("Sign In Successfull");
  } else {
    alert("email and password are not present in the database");
  }
}
