const textime = document.querySelector(".time");
const colorTime  =document.querySelector(".color");

let hours;
let minutes;
let seconds;

let currentTime;
let hexTimeColor;

function setUpHexTimeColor(){
    if(Number(hours) < 10){
        hours = [0, hours].join("");
    }
    if(Number(minutes) < 10){
        minutes = [0, minutes].join("");
    }
    if(Number(seconds) < 10){
        seconds = [0, seconds].join("");
    }
    hexTimeColor = [hours,minutes,seconds].join("");
}

setInterval(function() {
    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    currentTime = `${hours}:${minutes}:${seconds}`;
    setUpHexTimeColor();
    textime.textContent = "TIME: ";
    colorTime.textContent = "COLOR: #";
    textime.textContent += currentTime;
    colorTime.textContent += hexTimeColor;
    document.body.style.backgroundColor = "#"+String(hexTimeColor);
}, 1000);