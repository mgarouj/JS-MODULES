const messageBuffer = [];

messageBuffer.push({ sender: 'login1', text: 'gg' });
console.log(messageBuffer);
messageBuffer.push({ sender: 'login2', text: 'well plated '});
console.log(messageBuffer);
const restartMessage = messageBuffer.pop();
console.log(messageBuffer);
console.log(restartMessage);