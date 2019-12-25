var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var button = document.getElementById('button');
var mouse_x, mouse_y;
var state = false;
var color = 0;

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 100;

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
button.addEventListener('click', clearButton);

function clearButton(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mouseDown(e){
    state = true;
    mouse_x = e.clientX;
    mouse_y = e.clientY;
}

function mouseUp(e){
    state = false;
}

function mouseMove(e){
    if(!state)return;

    var wid = Math.random() * 20;

    color++;
    ctx.strokeStyle = 'hsl('+color+', 100%, 50%)';
    ctx.lineWidth = wid;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(mouse_x, mouse_y);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    mouse_x = e.clientX;
    mouse_y = e.clientY;
}
