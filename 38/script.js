// let canvas = document.getElementById("canvas")
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
 window.omload = addlist()
 window.onload = addB()
 window.onload = addC()
 window.onload = addD()
 window.onload = addX()
 window.onload = addY()
 window.onload = addK()
 window.onload = addP()

 function addlist(){
     document.getElementById('A').addEventListener('mousedown', mouseDownA, false);
     window.addEventListener('mouseup', mouseUpA, false);
 }

 function mouseUpA(e)
 {
     window.removeEventListener('mousemove', divMoveA, true);
 }

 function mouseDownA(e){
   window.addEventListener('mousemove', divMoveA, true);
 }

 function divMoveA(e){
     var div = document.getElementById('A');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }


 //B
 function addB(){
     document.getElementById('B').addEventListener('mousedown', mouseDownB, false);
     window.addEventListener('mouseup', mouseUpB, false);

 }

 function mouseUpB(e)
 {
     window.removeEventListener('mousemove', divMoveB, true);
 }

 function mouseDownB(e){
   window.addEventListener('mousemove', divMoveB, true);
 }

 function divMoveB(e){
     var div = document.getElementById('B');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }
// //C
 function addC(){
     document.getElementById('C').addEventListener('mousedown', mouseDownC, false);
     window.addEventListener('mouseup', mouseUpC, false);

 }

 function mouseUpC(e)
 {
     window.removeEventListener('mousemove', divMoveC, true);
 }

 function mouseDownC(e){
   window.addEventListener('mousemove', divMoveC, true);
 }

 function divMoveC(e){
     var div = document.getElementById('C');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }


// //D
 function addD(){
     document.getElementById('D').addEventListener('mousedown', mouseDownD, false);
     window.addEventListener('mouseup', mouseUpD, false);
 }

 function mouseUpD(e)
 {
     window.removeEventListener('mousemove', divMoveD, true);
 }

 function mouseDownD(e){
   window.addEventListener('mousemove', divMoveD, true);
 }

 function divMoveD(e){
     var div = document.getElementById('D');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }

// //X
 function addX(){
     document.getElementById('X').addEventListener('mousedown', mouseDownX, false);
     window.addEventListener('mouseup', mouseUpX, false);

 }

 function mouseUpX(e)
 {
     window.removeEventListener('mousemove', divMoveX, true);
 }

 function mouseDownX(e){
   window.addEventListener('mousemove', divMoveX, true);
 }

 function divMoveX(e){
     var div = document.getElementById('X');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }

// //Y
 function addY(){
     document.getElementById('Y').addEventListener('mousedown', mouseDownY, false);
     window.addEventListener('mouseup', mouseUpY, false);

 }

 function mouseUpY(e)
 {
     window.removeEventListener('mousemove', divMoveY, true);
 }

 function mouseDownY(e){
   window.addEventListener('mousemove', divMoveY, true);
}

 function divMoveY(e){
     var div = document.getElementById('Y');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }


 //K
 function addK(){
     document.getElementById('K').addEventListener('mousedown', mouseDownK, false);
     window.addEventListener('mouseup', mouseUpK, false);

 }

 function mouseUpK(e)
 {
     window.removeEventListener('mousemove', divMoveK, true);
 }

 function mouseDownK(e){
   window.addEventListener('mousemove', divMoveK, true);
 }

 function divMoveK(e){
     var div = document.getElementById('K');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
   div.style.left = e.clientX + 'px';
 }

// //P
 function addP(){
     document.getElementById('P').addEventListener('mousedown', mouseDownP, false);
     window.addEventListener('mouseup', mouseUpP, false);

 }

 function mouseUpP(e)
 {
     window.removeEventListener('mousemove', divMoveP, true);
 }

 function mouseDownP(e){
   window.addEventListener('mousemove', divMoveP, true);
 }

 function divMoveP(e){
     var div = document.getElementById('P');
   div.style.position = 'absolute';
   div.style.top = e.clientY + 'px';
      div.style.left = e.clientX + 'px';
 }
















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

// const draw = () =>{
//     [A,B,C,D] = points

//     console.log(A,B,C,D)

// var ctx = document.getElementById("canvas").getContext("2d");




// ctx.beginPath();
// ctx.moveTo(A.x,A.y);
// ctx.lineTo(B.x,B.y);
// ctx.lineTo(C.x,C.y);
// ctx.lineTo(D.x,D.y);


// ctx.closePath()
// ctx.stroke()
// }


document.getElementById('turn').addEventListener('click',()=>{
     x = x+90
     document.getElementById('ruler').style.transform = `rotate(${x}deg)`

     // console.log(x)
//     // console.log(points)
//     // console.log(divPoints)
 })

// const intersect = () =>{
//   var ctx = document.getElementById("canvas").getContext("2d");
//   [A,B,C,D] = divPoints
//   ctx.beginPath()
//   ctx.moveTo(A.x,A.y);
//   ctx.lineTo(B.x,B.y);
//   ctx.stroke()

