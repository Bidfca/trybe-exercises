let likes = 0;
let stars = 0;

const incrementLikes = () => {
    likes += 1;
}

const incrementStars = () => {
    stars += 1;
}

module.exports = (io) => io.on('connection',
(socket) => {  

    socket.emit('updateLikes', likes);
    socket.emit('updateStars', stars);

    socket.on('likePost', () => {
        incrementLikes();
        io.emit('updateLikes', likes);
    });
    
    socket.on('starPost', () => {
        incrementStars();
        socket.broadcast.emit('updateStars', stars);
    });
});