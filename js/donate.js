document.querySelector(".homebtn").addEventListener("click", function () {
  location.href = "../index.html";
});
document.querySelector(".donatebtn").addEventListener("click", function () {
  location.href = "donate.html";
});

document.querySelector(".reviewbtn").addEventListener("click", function () {
  location.href = "../review.html";
});

document.querySelector(".pricingbtn").addEventListener("click", function () {
  location.href = "../pricing/pricing.html";
});

document.querySelector(".contactusbtn").addEventListener("click", function () {
  location.href = "../contactUs.html";
});

document.querySelector(".loginbtn").addEventListener("click", function () {
  location.href = "../Signin.html";
});

document.querySelector(".signupbtn").addEventListener("click", function () {
  location.href = "../SignUp.html";
});
document.querySelector(".fundraiserbtn").addEventListener("click", function () {
  location.href = "../fundRaiser/fund.html";
});
document.querySelector("#ssss").addEventListener("click", function () {
  location.href = "../fundRaiser/fund.html";
});
document.querySelector("#ssssd").addEventListener("click", function () {
  location.href = "../fundRaiser/fund.html";
});


document.getElementById("LOSINIMG").addEventListener("click", LOginFUN);
var ddaa = document.getElementById("LOSIN");
function LOginFUN() {
  if (ddaa.style.display === "none") {
    ddaa.style.display = "flex";
    ddaa.style.justifyContent = "space-around";
    // ddaa.style.margin= "0";
    ddaa.style.paddingTop = "15px";
  } else {
    ddaa.style.display = "none";
  }
}

document.getElementById("divCLICK").addEventListener("click", changePage);

function changePage() {
  location.href = "divSection/div1.html";
}
