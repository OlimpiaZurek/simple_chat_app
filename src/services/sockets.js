import socketIOClient from 'socket.io-client';

export const socket = socketIOClient.connect('ws://localhost:3000');

export const addUserToSocketService = (user) => {
    return socket.emit('user', user);
};

export const addMessageToSocketService = (message) => {
    return socket.emit('message', message);
};
