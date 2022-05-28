const $canvas = document.querySelector("#canvas");
const $clear = document.querySelector("#clear-button");
const ctx = $canvas.getContext("2d");


let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

$canvas.addEventListener("mousedown", e => {
    let cX = $canvas.getBoundingClientRect().left + window.scrollX;
    let cY = $canvas.getBoundingClientRect().top + window.scrollY;
    startX = e.pageX - cX;
    startY = e.pageY - cY;
});


$canvas.addEventListener("mouseup", e => {
    let cX = $canvas.getBoundingClientRect().left + window.scrollX;
    let cY = $canvas.getBoundingClientRect().top + window.scrollY;
    endX = e.pageX - cX;
    endY = e.pageY - cY;

    if (startX !== endX) {
        if (startY > endY) {
            let tempX = startX;
            let tempY = startY;
            startX = endX;
            startY = endY;
            endX = tempX;
            endY = tempY;
        }
        drawRectangle();
    }
});


// draws triangle with given x, y cords and random color
function drawRectangle() {
    ctx.beginPath();
    ctx.fillStyle = randomColor(); // method to get random color
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.moveTo(startX + (endX - startX) / 2, startY);
    ctx.lineTo(startX, endY);
    ctx.lineTo(endX, endY);
    ctx.lineTo(startX + (endX - startX) / 2, startY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}


// function returns random color from an array of predefined colors
function randomColor() {
    let colors = [
        "blue",
        "yellow",
        "pink",
        "orange",
        "red",
        "green"
    ];

    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// clear event to clear th canvas
$clear.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
});
