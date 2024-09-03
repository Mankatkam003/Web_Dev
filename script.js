document.querySelectorAll('.box').forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});

const elements = document.querySelectorAll('.box');

elements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('enlarged');
    });

    element.addEventListener('mouseout', () => {
        element.classList.remove('enlarged');
    });
});

