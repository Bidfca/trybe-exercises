const socket = window.io();

document.getElementById('likeIcon').addEventListener('click', () => {
    socket.emit('likePost');
});

document.getElementById('starIcon').addEventListener('click', () => {
    socket.emit('starPost');

    const currentStars = document.getElementById('currentStars');
    currentStars.innerText = Number(currentStars.innerText) + 1;
});

socket.on('updateLikes', (likes) => {
    document.getElementById('currentLikes').innerText = likes;
});

socket.on('updateStars', (stars) => {
    document.getElementById('currentStars').innerText = stars;
});