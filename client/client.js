//Establishing a connection with the server on port 5500y
const socket = io('http://localhost:3000');
//Client sends a message at the moment it got connected with the server
socket.emit('clientToServer', "Hello, server!");

var ChatArea = document.querySelector('.Write');
var TxtCon = document.querySelector('.TextArea');
var inputValue = document.getElementById('Input');
var UserValue = document.getElementById('username');
var IconSend = document.querySelector('.icon');
var btn = document.querySelector('.btn-user');

function getUser(){
    btn.style.opacity = "0";
    UserValue.style.opacity = "0";
    TxtCon.style.animationName = "ChatAnimate";
    ChatArea.style.animationName = "WriteAnimate"
var interval = setInterval(()=>{
            TxtCon.style.height = "400px";
            ChatArea.style.height = "301px";
            clearInterval(interval);
    },2000)
}

IconSend.addEventListener('click', ()=>{
   socket.emit('clientToClient', `${UserValue.value}: ${inputValue.value}`);        
var h1 = document.createElement('h1');
           h1.classList.add('h1Property');
                   h1.innerText = `${UserValue.value}: ${inputValue.value}`;
        ChatArea.appendChild(h1);
inputValue.value = null;
})

//Callback function fires on the event called 'serverToClient'
socket.on('serverToClient', (data) => {
    var h1 = document.createElement('h1');
              h1.classList.add('h1Property');
                 h1.innerText = data;
    ChatArea.appendChild(h1);   
})

