document.addEventListener('DOMContentLoaded', function() {
    let offset = 0; // зміщення від лівого краю
    const sliderLine = document.querySelector('.slider-line');
    const nextButton = document.querySelector('.slider-next');
    const prevButton = document.querySelector('.slider-prev');

    nextButton.addEventListener('click', function() {
        offset = offset + 800;
        if (offset > 2400) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
        toggleButtonsVisibility();
    });

    prevButton.addEventListener('click', function() {
        offset = offset - 800;
        if (offset < 0) {
            offset = 2400;
        }
        sliderLine.style.left = -offset + 'px';
        toggleButtonsVisibility();
    });

    function toggleButtonsVisibility() {
        nextButton.style.display = offset === 2400 ? 'none' : 'block';
        prevButton.style.display = offset === 0 ? 'none' : 'block';
    }
    
    toggleButtonsVisibility(); // Викликати функцію для початкового стану
});
