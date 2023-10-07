var timer = 60;
var hitrn = 0;

function runtimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1 >Game Over</h1>`;
    }
  }, 1000);
}

function NewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}
var score = 0;
function NewScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function MaekBubbles() {
  var cluter = "";
  for (var i = 1; i <= 112; i++) {
    var random = Math.floor(Math.random() * 10);
    cluter += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = cluter;
}

document.querySelector("#pbtm").addEventListener("click", function (detals) {
  var click = Number(detals.target.textContent);
  //   console.log(click);
  //   console.log(hitrn);
  if (click == hitrn) {
    NewHit();
    NewScore();
    MaekBubbles();
  }
});

runtimer();
NewHit();
NewScore();
MaekBubbles();
