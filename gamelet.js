const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let x = 0;
let y = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        x = x - 10;
    }
    else if (e.code === 'ArrowRight') {
        x = x + 10;
    }
    else if (e.code === 'ArrowUp') {
        y = y - 10;
    }
    else {
        y = y + 10;
    }
    if (x < 0) {
        x = 0;
    } else if (y < 0) {
        y = 0;
    }
    refresh();
}

function refresh() {
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}