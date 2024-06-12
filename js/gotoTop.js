let lastScrollTop = 0; // Variable to store the last scroll position

// Get the button element
const goToTopBtn = document.getElementById('goToTopBtn');

// Function to handle scroll events and show/hide the button
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide button based on scroll direction
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        goToTopBtn.style.display = 'none';
    } else {
        // Scrolling up
        if (scrollTop > 200) { // Show button when scrolled up beyond 200px
            goToTopBtn.style.display = 'block';
        } else {
            goToTopBtn.style.display = 'none';
        }
    }

    // Update last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Safari
});

// Function to scroll to the top of the page
function scrollToTop() {
    // Scroll to top with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
