// /config/functions/bootstrap.js
module.exports = async () => {
    const io = require('socket.io')(strapi.server);
  
    io.on('connection', socket => {
      console.log('a user connected');
  
      socket.on('message', (msg) => {
        console.log('message: ' + msg);
        socket.send(msg);
      });
  
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  
    strapi.io = io;
  };
  