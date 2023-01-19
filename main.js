var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var lastx,lasty;
var currentx,currenty;
var color="red";
var width_of_line=1;
var width_of_screen=screen.width;
var height_of_screen=screen.height;
var new_width=width_of_screen-70;
var new_height=height_of_screen-300;
if(width_of_screen<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";


}

canvas.addEventListener("touchstart",ts);
function ts(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
lastx=e.touches[0].clientX-canvas.offsetLeft;
lasty=e.touches[0].clientY-canvas.offsetTop;


}

canvas.addEventListener("touchmove",tm);
function tm(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();

        
    lastx=currentx;
    lasty=currenty;



}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}