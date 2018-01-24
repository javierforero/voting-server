import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);
// subscribes the store to return the current state everytime that there is a change
  store.subscribe(() => {
      io.emit('state', store.getState().toJS())
  });
 
//  gets the current state when a user first connects
  io.on('connection', (socket) => {
      socket.emit('state', store.getState().toJS());
      socket.on('action', store.dispatch.bind(store));
  });
}