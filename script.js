
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
    // alert("h")
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

let elem = document.querySelectorAll(".elem")


for(el of elem){
    let image = el.getAttribute("data-image")
    el.addEventListener("mouseenter",function(){
            
        // console.log(image)
            fixed.innerHTML= `<video autoplay loop muted src="${image}"></video>`;

    })
}

function click(){
    // let des2 = document.querySelectorAll("h1")
// let bord = document.querySelectorAll("#left h1 a")
let para2 = document.querySelector("#para")
let element1 = document.querySelector("#element1")
let element2 = document.querySelector("#element2")
let element3 = document.querySelector("#element3")
let imgdiv = document.querySelector("#righto")

// imgdiv.innerHTML=``


element1.addEventListener("click",function(){
    element1.classList.add('active');
    element2.classList.remove('active');
    element3.classList.remove('active');
    let image = element1.getAttribute("data-image")
    console.log(imgdiv)
    imgdiv.innerHTML=`<img src="${image}" alt=""></img>`
    para2.innerText= "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
})

element2.addEventListener("click",function(){
    element2.classList.add('active');
    element1.classList.remove('active');
    element3.classList.remove('active');
    let image = element2.getAttribute("data-image")
    imgdiv.innerHTML=`<img src="${image}" alt=""></img>`

    para2.innerText= "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
})
   


element3.addEventListener("click",function(){
    element3.classList.add('active');
    element2.classList.remove('active');
    element1.classList.remove('active');
    let image = element3.getAttribute("data-image")
    imgdiv.innerHTML=`<img src="${image}" alt=""></img>`

    para2.innerText="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
})
}

function swiperFunction(){
    var swiper = new Swiper(".mySwiper", {
        // effect: "coverflow",
        loop:true,
        grabCursor:true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
          },
      });
}
   


function menuAnimation(){
    let menu = document.querySelector("nav h3");
let full = document.querySelector("#full-scr");
let image = document.querySelector("#page1 img")
let flag = 0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top=0;
        image.style.opacity=0;
        flag = 1;
    }else{
        full.style.top="-100%";
        image.style.opacity=1;
        flag = 0; 
    }
})
}


let loader = document.querySelector("#loader")
    setTimeout(function(){
      loader.style.top ="-100%";
    },4000)




swiperFunction()
click()
menuAnimation()


    




