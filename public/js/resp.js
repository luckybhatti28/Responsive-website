/////// JS SCRIPT CODE ////////

let burGer = document.querySelector('.burger');
let narBar = document.querySelector('.nav-bar');
let navlist = document.querySelector('.nav-bar-list');
let rightNav = document.querySelector('.right-nav-bar');

burGer.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    narBar.classList.toggle('h-nav-resp');
});

/////// JS END CODE /////