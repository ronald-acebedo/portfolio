let sideBarToggle = document.getElementById('sidebar-toggle');
let sideBarClose = document.getElementById('sidebar-close');
let sideBarList = document.getElementById('sidebar-list');

sideBarToggle.addEventListener('click', () => {
 
    // toggle sidebar list
    if(sideBarList) {
        sideBarList.classList.toggle('active');
    } 
})
    // remove sidebar list
sideBarClose.addEventListener('click', () => {
    sideBarList.classList.remove('active');
})

// sidebar action
const sideLink = document.querySelectorAll('.sidebar_link')

const sideLinkaction = () => {
    const navMenu = document.getElementById("sidebar-list");

    navMenu.classList.remove('active');
}
sideLink.forEach(n => n.addEventListener('click', sideLinkaction))

const scrollBlurHeader = () => {
    const header = document.getElementById('header');

    // when scroll > or = to 50, remove blur
    this.scrollY >= 50 ? header.classList.add('scroll_blur_header')
        : header.classList.remove('scroll_blur_header');

}
window.addEventListener('scroll', scrollBlurHeader); 

// for darkmode
let darkModeToggle = document.getElementById('moon-toggle');
let body = document.querySelector('body')

darkModeToggle.addEventListener('click', function() {
    //when moon icon clicked, change it to sun
    darkModeToggle.classList.toggle('fa-moon')

    if(darkModeToggle.classList.toggle('fa-sun')) {
        body.classList.toggle('darkmode_toggle')
    } else {
        body.classList.remove('darkmode_toggle')
        body.style.transition = '0.5s'
        
    }
})
