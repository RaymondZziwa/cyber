const previous = () =>{
    location.href="index.html"
}


const check = () =>{
    // if(document.getElementById("ans1").value == "116km"){
    //     const img = document.createElement('img') // create img element on the fly
    //     img.src = 'imgs/excel.png' //assign source to new img element
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
    // if(document.getElementById("ans2").value == "20"){
    //     const img = document.createElement('img') // create img element on the fly
    //     img.src = 'imgs/excel.png' //assign source to new img element
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
    if(document.getElementById("ans3").value == "138km"){
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/excel.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status3").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status3").append(img);  // append excellent image
    }else{
        const img = document.createElement('img') // create img element on the fly
        img.src = 'imgs/sorry.png' //assign source to new img element
        img.classList.add("imgo");//add styling class
        document.getElementById("status3").innerHTML = "" //clear any appended elements inside the div
        document.getElementById("status3").append(img);  // append excellent image
    }
}



const display_check = () =>{
    if(document.getElementById("ans3").value != ""){
        document.getElementById("check_btn").style.display="block"
    }else{
        document.getElementById("check_btn").style.display="none"
    }
}
    
setInterval(display_check,500);
