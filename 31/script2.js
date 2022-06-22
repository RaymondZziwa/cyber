let count = 0;
const reset = () =>{
    location.reload() 
}


const display_check = () =>{
    if(document.getElementById("ans1").value != ""){
        document.getElementById("check_btn").style.display="block"
    }else{
        document.getElementById("check_btn").style.display="none"
    }
}
    
setInterval(display_check,500);

const check = () =>{
    count++;
    if(document.getElementById("ans1").value == "138km" || document.getElementById("ans1").value == "138 km"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status1").append(img);  // append excellent image
    }else{
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status1").append(img);  // append excellent image
    }
   
     if(count == 3){
         document.getElementById("ans1").value = "116 km"
         document.getElementById("canvas").style.display = "none"
         document.getElementById("correctbearingimg").style.display = "block"
    }
}









 let x =0;




 window.onload = addListeners();
 window.onload = addpListeners();


 function addListeners(){
     document.getElementById('ruler').addEventListener('mousedown', mouseDown, false);
     window.addEventListener('mouseup', mouseUp, false);

 }

 function mouseUp(e)
 {
     window.removeEventListener('mousemove', divMove, true);
 }

 function mouseDown(e){
   window.addEventListener('mousemove', divMove, true);
 }

 function divMove(e){
     var div = document.getElementById('ruler');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }

document.getElementById('turn').addEventListener('click',()=>{
     x = x+5
     document.getElementById('ruler').style.transform = `rotate(${x}deg)`
 })


function addpListeners(){
     document.getElementById('prot').addEventListener('mousedown', mousepDown, false);
     window.addEventListener('mouseup', mousepUp, false);

 }

 function mousepUp(e)
 {
     window.removeEventListener('mousemove', divpMove, true);
 }

 function mousepDown(e){
   window.addEventListener('mousemove', divpMove, true);
 }

 function divpMove(e){
     var div = document.getElementById('prot');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }

document.getElementById('turnp').addEventListener('click',()=>{
     x = x+5
     document.getElementById('prot').style.transform = `rotate(${x}deg)`
 })

















 document.getElementById('reset_btn').addEventListener('click',()=>{
     location.reload()
 })

// var canvas;
// var context;
// var  isDrawing;
// window.onload = function() {
//    canvas = document.getElementById('canvas');
//    context = canvas.getContext('2d');
//    canvas.width = 635;
//    canvas.height = 470;
//    context.strokeStyle = "black";
//    context.lineWidth = 1;
   
//    canvas.onmousedown = startDrawing;
//    canvas.onmouseup = stopDrawing;
//    canvas.onmousemove = draw;
   
//    function startDrawing(e) {
//       isDrawing = true;
//       context.beginPath();
//       context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
//    }
   
//    function draw(e) {
//       if (isDrawing == true) {
//          var x = e.pageX - canvas.offsetLeft;
//          var y = e.pageY - canvas.offsetTop;
      
//          context.lineTo(x, y);
//          context.stroke();
//       }
//    }
   
//    function stopDrawing() {
//       isDrawing = false;
//    }
   
//    /*var coord = document.getElementById("coord");
//    canvas.onmousemove = function(e) {
//       coord.value = e.pageX+" "+e.pageY+" / "+(e.pageX-canvas.offsetLeft)+" "+(e.pageY-canvas.offsetTop);
//    }*/
// }

let oldX = null;
let oldY = null;
let moveX = null;
let moveY = null;
let pX = null;
let pY = null;
let can_mouse_event = false;
let storedLines = [];

const can = document.getElementById("canvas");
const ctx = can.getContext("2d");

can.onmousedown = function(e){
    oldX = e.offsetX;
    oldY = e.offsetY;
    can_mouse_event = true;
};

can.onmousemove = function(e){
    if(can_mouse_event == true){
        Redraw();
        moveX = e.offsetX;
        moveY = e.offsetY;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.lineJoin  = "round";
        ctx.lineCap   = "round";
        ctx.beginPath();
        ctx.moveTo(oldX,oldY);
        ctx.lineTo(moveX,moveY);
        ctx.stroke();
    }
};

function Redraw(){
    ctx.clearRect(0,0,can.width,can.height);
    if(storedLines.length == 0){
        return;
    }
    for(let i = 0; i<storedLines.length; i++){
        ctx.beginPath();
        ctx.moveTo(storedLines[i].x1, storedLines[i].y1);
        ctx.lineTo(storedLines[i].x2, storedLines[i].y2);
        ctx.stroke();
    }
}

can.onmouseup = function(e){
    can_mouse_event = false;
    pX = e.offsetX;
    pY = e.offsetY;
    storedLines.push({
        x1:oldX,
        y1:oldY,
        x2:pX,
        y2:pY
    })
};

can.onmouseout = function(){
    can_mouse_event = false;
};

// const clear_btn = document.getElementById("clear_btn");
// clear_btn.onclick = function(){
//     ctx.beginPath();
//     ctx.clearRect(0,0,can.width,can.height);
//   storedLines.length=0;
// };