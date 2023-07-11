const mario = document.getElementById('mario');

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight') {
        moveMario(10);
    } else if (event.code === 'ArrowLeft') {
        moveMario(-10);
    }
});

function moveMario(amount) {
    const currentLeft = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
    mario.style.left = (currentLeft + amount) + 'px';
}
