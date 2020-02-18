function replace() {
  document.getElementById("cover").classList.add("disable-cover");
  document.getElementById("cover").style.display = "none";
  document.getElementById("essence").style.display = "block";
  document.getElementById("ab").classList.add("selected-page");
  document.getElementById("about").style.display = "flex";
  document.getElementById("creations").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function cover() {
  document.getElementById("cover").style.display = "flex";
  document.getElementById("essence").style.display = "none";
  document.getElementById("co").classList.remove("selected-page");
  document.getElementById("ab").classList.remove("selected-page");
  document.getElementById("cr").classList.remove("selected-page");
}

function about() {
  document.getElementById("about").style.display = "flex";
  document.getElementById("creations").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById("ab").classList.add("selected-page");
  document.getElementById("cr").classList.remove("selected-page");
  document.getElementById("co").classList.remove("selected-page");
}
function creations() {
  document.getElementById("creations").style.display = "flex";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById("cr").classList.add("selected-page");
  document.getElementById("co").classList.remove("selected-page");
  document.getElementById("ab").classList.remove("selected-page");
  document.getElementById("cd1").classList.add("cda");
  document.getElementById("cd2").classList.remove("cda");
  document.getElementById("creations12").style.display = "flex";
  document.getElementById("creations34").style.display = "none";
}
function contact() {
  document.getElementById("contact").style.display = "flex";
  document.getElementById("about").style.display = "none";
  document.getElementById("creations").style.display = "none";

  document.getElementById("co").classList.add("selected-page");
  document.getElementById("ab").classList.remove("selected-page");
  document.getElementById("cr").classList.remove("selected-page");
}

// video bg

// let video = document.querySelector("video");

// const setVideoDimensions = () => {
//   if (window.innerWidth / window.innerHeight > 16 / 9) {
//     video.style.width = "100vw";
//     video.style.height = "calc(100vw * 9 / 16)";
//   } else {
//     video.style.width = "calc(100vh * 16 / 9)";
//     video.style.height = "100vh";
//   }
// };

// window.onresize = setVideoDimensions;
// setVideoDimensions();

// copy to clipboard

function copy() {
  var copyText = document.getElementById("email");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function okay() {
  document.getElementById("success").style.display = "none";
}

var inp = document.getElementById("email");
inp.addEventListener(
  "select",
  function() {
    this.selectionStart = this.selectionEnd;
  },
  false
);

// rea

function rea1() {
  document.getElementById("sq1").classList.add("q-fil");
  document.getElementById("sq2").classList.remove("q-fil");
  document.getElementById("sq3").classList.remove("q-fil");
  document.getElementById("sq4").classList.remove("q-fil");

  document.getElementById("sa1").classList.add("a-fil");
  document.getElementById("sa2").classList.remove("a-fil");
  document.getElementById("sa3").classList.remove("a-fil");
  document.getElementById("sa4").classList.remove("a-fil");
}
function rea2() {
  document.getElementById("sq1").classList.remove("q-fil");
  document.getElementById("sq2").classList.add("q-fil");
  document.getElementById("sq3").classList.remove("q-fil");
  document.getElementById("sq4").classList.remove("q-fil");

  document.getElementById("sa1").classList.remove("a-fil");
  document.getElementById("sa2").classList.add("a-fil");
  document.getElementById("sa3").classList.remove("a-fil");
  document.getElementById("sa4").classList.remove("a-fil");
}
function rea3() {
  document.getElementById("sq1").classList.remove("q-fil");
  document.getElementById("sq2").classList.remove("q-fil");
  document.getElementById("sq3").classList.add("q-fil");
  document.getElementById("sq4").classList.remove("q-fil");

  document.getElementById("sa1").classList.remove("a-fil");
  document.getElementById("sa2").classList.remove("a-fil");
  document.getElementById("sa3").classList.add("a-fil");
  document.getElementById("sa4").classList.remove("a-fil");
}
function rea4() {
  document.getElementById("sq1").classList.remove("q-fil");
  document.getElementById("sq2").classList.remove("q-fil");
  document.getElementById("sq3").classList.remove("q-fil");
  document.getElementById("sq4").classList.add("q-fil");

  document.getElementById("sa1").classList.remove("a-fil");
  document.getElementById("sa2").classList.remove("a-fil");
  document.getElementById("sa3").classList.remove("a-fil");
  document.getElementById("sa4").classList.add("a-fil");
}

function rede() {
  document.getElementById("des").style.display = "none";
  document.getElementById("des1").style.display = "flex";
}
function serviceBackD() {
  document.getElementById("des").style.display = "flex";
  document.getElementById("des1").style.display = "none";
}
function reco() {
  document.getElementById("cod").style.display = "none";
  document.getElementById("cod1").style.display = "flex";
}
function serviceBackC() {
  document.getElementById("cod").style.display = "flex";
  document.getElementById("cod1").style.display = "none";
}
function remu() {
  document.getElementById("mul").style.display = "none";
  document.getElementById("mul1").style.display = "flex";
}
function serviceBackM() {
  document.getElementById("mul").style.display = "flex";
  document.getElementById("mul1").style.display = "none";
}
function ft() {
  document.getElementById("creations12").style.display = "flex";
  document.getElementById("creations34").style.display = "none";
  document.getElementById("cd1").classList.add("cda");
  document.getElementById("cd2").classList.remove("cda");
}
function st() {
  document.getElementById("creations34").style.display = "flex";
  document.getElementById("creations12").style.display = "none";
  document.getElementById("cd2").classList.add("cda");
  document.getElementById("cd1").classList.remove("cda");
}

function cc() {
  var x = document.getElementById("creations12");
  var y = document.getElementById("creations34");

  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
    document.getElementById("cd1").classList.add("cda");
    document.getElementById("cd2").classList.remove("cda");
  } else {
    x.style.display = "none";
    y.style.display = "flex";
    document.getElementById("cd2").classList.add("cda");
    document.getElementById("cd1").classList.remove("cda");
  }
}

var texts = new Array();
texts.push("Text1");
texts.push("Text2");

var point = 0;

function changeText() {
  $("#cookie-alert .col h3 span").html(texts[point]);
  if (point < texts.length - 1) {
    point++;
  } else {
    point = 0;
  }
}
