const data = require('./data');
const utils = require('./utils');

const PORT = process.env.PORT || data.port;

console.log(PORT);

// specify port for socket.io
const io = require('socket.io')(PORT);

io.on('connection', socket => {
    // on server initialization emits list of chats
    socket.emit('chatsList', data.listOfChats);

    // saves new message and broadcasts
    socket.on('newMessage', message => {
        utils.updateListMessage(message.author, message.chat, message.message);

        socket.emit('newMessage', message);
        socket.broadcast.emit('newMessage', message);
    });

    // sends messages for chat
    socket.on('getLog', chat => socket.emit('getLog', data.messages[chat] || []));
});
