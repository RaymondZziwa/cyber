 const reset = () =>{
  location.reload()
}
const display_check = () =>{
    if(document.getElementById("f1").value != ""  && document.getElementById("f4").value != "" && document.getElementById("f5").value != "" && document.getElementById("f6").value != "" && document.getElementById("f7").value != "" && document.getElementById("f8").value != ""){
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

  if(document.getElementById("t1").value == "Mary" || document.getElementById("t1").value == "mary" || document.getElementById("t1").value == "Joy" || document.getElementById("t1").value == "joy" || document.getElementById("t1").value == "Sarah" ||document.getElementById("t1").value == "sarah" ||document.getElementById("t1").value == "Ibrah" ||document.getElementById("t1").value == "ibrah" ||document.getElementById("t1").value == "Joan" || document.getElementById("t1").value == "joan"){
        document.getElementById("t1").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t1").style.backgroundColor="red";
    }
    if(document.getElementById("t2").value == "Mary" || document.getElementById("t2").value == "mary" || document.getElementById("t2").value == "Joy" || document.getElementById("t2").value == "joy" || document.getElementById("t2").value == "Sarah" ||document.getElementById("t2").value == "sarah" ||document.getElementById("t2").value == "Ibrah" ||document.getElementById("t2").value == "ibrah" ||document.getElementById("t2").value == "Joan" || document.getElementById("t2").value == "joan"){
        document.getElementById("t2").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t2").style.backgroundColor="red";
    }
    if(document.getElementById("t3").value == "Mary" || document.getElementById("t3").value == "mary" || document.getElementById("t3").value == "Joy" || document.getElementById("t3").value == "joy" || document.getElementById("t3").value == "Sarah" ||document.getElementById("t3").value == "sarah" ||document.getElementById("t3").value == "Ibrah" ||document.getElementById("t3").value == "ibrah" ||document.getElementById("t3").value == "Joan" || document.getElementById("t3").value == "joan"){
        document.getElementById("t3").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t3").style.backgroundColor="red";
    }
    if(document.getElementById("t4").value == "Mary" || document.getElementById("t4").value == "mary" || document.getElementById("t4").value == "Joy" || document.getElementById("t4").value == "joy" || document.getElementById("t4").value == "Sarah" ||document.getElementById("t4").value == "sarah" ||document.getElementById("t4").value == "Ibrah" ||document.getElementById("t4").value == "ibrah" ||document.getElementById("t4").value == "Joan" || document.getElementById("t4").value == "joan"){
        document.getElementById("t4").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t4").style.backgroundColor="red";
    }
     if(document.getElementById("t5").value == "Mary" || document.getElementById("t5").value == "mary" || document.getElementById("t5").value == "Joy" || document.getElementById("t5").value == "joy" || document.getElementById("t5").value == "Sarah" ||document.getElementById("t5").value == "sarah" ||document.getElementById("t5").value == "Ibrah" ||document.getElementById("t5").value == "ibrah" ||document.getElementById("t5").value == "Joan" || document.getElementById("t5").value == "joan"){
        document.getElementById("t5").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t5").style.backgroundColor="red";
    }
    if(document.getElementById("t6").value == "Mary" || document.getElementById("t6").value == "mary" || document.getElementById("t6").value == "Joy" || document.getElementById("t6").value == "joy" || document.getElementById("t6").value == "Sarah" ||document.getElementById("t6").value == "sarah" ||document.getElementById("t6").value == "Ibrah" ||document.getElementById("t6").value == "ibrah" ||document.getElementById("t6").value == "Joan" || document.getElementById("t6").value == "joan"){
        document.getElementById("t6").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t6").style.backgroundColor="red";
    }
    if(document.getElementById("t7").value == "Joan" || document.getElementById("t7").value == "joan" || document.getElementById("t7").value == "Musa" || document.getElementById("t7").value == "musa" || document.getElementById("t7").value == "John" || document.getElementById("t7").value == "john" || document.getElementById("t7").value == "Ibrah" || document.getElementById("t7").value == "ibrah" ||document.getElementById("t7").value == "Sarah" || document.getElementById("t7").value == "sarah" || document.getElementById("t7").value == "Mary" || document.getElementById("t7").value == "mary"){
        document.getElementById("t7").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t7").style.backgroundColor="red";
    }
    if(document.getElementById("t8").value == "Joan" || document.getElementById("t8").value == "joan" || document.getElementById("t8").value == "Musa" || document.getElementById("t8").value == "musa" || document.getElementById("t8").value == "John" || document.getElementById("t8").value == "john" || document.getElementById("t8").value == "Ibrah" || document.getElementById("t8").value == "ibrah" ||document.getElementById("t8").value == "Sarah" || document.getElementById("t8").value == "sarah" || document.getElementById("t8").value == "Mary" || document.getElementById("t8").value == "mary"){
        document.getElementById("t8").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t8").style.backgroundColor="red";
    }
    if(document.getElementById("t9").value == "Joan" || document.getElementById("t9").value == "joan" || document.getElementById("t9").value == "Musa" || document.getElementById("t9").value == "musa" || document.getElementById("t9").value == "John" || document.getElementById("t9").value == "john" || document.getElementById("t9").value == "Ibrah" || document.getElementById("t9").value == "ibrah" ||document.getElementById("t9").value == "Sarah" || document.getElementById("t9").value == "sarah" || document.getElementById("t9").value == "Mary" || document.getElementById("t9").value == "mary"){
        document.getElementById("t9").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t9").style.backgroundColor="red";
    }
    if(document.getElementById("t10").value == "Joan" || document.getElementById("t10").value == "joan" || document.getElementById("t10").value == "Musa" || document.getElementById("t10").value == "musa" || document.getElementById("t10").value == "John" || document.getElementById("t10").value == "john" || document.getElementById("t10").value == "Ibrah" || document.getElementById("t10").value == "ibrah" ||document.getElementById("t10").value == "Sarah" || document.getElementById("t10").value == "sarah" || document.getElementById("t10").value == "Mary" || document.getElementById("t10").value == "mary"){
        document.getElementById("t10").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t10").style.backgroundColor="red";
    }
     if(document.getElementById("t11").value == "Joan" || document.getElementById("t11").value == "joan" || document.getElementById("t11").value == "Musa" || document.getElementById("t11").value == "musa" || document.getElementById("t11").value == "John" || document.getElementById("t11").value == "john" || document.getElementById("t11").value == "Ibrah" || document.getElementById("t11").value == "ibrah" ||document.getElementById("t11").value == "Sarah" || document.getElementById("t11").value == "sarah" || document.getElementById("t11").value == "Mary" || document.getElementById("t11").value == "mary"){
        document.getElementById("t11").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t11").style.backgroundColor="red";
    }
     if(document.getElementById("t12").value == "Joan" || document.getElementById("t12").value == "joan" || document.getElementById("t12").value == "Musa" || document.getElementById("t12").value == "musa" || document.getElementById("t12").value == "John" || document.getElementById("t12").value == "john" || document.getElementById("t12").value == "Ibrah" || document.getElementById("t12").value == "ibrah" ||document.getElementById("t12").value == "Sarah" || document.getElementById("t12").value == "sarah" || document.getElementById("t12").value == "Mary" || document.getElementById("t12").value == "mary"){
        document.getElementById("t12").style.backgroundColor="greenyellow";
    }else{
        document.getElementById("t12").style.backgroundColor="red";
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
