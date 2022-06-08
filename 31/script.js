let count = 0;
const next = () =>{
     location.href="part2.html"
} 

const reset = () =>{
    location.reload() 
}


const display_check = () =>{
    if(document.getElementById("ans1").value != "" && document.getElementById("ans2").value != ""){
        document.getElementById("check_btn").style.display="block"
    }else{
        document.getElementById("check_btn").style.display="none"
    }
}
    
setInterval(display_check,500);

const check = () =>{
    count++;
    if(document.getElementById("ans1").value == "116km" || document.getElementById("ans1").value == "116 km"){
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
    if(document.getElementById("ans2").value == "20"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status2").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status2").append(img);  // append excellent image
    }else{
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status2").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status2").append(img);  // append excellent image
    }

     if(count == 3){
         document.getElementById("ans1").value = "116 km"
         document.getElementById("ans2").value = "20"
         document.getElementById("canvas").style.display = "none"
         document.getElementById("correctbearingimg").style.display = "block"
    }
    // if(document.getElementById("ans3").value == "138km"){
    //     const img = document.createElement('img') // create img element on the fly
    //     img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
    //     img.classList.add("imgo");//add styling class
    //     document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
    //     document.getElementById("status1").append(img);  // append excellent image
    // }else{
    //     const img = document.createElement('img') // create img element on the fly
    //     img.src = 'imgs/sorry.png' //assign source to new img element
    //     img.classList.add("imgo");//add styling class
    //     document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
    //     document.getElementById("status1").append(img);  // append excellent image
    // }

    if(document.getElementById("ans1").value == "116km" && document.getElementById("ans2").value == "20"){
        setTimeout(next,1000)
    }
}









 let x =0;
// let points  = []
// let divPoints = []
// // Event will be a click event which can be retrieved as first parameter in the addEventListener(function(event){}); or in jQuery with $("selector").click(function(event){});
// function getPosition(event){
//     var rect = canvas.getBoundingClientRect();
//     var x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
//     var y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document

//     // This method will handle the coordinates and will draw them in the canvas.
//     drawCoordinates(x,y);
//     let obj = {x:x,y:y}
//     if(points.length<4){
//       points.push(obj)
//     }else{
//       divPoints.push(obj)
//     }
// }

// function drawCoordinates(x,y){
//     var pointSize = 3; // Change according to the size of the point.
//     var ctx = document.getElementById("canvas").getContext("2d");


//     ctx.fillStyle = "black"; // Red color

//     ctx.beginPath(); //Start path
//     ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
//     ctx.fill(); // Close the path and fill.
// }






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

var canvas;
var context;
var  isDrawing;
window.onload = function() {
   canvas = document.getElementById('canvas');
   context = canvas.getContext('2d');
   canvas.width = 635;
   canvas.height = 470;
   context.strokeStyle = "black";
   context.lineWidth = 1;
   
   canvas.onmousedown = startDrawing;
   canvas.onmouseup = stopDrawing;
   canvas.onmousemove = draw;
   
   function startDrawing(e) {
      isDrawing = true;
      context.beginPath();
      context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
   }
   
   function draw(e) {
      if (isDrawing == true) {
         var x = e.pageX - canvas.offsetLeft;
         var y = e.pageY - canvas.offsetTop;
      
         context.lineTo(x, y);
         context.stroke();
      }
   }
   
   function stopDrawing() {
      isDrawing = false;
   }
   
   /*var coord = document.getElementById("coord");
   canvas.onmousemove = function(e) {
      coord.value = e.pageX+" "+e.pageY+" / "+(e.pageX-canvas.offsetLeft)+" "+(e.pageY-canvas.offsetTop);
   }*/
}

