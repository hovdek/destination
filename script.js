// nav bar active scrolling 
// define what we are wanting to select
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

// console.log(pageYOffset) is how much you have scrolled
// const sectionTop will calculate the top (0) to how far down it is
    // console.log(sectionTop) to get distance from top
// if(scrollY >= sectionTop - sectionHeight / 3) {  this will highlight the next section item when 1/3 of it is showing 
window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
    console.log(current);
})

// make script for objects to float upward 