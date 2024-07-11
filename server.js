const WebSocket = require('ws');
const strapi = require('strapi');

strapi().start().then(() => {
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', ws => {
    ws.on('message', message => {
      console.log('received: %s', message);
      ws.send(`Echo: ${message}`);
    });

    ws.send('Welcome to the WebSocket server!');
  });

  console.log('WebSocket server is running on ws://localhost:8080');
});