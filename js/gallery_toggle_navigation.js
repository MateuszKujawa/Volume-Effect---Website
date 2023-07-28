const navigationSection = document.querySelector('.galery-nav');
const sectionsToToggle = document.querySelectorAll('[id^="section"]');


navigationSection.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        

        const targetSectionId = event.target.getAttribute('data-target');

        sectionsToToggle.forEach(section => {
            if (section.id === targetSectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
});