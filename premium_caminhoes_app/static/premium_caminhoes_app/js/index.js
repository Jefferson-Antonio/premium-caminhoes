document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slides-track');
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    const slides = document.querySelectorAll('.slide');
    
    // feature: Slider Automatic Passage
    let currentIndex = 0;
    let autoPlayInterval;
    const intervalTime = 5000; // 5s

    // Slider Automatic Passage Logic
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= radios.length) currentIndex = 0;
            radios[currentIndex].checked = true;
        }, intervalTime);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Start the automatic carousel.
    startAutoPlay();

    // If the user clicks on the manual dots, we reset the timer.
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // feature: Drag Logic (Mouse / Touch)
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Detects the position of the click/touch.
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function dragStart(event) {
        isDragging = true;
        stopAutoPlay();
        startX = getPositionX(event);

        // It calculates where the image was in pixels.
        const slideWidth = slides[0].offsetWidth;
        prevTranslate = currentIndex * -slideWidth;

        // Equalize the variables to avoid the glitch of switching slides with just a click.
        currentTranslate = prevTranslate;

        // Temporarily remove the CSS transition for the image to paste on your finger.
        track.style.transition = 'none';
    }

    function dragMove(event) {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startX;
        currentTranslate = prevTranslate + diff;
        
        // Applies the inline movement (temporarily overriding the original CSS).
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        
        const movedBy = currentTranslate - prevTranslate;
        
        // If it dragged more than 100 pixels, change the slide.
        if (movedBy < -100 && currentIndex < radios.length - 1) {
            currentIndex++;
        } else if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }
        
        // Update the radio button
        radios[currentIndex].checked = true;
        
        // Clear the inline style so CSS reverts to the correct position in %
        track.style.transition = '';
        track.style.transform = '';
        
        startAutoPlay(); // It starts spinning on its own again.
    }

    // Mouse Events (Computer)
    track.addEventListener('mousedown', dragStart);
    track.addEventListener('mousemove', dragMove);
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('mouseleave', () => {
        if (isDragging) dragEnd();
    });

    // Touch Events (Mobile)
    track.addEventListener('touchstart', dragStart, {passive: true});
    track.addEventListener('touchmove', dragMove, {passive: true});
    track.addEventListener('touchend', dragEnd);
});