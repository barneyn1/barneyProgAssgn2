//ABCs of CSS Technology JS
//HTML doc variables
const aBtn = document.getElementById("aBtn");
const bBtn = document.getElementById("bBtn");
const cBtn = document.getElementById("cBtn");
const hideBtnA = document.getElementById("hideBtnA");
const hideBtnB = document.getElementById("hideBtnB");
const hideBtnC = document.getElementById("hideBtnC");

//variables
let hCA = "hCA";
let hCB = "hCB";
let hCC = "hCC";

//functions
function showImg(hC) {
	document.getElementById(hC).style.visibility = "visible";
}

function hideImg(hC) {
	document.getElementById(hC).style.visibility = "hidden";
}

aBtn.addEventListener("click", function () {showImg(hCA)});
bBtn.addEventListener("click", function () {showImg(hCB)});
cBtn.addEventListener("click", function () {showImg(hCC)});
hideBtnA.addEventListener("click", function () {hideImg(hCA)});
hideBtnB.addEventListener("click", function () {hideImg(hCB)});
hideBtnC.addEventListener("click", function () {hideImg(hCC)});