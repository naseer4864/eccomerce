const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener("click",(e)=>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
});


document.querySelectorAll(".nav li").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}));

var counter = 1;

setInterval(function (){
    document.querySelector("#radio" + counter).checked = true;
    counter++;
    if(counter > 4){
        counter=1;
    }
},2000);


function golive(){
    x=document.querySelector(".input");
    y=document.querySelector("#mail");
    z=document.querySelector("#name");
    a=document.querySelector("#website");
    b=document.querySelector("#text");

    if(z.value == "" && a.value == "" && b.value == ""){
        x.style.visibility="visible";
    }else {
        setTimeout(()=> x.style.visibility="hidden")
    }
};

function Golive(){
    x=document.querySelector(".Input");
    y=document.querySelector("#mail");
    if(y.value == ""){
        x.style.visibility="visible";
    } else {
        setTimeout(()=> x.style.visibility="hidden")
    }
}

function initMap(){
    var option = {
        center : {lat: 7.7827 , lng: -4.5418},
        zoom :8
    }

    map =new google.maps.Map(document.getElementById("map"),option);
};


const btnScrollup =document.querySelector("#btnScrollup");

btnScrollup.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})


function Visible(){
    const fname =document.querySelector(".fname");
    const lname =document.querySelector(".lname");
    const email =document.querySelector(".email");
    const pword =document.querySelector(".pword");
    const m=document.querySelector(".msg");
    if(fname.value == "" && lname.value == "" && email.value == "" && pword.value==""){
        m.style.visibility="visible";
    } else {
        setTimeout(()=> m.style.visibility="hidden")
    }
}


function Button(){
    const fullname=document.querySelector("#cname");
    const cc=document.querySelector("#ccv");
    const n=document.querySelector(".popup");
    const mail=document.querySelector("#maiL");
    const city=document.querySelector("#city");
    const state=document.querySelector("#state");
    const zip=document.querySelector("#zip");

    if(fullname.value == "" && cc.value == ""){
        n.style.visibility="visible";
        fullname.style.border="1px solid red";
        cc.style.border="1px solid red";
        mail.style.border="1px solid red";
        city.style.border="1px solid red";
        state.style.border="1px solid red";
        zip.style.border="1px solid red";
    } else {
        n.style.visibility="hidden";
        fullname.style.border="1px solid gray";
        cc.style.border="1px solid gray";
        mail.style.border="1px solid gray";
        city.style.border="1px solid gray";
        state.style.border="1px solid gray";
        zip.style.border="1px solid gray";
        
    }
}



