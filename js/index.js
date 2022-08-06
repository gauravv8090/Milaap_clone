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
document.querySelector(".homebtn").addEventListener("click", function () {
  location.href = "index.html";
});

document.querySelector(".donatebtn").addEventListener("click", function () {
  location.href = "donate/donate.html";
});

document.querySelector(".reviewbtn").addEventListener("click", function () {
  location.href = "review.html";
});

document.querySelector(".pricingbtn").addEventListener("click", function () {
  location.href = "pricing/pricing.html";
});

document.querySelector(".contactusbtn").addEventListener("click", function () {
  location.href = "contactUs.html";
});

document.querySelector(".loginbtn").addEventListener("click", function () {
  location.href = "Signin.html";
});

document.querySelector(".signupbtn").addEventListener("click", function () {
  location.href = "SignUp.html";
});
document.querySelector(".fundraiserbtn").addEventListener("click", function () {
  location.href = "fundRaiser/fund.html";
});
document
  .querySelector(".fundraiserbtn2")
  .addEventListener("click", function () {
    location.href = "fundRaiser/fund.html";
  });
document.querySelector(".seeMorebtn").addEventListener("click", function () {
  location.href = "donate/donate.html";
});
document.querySelector(".reviewPagebtn").addEventListener("click", function () {
  location.href = "review.html";
});

var category1 = document.getElementById("category1");
var category2 = document.getElementById("category2");
var category3 = document.getElementById("category3");
var category4 = document.getElementById("category4");
category1.addEventListener("click", changeColor1);
category2.addEventListener("click", changeColor2);
category3.addEventListener("click", changeColor3);
category4.addEventListener("click", changeColor4);
function changeColor1() {
  category1.style.backgroundColor = "#691a47";
  category1.style.color = "white";
  document.getElementById("categoryImage1").src =
    "https://cimages.milaap.org/milaap/image/upload/v1656419855/White_flood_1_obikdx.png";
  document.getElementById("categoryImage2").src =
    "https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png";
  category2.style.backgroundColor = "white";
  category2.style.color = "black";
  document.getElementById("categoryImage3").src =
    "https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png";
  category3.style.backgroundColor = "white";
  category3.style.color = "black";
  document.getElementById("categoryImage4").src =
    "https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png";
  category4.style.backgroundColor = "white";
  category4.style.color = "black";
}

function changeColor2() {
  category1.style.backgroundColor = "white";
  category1.style.color = "black";
  document.getElementById("categoryImage1").src =
    "https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png";
  document.getElementById("categoryImage2").src =
    "https://assets.milaap.org/assets/home/medical-transparent-icon-a9adecab3167c41605eb773b11fdc423c7e27cd3918e50cd0aa0b1781640e748.png";
  category2.style.backgroundColor = "#691a47";
  category2.style.color = "white";
  document.getElementById("categoryImage3").src =
    "https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png";
  category3.style.backgroundColor = "white";
  category3.style.color = "black";
  document.getElementById("categoryImage4").src =
    "https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png";
  category4.style.backgroundColor = "white";
  category4.style.color = "black";
}

function changeColor3() {
  category1.style.backgroundColor = "white";
  category1.style.color = "black";
  document.getElementById("categoryImage1").src =
    "https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png";
  document.getElementById("categoryImage2").src =
    "https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png";
  category2.style.backgroundColor = "white";
  category2.style.color = "black";
  document.getElementById("categoryImage3").src =
    "https://assets.milaap.org/assets/home/memorial-transparent-icon-853c64d1299d9d300554a4bce17164bcf7e9ca3af8e99981ce23cf8822e8624f.png";
  category3.style.backgroundColor = "#691a47";
  category3.style.color = "white";
  document.getElementById("categoryImage4").src =
    "https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png";
  category4.style.backgroundColor = "white";
  category4.style.color = "black";
}

function changeColor4() {
  category1.style.backgroundColor = "white";
  category1.style.color = "black";
  document.getElementById("categoryImage1").src =
    "https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png";
  document.getElementById("categoryImage2").src =
    "https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png";
  category2.style.backgroundColor = "white";
  category2.style.color = "black";
  document.getElementById("categoryImage3").src =
    "https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png";
  category3.style.backgroundColor = "white";
  category3.style.color = "black";
  document.getElementById("categoryImage4").src =
    "https://assets.milaap.org/assets/home/all-transparent-icon-fcf68b3f1f58a4a35193630459f762a8a3e2a502804a372d68901d9ea25a443c.png";
  category4.style.backgroundColor = "#691a47";
  category4.style.color = "white";
}
