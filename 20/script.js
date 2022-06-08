let canvas = document.getElementById("canvas")
let x =0;
let k =1
let points  = []
let divPoints = []
// Event will be a click event which can be retrieved as first parameter in the addEventListener(function(event){}); or in jQuery with $("selector").click(function(event){});
function getPosition(event){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
    var y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document

    // This method will handle the coordinates and will draw them in the canvas.
    drawCoordinates(x,y);
    let obj = {x:x,y:y}
     points.push(obj)
}

function drawCoordinates(x,y){
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("canvas").getContext("2d");


    ctx.fillStyle = "black"; // Red color

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
    console.log(points)
}


const reset = () =>{
  location.reload()
}


//
const check = ()=> {
      if(document.getElementById("pts").src.indexOf("imgs/1.png")!=-1 && points[0].x == 334 && points[0].y == 187 ||points[0].y == 186    && points[1].x == 313 && points[1].y == 187||points[1].y == 186  && points[2].x == 293 && points[2].y == 207 ||points[2].y == 206 && points[3].x == 313 && points[3].y == 249 ||points[3].y == 248 && points[4].x == 334 && points[4].y == 249 ||points[4].y == 248 && points[5].x == 355 && points[5].y == 228 ||points[5].y == 227 && points[6].x == 355 && points[6].y== 207 ||points[6].y == 206){
        if(document.getElementById("f1").value =="octagon" && document.getElementById("f2").value =="8"){
                const img = document.createElement('img') // create img element on the fly
                img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                img.classList.add("imgo");//add styling class
                document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                document.getElementById("status").append(img);
         }else{
           const img = document.createElement('img')
                 img.src = 'imgs/sorry.png' //assign source to new img element
                 img.classList.add("imgo");//add styling class
                 document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                 document.getElementById("status").append(img);
         }
      }else if(document.getElementById("pts").src.indexOf("imgs/2.png")!=-1 && points[0].x == 251 && points[0].y == 456 ||points[0].y == 455 && points[1].x == 251 && points[1].y == 415 ||points[1].y == 414 && points[2].x == 396 && points[2].y == 456 || points[2].y == 455){
        if(document.getElementById("f1").value =="triangle" && document.getElementById("f2").value =="3"){
                const img = document.createElement('img') // create img element on the fly
                img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                img.classList.add("imgo");//add styling class
                document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                document.getElementById("status").append(img);
         }else{
           const img = document.createElement('img')
                 img.src = 'imgs/sorry.png' //assign source to new img element
                 img.classList.add("imgo");//add styling class
                 document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                 document.getElementById("status").append(img);
         }
      }else if(document.getElementById("pts").src.indexOf("imgs/3.png")!=-1 && points[0].x == 436 && points[0].y == 270 ||points[0].y == 269 && points[1].x == 375 && points[1].y == 228 ||points[1].y == 227 && points[2].x == 375 && points[2].y == 311 || points[2].y == 310){
        if(document.getElementById("f1").value =="triangle"  && document.getElementById("f2").value =="3"){
                  const img = document.createElement('img') // create img element on the fly
                  img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                  img.classList.add("imgo");//add styling class
                  document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                  document.getElementById("status").append(img);
           }else{
             const img = document.createElement('img')
                   img.src = 'imgs/sorry.png' //assign source to new img element
                   img.classList.add("imgo");//add styling class
                   document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                   document.getElementById("status").append(img);
           }
      }else if(document.getElementById("pts").src.indexOf("imgs/4.png")!=-1 && points[0].x == 85 && points[0].y == 353 ||points[0].y == 352 && points[1].x == 85 && points[1].y == 414 ||points[1].y == 413 && points[2].x == 147 && points[2].y == 414 || points[2].y == 413 && points[3].x == 147 && points[3].y == 352 || points[3].y == 351){
            if(document.getElementById("f1").value =="square" && document.getElementById("f2").value =="4"){
                  const img = document.createElement('img') // create img element on the fly
                       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                       img.classList.add("imgo");//add styling class
                       document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                       document.getElementById("status").append(img);
            }else{
              const img = document.createElement('img')
                    img.src = 'imgs/sorry.png' //assign source to new img element
                    img.classList.add("imgo");//add styling class
                    document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                    document.getElementById("status").append(img);
            }
      }else if(document.getElementById("pts").src.indexOf("imgs/5.png")!=-1 && points[0].x == 85 && points[0].y == 353 ||points[0].y == 352 && points[1].x == 85 && points[1].y == 414 ||points[1].y == 413 && points[2].x == 147 && points[2].y == 414 || points[2].y == 413 && points[3].x == 147 && points[3].y == 352 || points[3].y == 351){
            if(document.getElementById("f1").value =="square" && document.getElementById("f2").value =="4"){
                  const img = document.createElement('img') // create img element on the fly
                       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
                       img.classList.add("imgo");//add styling class
                       document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                       document.getElementById("status").append(img);
            }else{
              const img = document.createElement('img')
                    img.src = 'imgs/sorry.png' //assign source to new img element
                    img.classList.add("imgo");//add styling class
                    document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
                    document.getElementById("status").append(img);
            }
      }else{
          document.getElementById('status').innerHTML = "<p><b>One of the points has been  wrongly plotted</b></p>"
      }
   // if(document.getElementById("pts").src.indexOf("imgs/1.png")!=-1  && document.getElementById("f1").value =="octagon"  && document.getElementById("f2").value =="8"){
   //
   //  }else if(document.getElementById("pts").src.indexOf("imgs/2.png")!=-1  && document.getElementById("f1").value =="triangle" && document.getElementById("f2").value =="3"){
   //          const img = document.createElement('img') // create img element on the fly
   //         img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
   //         img.classList.add("imgo");//add styling class
   //         document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
   //         document.getElementById("status").append(img);
   //  }else if(document.getElementById("pts").src.indexOf("imgs/3.png")!=-1 && document.getElementById("f1").value =="triangle"  && document.getElementById("f2").value =="3"){
   //          const img = document.createElement('img') // create img element on the fly
   //          img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
   //          img.classList.add("imgo");//add styling class
   //          document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
   //          document.getElementById("status").append(img);
   //   }else if(document.getElementById("pts").src.indexOf("imgs/4.png")!=-1 && document.getElementById("f1").value =="square" && document.getElementById("f2").value =="4"){
   //           const img = document.createElement('img') // create img element on the fly
   //          img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
   //          img.classList.add("imgo");//add styling class
   //          document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
   //          document.getElementById("status").append(img);
   //     }else if(document.getElementById("pts").src.indexOf("imgs/5.png")!=-1 && document.getElementById("f1").value =="hexagon" && document.getElementById("f2").value =="6"){
   //           const img = document.createElement('img') // create img element on the fly
   //          img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
   //          img.classList.add("imgo");//add styling class
   //          document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
   //          document.getElementById("status").append(img);
   //  }else{
   //      const img = document.createElement('img')
   //      img.src = 'imgs/sorry.png' //assign source to new img element
   //      img.classList.add("imgo");//add styling class
   //      document.getElementById("status").innerHTML = "" //clear any appended elements inside the div
   //     document.getElementById("status").append(img);
   //  }
}




 const display_check = () =>{
     if(document.getElementById("f1").value != "" && document.getElementById("f2").value != ""){
         document.getElementById("check_btn").style.visibility="visible"
     }else{
         document.getElementById("check_btn").style.visibility="hidden"
     }
 }


 setInterval(display_check,500);


const previous = () =>{
  if(k>1){
    k = k-1
    document.getElementById('pts').src = `imgs/${k}.png`
  }
  document.getElementById("f1").value = ""
  document.getElementById("f2").value = ""
  document.getElementById("status").innerHTML = ""
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const next = () =>{
    if(k<5){
      k = k+1
      document.getElementById('pts').src = `imgs/${k}.png`
    }
    document.getElementById("f1").value = ""
    document.getElementById("f2").value = ""
    document.getElementById("status").innerHTML = ""
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

const draw = ()=>{
    // [A,B,C,D] = points
    //
    // console.log(A,B,C,D)

    var ctx = document.getElementById("canvas").getContext("2d");
      ctx.beginPath();
      ctx.moveTo(points[0].x,points[0].y);
    for(let i =1;i<points.length;i++){
      ctx.lineTo(points[i].x,points[i].y);
    }
    ctx.closePath()
    ctx.stroke()
}
