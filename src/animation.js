// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'animate-left'
    var leftElements = document.querySelectorAll('.animate-left');
    // Get all elements with the class 'animate-right'
    var rightElements = document.querySelectorAll('.animate-right');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add animation class if element is in viewport
    function animateIfVisible() {
        leftElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('slide-left');
            }
        });
        rightElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('slide-right');
            }
        });
    }
    
    // Call the function initially
    animateIfVisible();
    
    // Add event listener for scroll event
    window.addEventListener('scroll', animateIfVisible);
});
