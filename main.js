let sideBarToggle = document.getElementById('sidebar-toggle');
let sideBarClose = document.getElementById('sidebar-close');
let sideBarList = document.getElementById('sidebar-list');

sideBarToggle.addEventListener('click', () => {
 

    if(sideBarList) {
        sideBarList.classList.toggle('active');
    } 
})

sideBarClose.addEventListener('click', () => {
    sideBarList.classList.remove('active');
})

const sideLink = document.querySelectorAll('.sidebar_link')

const sideLinkaction = () => {
    const navMenu = document.getElementById("sidebar-list");

    navMenu.classList.remove('active');
}
sideLink.forEach(n => n.addEventListener('click', sideLinkaction))

const scrollBlurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('scroll_blur_header')
        : header.classList.remove('scroll_blur_header');

}

window.addEventListener('scroll', scrollBlurHeader); 