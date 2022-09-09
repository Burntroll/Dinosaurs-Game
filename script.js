const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        jump();
    }
}

function jump() {
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //going down
            let downInterval = setInterval(() => {
                if (position <= 20) {
                    clearInterval(downInterval);
                }
                position -= 20;
                dino.style.bottom = position + "px";
            }, 20)
        } else{
            //going up
            position += 20;

            dino.style.bottom = position + "px";
            }
    }, 20)
}

document.addEventListener('keyup', handleKeyUp);