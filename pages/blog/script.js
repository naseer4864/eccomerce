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