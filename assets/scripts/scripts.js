


// global variables
secondNav = document.querySelector('nav.second')
nav = document.querySelector('nav.first')
bars = document.querySelector('.fa-bars')
sidenav = document.querySelector('.sidenav')
links = document.querySelectorAll('.sidenav .links a')
x = document.querySelector('.closebtn')
backToTop = document.querySelector(".back-to-top");
loader = document.querySelector('.loader');
hireBtn = document.querySelector('.hireBtn');



// redirect to the email page when the hire button is clicked
hireBtn.addEventListener('click', () => {
    window.location.href = '#contacts'
})


// deal with the loader
// show the loader when the page loads
window.addEventListener("load", () =>{
    loader.classList.add("loader-hidden")
})




// when the user scrolls the page to the second section, show the second nav
document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight + 100) {
        nav.style.transform = 'translateY(-100%)'
        secondNav.style.transform = 'translateY(0)'
    } else {
        nav.style.transform = 'translateY(0)'
        secondNav.style.transform = 'translateY(-100%)'
    }
})



// bring it on, the uhhm, sidenav when the user clicks the menu button
bars.addEventListener('click', () => {
    if (sidenav.classList.contains('active')) {
        sidenav.classList.remove('active')
        document.body.style.overflow = 'auto'
    } else {
        sidenav.classList.add('active')
        document.body.style.overflow = 'hidden'
    }
})


// close the sidebar when the X is clicked
x.addEventListener('click', (event) => {
    event.preventDefault()
    sidenav.classList.remove('active')
    document.body.style.overflow = 'auto'
})


// close the sidebar when the links inside the sidenav are clicked

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        sidenav.classList.remove('active')
        document.body.style.overflow = 'auto'
    })
}




// creating functionality for backToTop button 
window.onscroll = function(){
    if(window.scrollY > 120){
        backToTop.style.opacity = "1";
    }else{
        backToTop.style.opacity = "0";
    }
}

backToTop.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})





// Function to split the words and display one character every 200 milliseconds
function splitLetters(element) {
    const words = element.textContent.split('');
    element.textContent = '';
    let i = 0;
    const intervalId = setInterval(function () {
        if (i < words.length) {
            element.textContent += words[i];
            i++;
        } else {
            clearInterval(intervalId); // Clear the interval when animation is complete
        }
    }, 200);
}

// Create IntersectionObserver instance
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            splitLetters(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

// Reveal the titles by observing them
const titles = document.querySelectorAll('#title');
titles.forEach(title => observer.observe(title));






// toggle the certificates section
document.querySelector('#btnCert').addEventListener('click', () => {
    document.querySelector('#certificates').classList.add('active');
    document.body.style.overflow = 'hidden'
})

document.querySelector('#certificates span').addEventListener('click', () => {
    document.querySelector('#certificates').classList.remove('active');
    document.body.style.overflow = 'auto'
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && document.querySelector('#certificates').classList.contains('active')){
        document.querySelector('#certificates').classList.remove('active');
        document.body.style.overflow = 'auto'
    }
})
