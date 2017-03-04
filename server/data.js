// port for websocket
const port = 8088;

// chats with data
const messages = {
    'pro.js': [],
    'Клуб избранных': [],
    'English': [],
    'Александр': [],
    'Чат 5': []
};

// limit of messages for each chat
const limitOfMessages = 30;

// list of chats
const listOfChats = Object.keys(messages);

module.exports = {
    port,
    messages,
    limitOfMessages,
    listOfChats
};
