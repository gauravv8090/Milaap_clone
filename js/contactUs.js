document.querySelector(".homebtn").addEventListener("click", function () {
  location.href = "index.html";
});

document.querySelector(".donatebtn").addEventListener("click", function () {
  location.href = "donate.html";
});

document.querySelector(".reviewbtn").addEventListener("click", function () {
  location.href = "review.html";
});

document.querySelector(".pricingbtn").addEventListener("click", function () {
  location.href = "pricing.html";
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

var doc = document.querySelectorAll(".yes");
//    document.querySelector(".yes").addEventListener("click", loChange);
//    function location(){}
console.log(doc);
var cdata = document.getElementById("data");
doc.forEach(function (elem) {
  console.log(elem.innerHTML);
  elem.addEventListener("click", function () {
    change(elem);
  });
  // if(elem.innerHTML=="US"){
  // cdata.innerText= "yes";
  // }
});
//    var usDATA= {
//     add: "Milaap Social Ventures Pte. Ltd.",
//     add1: "C/O Jungle Ventures,",
//     add3: "79 Ayer Rajah Crescent, Block 79,",
//     add4: "Singapore 139955"
//    }
//    localStorage.setItem("usData", JSON.stringify( usDATA));
//    var ans= JSON.parse(localStorage.getItem("usData"));
//    console.log(ans);
var USp = document.createElement("p");
USp.innerText = "Milaap Social Ventures  USA Pvt. Ltd.";
var USp2 = document.createElement("p");
USp2.innerText = "311 North Market Street - Suite 200";
var USp3 = document.createElement("p");
USp3.innerText = "Dallas, TX 75202";
var calUS = document.createElement("span");
calUS.setAttribute("class", "material-symbols-outlined");
calUS.innerText = "call";
var USp4 = document.createElement("a");
USp4.innerText = "   +1 (805) 590-7978";
var dd = document.createElement("div");
dd.setAttribute("id", "dd");
dd.append(calUS, USp4);
var mailUS = document.createElement("span");
mailUS.setAttribute("class", "material-symbols-outlined");
mailUS.innerText = "mail";
var usp5 = document.createElement("a");
usp5.innerText = "feedback@milaap.org";
var mm = document.createElement("div");
dd.setAttribute("id", "mm");
mm.append(mailUS, usp5);

var Sin = document.createElement("p");
Sin.innerText = "Milaap Social Ventures  USA Pvt. Ltd.";
var Sin2 = document.createElement("p");
Sin2.innerText = "C/O Jungle Ventures,";
var Sin3 = document.createElement("p");
Sin3.innerText = "79 Ayer Rajah Crescent, Block 79,";
var Sin9 = document.createElement("p");
Sin9.innerText = "Singapore 139955";
//    var calUS= document.createElement("span");
//    calUS.setAttribute("class", "material-symbols-outlined");
//    calUS.innerText= "call";
var Sin4 = document.createElement("a");
Sin4.innerText = "  (+65) 3129 5466";
var dd = document.createElement("div");
dd.setAttribute("id", "dd");
dd.append(calUS, Sin4);
//    var mailUS= document.createElement("span");
//    mailUS.setAttribute("class", "material-symbols-outlined");
//    mailUS.innerText= "mail";
var Sin5 = document.createElement("a");
Sin5.innerText = "mayukh@milaap.org";
var mm = document.createElement("div");
dd.setAttribute("id", "mm");
mm.append(mailUS, Sin5);

function change(ele) {
  if (ele.innerHTML == "US") {
    cdata.innerText = "";
    document.getElementById("data").append(USp);
    document.getElementById("data").append(USp2);
    document.getElementById("data").append(USp3);
    document.getElementById("data").append(mm);
    document.getElementById("data").append(dd);
    // document.getElementById("data").append(USp4);

    console.log("yes");
  } else if (ele.innerHTML == "SINGAPORE") {
    cdata.innerText = "";
    document.getElementById("data").append(Sin);
    document.getElementById("data").append(Sin2);
    document.getElementById("data").append(Sin3);
    document.getElementById("data").append(Sin9);
    document.getElementById("data").append(mm);
    document.getElementById("data").append(dd);
    console.log("yes123");
  }
}
document.getElementById("last").addEventListener("click", lastfun);
function lastfun() {
  alert("Your suggestion has been submitted");
  document.querySelector(".inpx").value = "";
  document.querySelector(".inpx2").value = "";
  document.querySelector("#inpx1").value = "";
}
//  function change(ele){
//     if(ele.innerHTML=="SINGAPORE"){
//         console.log("yes123");
//     }
//  }
// var country= document.querySelector(".yes");
// console.log(country);
//      var Cobj= {
//         add:"Milaap Social Ventures Pte. Ltd",
//      }
//      function addfun(){
//         if(country.innerText== "INDIA"){

//            console.log("yes");
//         }
//      }
