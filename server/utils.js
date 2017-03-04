const data = require('./data');

const updateListMessage = (author, chat, message) => {
    if (data.messages[chat] === undefined) {
        data.messages[chat] = [];
    }
    data.messages[chat].push({author, message});

    if (data.messages[chat].length > data.listOfChats) {
        data.messages[chat] = data.messages[chat].slice(-1 * data.listOfChats);
    }
};

module.exports = {
    updateListMessage
};
