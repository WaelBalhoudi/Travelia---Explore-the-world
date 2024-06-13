var preloader=document.querySelector("[data-preloader]")
window.addEventListener("load",()=>{
   setTimeout(()=>{
    preloader.classList.add("remove")
   },2000)
})


const addEevntOnElement=function(elements,eventType,callBack){
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType,callBack)    
    }
}

const nabar=document.querySelector("[data-navbar]")
const navbarToggler=document.querySelectorAll("[data-nav-toggler]")
const overlay=document.querySelector("[data-overlay]")


const toggleNav=function(){
    nabar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}
addEevntOnElement(navbarToggler,"click",toggleNav)

const header=document.querySelector("[data-header]");
window.addEventListener("scroll",()=>{
    header.classList[window.scrollY >50 ? "add":"remove"]("active")
})