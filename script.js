let text=document.querySelector('.container2 h1');


const textLoad =() =>{
setTimeout(() => {
    text.textContent="WELCOME TO RVS COLLEGE OF ENGINEERING AND TECHNOLOGY";
},0);
setTimeout(() => {
    text.textContent="HURRY!! APPLY FOR ADMISSIONS HERE";
},10000);
setTimeout(() => {
    text.textContent="GET SCHLORSHIP UPTO 90% IN TUTION FEES";
},20000);
}

textLoad();
setInterval(textLoad,30000);



//preloader
const loader=document.getElementsByClassName('preloader')[0];
window.addEventListener("load",function(){
    loader.style.display="none";
})