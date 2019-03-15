import express from 'express';
import http from 'http';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
let server = new http.Server(app);
let io = require('socket.io')(server);

io.on('connection', (socket) =>  {
  socket.on('message', (message) => {
     socket.broadcast.emit('message', message);
  });

  socket.on('user', (users) => {
    const { user, userId } = users;
    socket.broadcast.emit('add user', {
      user,
      userId,
    });
  });

});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
