document.querySelector("form").addEventListener("submit", addUser);

var UserObjArr = JSON.parse(localStorage.getItem("UserObjArr")) || [];

function addUser() {
  event.preventDefault();
  var full_name = document.querySelector("#fullname").value;
  var email_address = document.querySelector("#email").value;
  var user_password = document.querySelector("#password").value;

  var UserObj = {
    full_name: full_name,
    email_address: email_address,
    user_password: user_password,
  };
  var email_already = false;
  UserObjArr.forEach((element) => {
    if (element.email_address == email_address) {
      email_already = true;
    }
    if (email_already) {
      return false;
    }
  });
  if (email_already == true) {
    alert("Email already present in the database");
  } else {
    UserObjArr.push(UserObj);
    localStorage.setItem("UserObjArr", JSON.stringify(UserObjArr));
    alert("signup succ");
    // location.href = "Signin.html";
  }
}
