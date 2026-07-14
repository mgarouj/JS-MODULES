const activeConnections = ['socket_101', 'socket_202', 'socket_303', 'socket_404'];// Find the index of the socket that just disconnected
const disconnectIndex = activeConnections.indexOf('socket_202');

console.log(disconnectIndex);

if (disconnectIndex !== -1) {
    // Remove 1 element starting at the disconnectIndex
    activeConnections.splice(disconnectIndex, 1);
}

console.log(activeConnections); // ['socket_101', 'socket_303', 'socket_404']