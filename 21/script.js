 const reset = () =>{
  location.reload()
}
const display_check = () =>{
    if(document.getElementById("f1").value != "" && document.getElementById("f2").value != "" && document.getElementById("f3").value != "" && document.getElementById("f4").value != "" && document.getElementById("f5").value != "" && document.getElementById("f6").value != "" && document.getElementById("f7").value != "" && document.getElementById("f8").value != ""){
        document.getElementById("check_btn").style.visibility="visible"
    }else{
        document.getElementById("check_btn").style.visibility="hidden"
    }
}


setInterval(display_check,500);



const check = () =>{
  if(document.getElementById("f1").value =="John" || document.getElementById("f1").value =="john"){
        const img = document.createElement('img') // create img element on the fly
         img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
         img.classList.add("imgo");//add styling class
         document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
         document.getElementById("status1").append(img);
 }else{
     const img = document.createElement('img')
     img.src = 'imgs/sorry.png' //assign source to new img element
     img.classList.add("imgo");//add styling class
     document.getElementById("status1").innerHTML = "" //clear any appended elements inside the div
    document.getElementById("status1").append(img);
 }

 if(document.getElementById("f2").value ==" Musa,Joan,Mary,Sarah,Ibrah and John"){
       const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status2").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status2").append(img);
}else{
    const img = document.createElement('img')
    img.src = 'imgs/sorry.png' //assign source to new img element
    img.classList.add("imgo");//add styling class
    document.getElementById("status2").innerHTML = "" //clear any appended elements inside the div
   document.getElementById("status2").append(img);
}

if(document.getElementById("f3").value =="Peter,Sarah,Ibrah,Joan,David,Mary and Joy"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status3").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status3").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status3").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status3").append(img);
}

if(document.getElementById("f4").value =="20cm" || document.getElementById("f4").value =="20 cm"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status4").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status4").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status4").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status4").append(img);
}
if(document.getElementById("f5").value =="40cm" || document.getElementById("f5").value =="40 cm"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status5").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status5").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status5").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status5").append(img);
}

if(document.getElementById("f6").value =="40cm" || document.getElementById("f6").value =="40 cm"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status6").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status6").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status6").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status6").append(img);
}
if(document.getElementById("f7").value =="20cm" || document.getElementById("f7").value =="20 cm"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status7").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status7").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status7").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status7").append(img);
}
if(document.getElementById("f8").value =="20cm" || document.getElementById("f8").value =="20 cm"){
      const img = document.createElement('img') // create img element on the fly
       img.src = 'imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png' //assign source to new img element
       img.classList.add("imgo");//add styling class
       document.getElementById("status8").innerHTML = "" //clear any appended elements inside the div
       document.getElementById("status8").append(img);
}else{
   const img = document.createElement('img')
   img.src = 'imgs/sorry.png' //assign source to new img element
   img.classList.add("imgo");//add styling class
   document.getElementById("status8").innerHTML = "" //clear any appended elements inside the div
  document.getElementById("status8").append(img);
}
}
