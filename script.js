const menu_ico=document.querySelector("#menu-ico")
const nav_list=document.querySelector(".nav-list")
const ico_close=document.querySelector(".ico-close")
const capa=document.querySelector("#capa")
menu_ico.addEventListener("click",()=>{
    nav_list.classList.remove("hide")
    nav_list.classList.add("show")
    capa.classList.add("capa")
})

ico_close.addEventListener("click",()=>{
    nav_list.classList.remove("show")
    capa.classList.remove("capa")
    nav_list.classList.add("hide")
})