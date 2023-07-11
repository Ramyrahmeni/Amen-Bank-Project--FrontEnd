const themeToggler = document.querySelector(".theme-toggler");
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
  
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  });
  //sidebar
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// Show Sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
  
  // Hide Sidebar
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });
  window.addEventListener("resize",()=>{
    if(window.innerWidth>768){
        if(sideMenu.style.display=="none"){
            sideMenu.style.display="block"
        }
    }
    else{
        if(sideMenu.style.display=="block"){
            sideMenu.style.display="none"
        }
    }
  })