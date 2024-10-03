if (top.location != location) {
  top.location.href = location.href;
}

function reopen() {
  window.open(
    "popup.html",
    "",
    "menubar=no,status=no,toolbar=no,resizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}

function spam() {
  for (var i = 0; i < 10; i++) {
    reopen();
  }
  return "You are an idiot!";
}

function init() {
  document.body.onclick = reopen;
  document.body.onmouseover = reopen;
  document.body.onmousemove = reopen;
  window.onunload = spam;
  window.onbeforeunload = spam;
  playBall();
  reopen();
  setTimeout(function () {
    window.close();
  }, 10000);
}

var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100,
  flagRun = true;

function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}

function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
}

function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
}

function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('prank-audio');

  const playAudio = () => {
      audio.play().catch(() => {
          document.body.addEventListener('click', () => {
              audio.play();
          }, { once: true });
      });
  };

  playAudio();

  document.body.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
  });
});
