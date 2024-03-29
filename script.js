const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

let isJumping = false;
let position = 0;

function handleKeyDown(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 130) {
      clearInterval(upInterval);

      //going down
      let downInterval = setInterval(() => {
        if (position <= 20) {
          clearInterval(downInterval);
          isJumping = false;
        }
        position -= 15;
        dino.style.bottom = position + "px";
      }, 20);
    } else {
      //going up
      position += 15;

      dino.style.bottom = position + "px";
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1200;
  let randomTime = Math.random() * 5000;

  cactus.classList.add("cactus");
  cactus.style.left = 1200 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      //Game Over
      clearInterval(leftInterval);
      document.body.innerHTML = `<h1 class="game-over">Game Over</h1>`;
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keydown", handleKeyDown);
