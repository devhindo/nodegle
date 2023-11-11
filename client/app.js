const serverURL = 'ws://localhost:8080';

const socket = io(serverURL);

socket.on('message', text => {
        const el = document.createElement('li');
        el.innerHTML = text;
        document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = () => {
        const text = document.querySelector('input').value;
        socket.emit('message', text);
};

document.querySelector('input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button').click();
    }
});
