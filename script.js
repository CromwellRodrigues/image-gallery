function animatePic(element) {
    element.classList.add("animate__animated", "animate__rubberBand");
    
    // Remove animation after it completes so it can run again
    setTimeout(() => {
        element.classList.remove("animate__animated", "animate__rubberBand");
    }, 2000);
}