//   ctx.beginPath()
//   ctx.moveTo(C.x,C.y);
//   ctx.lineTo(D.x,D.y);
//   ctx.stroke()
// }

// setInterval(intersect,1000)
// // //intersection
// //
// // function getintersection(event){
// //     var rect = canvas.getBoundingClientRect();
// //     var x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
// //     var y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
// //
// //     // This method will handle the coordinates and will draw them in the canvas.
// //     drawCoordinates(x,y);
// //     let obj = {x:x,y:y}
// //     divPoints.push(obj)
// // }
// //
// // function intersect(x,y){
// //     var pointSize = 3; // Change according to the size of the point.
// //     var ctx = document.getElementById("canvas").getContext("2d");
// //
// //
// //     ctx.fillStyle = "black"; // Red color
// //
// //     ctx.beginPath(); //Start path
// //     ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
// //     ctx.fill(); // Close the path and fill.
// // }
// //
// //
// //
// //
// // const divide = () =>{
// //   ctx.beginPath()
// //   ctx.moveTo(A.x,A.y);
// //   ctx.lineTo(B.x,B.y);
// //   ctx.stroke()
// // }
// //

 document.getElementById('reset_btn').addEventListener('click',()=>{
     location.reload()
 })

// document.getElementById('join').addEventListener('click',()=>{
//     draw()
// })


 const check = ()=> {
   if(document.getElementById("f1").value =="2"){
        const img = document.createElement('img') // create img element on the fly
            img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
            img.classList.add("imgo");//add styling class
            document.getElementById("imgstatus1").innerHTML = "" //clear any appended elements inside the div
            document.getElementById("imgstatus1").append(img);
    }else{
        const img = document.createElement('img')
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("imgstatus1").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("imgstatus1").append(img);
    }

    if(document.getElementById("f2").value == "Bisector" || document.getElementById("f2").value == "bisector"){
         const img = document.createElement('img') // create img element on the fly
             img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
             img.classList.add("imgo");//add styling class
             document.getElementById("imgstatus2").innerHTML = "" //clear any appended elements inside the div
             document.getElementById("imgstatus2").append(img);
     }else{
         const img = document.createElement('img')
         img.src = 'imgs/sorry.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         document.getElementById("imgstatus2").innerHTML = "" //clear any appended elements inside the div
         document.getElementById("imgstatus2").append(img);
     }


     if(document.getElementById("f22").value == "Divides the shape into 2"){
          const img = document.createElement('img') // create img element on the fly
              img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
              img.classList.add("imgo");//add styling class
              document.getElementById("imgstatus22").innerHTML = "" //clear any appended elements inside the div
              document.getElementById("imgstatus22").append(img);
      }else{
          const img = document.createElement('img')
          img.src = 'imgs/sorry.png' //assign source to new img element
          img.classList.add("imgo");//add styling class
          document.getElementById("imgstatus22").innerHTML = "" //clear any appended elements inside the div
          document.getElementById("imgstatus22").append(img);
      }


      if(document.getElementById("f3").value == "same shape"){
           const img = document.createElement('img') // create img element on the fly
               img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
               img.classList.add("imgo");//add styling class
               document.getElementById("imgstatus3").innerHTML = "" //clear any appended elements inside the div
               document.getElementById("imgstatus3").append(img);
       }else{
           const img = document.createElement('img')
           img.src = 'imgs/sorry.png' //assign source to new img element
           img.classList.add("imgo");//add styling class
           document.getElementById("imgstatus3").innerHTML = "" //clear any appended elements inside the div
           document.getElementById("imgstatus3").append(img);
       }
       if(document.getElementById("f4").value == "same shape"){
            const img = document.createElement('img') // create img element on the fly
                img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                img.classList.add("imgo");//add styling class
                document.getElementById("imgstatus4").innerHTML = "" //clear any appended elements inside the div
                document.getElementById("imgstatus4").append(img);
        }else{
            const img = document.createElement('img')
            img.src = 'imgs/sorry.png' //assign source to new img element
            img.classList.add("imgo");//add styling class
            document.getElementById("imgstatus4").innerHTML = "" //clear any appended elements inside the div
            document.getElementById("imgstatus4").append(img);
        }
  }
  const display_check = () =>{
      if(document.getElementById("f1").value != "" && document.getElementById("f2").value != "" && document.getElementById("f3").value != "" && document.getElementById("f4").value != "" && document.getElementById("f22").value != ""){
          document.getElementById("check_btn").style.display="block"
     }else{
          document.getElementById("check_btn").style.display="none"
      }
  }


 setInterval(display_check,500);


// const previous = () =>{
//     document.getElementById('init').style.display = "block"
//     document.getElementById('late').style.display = "none"
// }
// const next = () =>{
//     document.getElementById('init').style.display = "none"
//     document.getElementById('late').style.display = "block"
// }


var canvas;
var context;
var  isDrawing;
window.onload = function() {
   canvas = document.getElementById('canvas');
   context = canvas.getContext('2d');
   canvas.width = 500;
   canvas.height = 300;
   context.strokeStyle = "black";
   context.lineWidth = 2;
   
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