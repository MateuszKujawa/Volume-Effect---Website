// ANIMATION IMAGE GALLERY
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showBox');
        } else {
            entry.target.classList.remove('showBox');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenBox');
hiddenElements.forEach((el) => observer.observe(el));