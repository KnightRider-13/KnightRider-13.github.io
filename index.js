//VARIABLES

let isModalOpen = false;
let constrastToggle = false;
const scaleFactor = 1 / 20;
let currentYear;

//MOUSE MOVE EVENT

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

//CONTRAST

function toggleContrast(){
    constrastToggle = !constrastToggle;
    if(constrastToggle){
        document.body.classList += " dark-theme";

    }
    else{
        document.body.classList.remove("dark-theme");
    }
    
}

//EMAI SERVICE ON MODAL

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_0bk3h8d",
      "template_sa6xkek",
      event.target,
      "l9vSFOP5D8jWt_GlH"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on Fahmay17@gmail.com"
      );
    });
}

//TOGGLE MODAL

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

// GET CURRENT YEAR

function getCurrentYear(){
  const year = document.querySelector(".year");
  currentYear = new Date().getFullYear();
  year.innerHTML = currentYear;
}

getCurrentYear();

//HOVER EFFECT ON MOBILE

document.addEventListener("touchstart", function(){}, true);
