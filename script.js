
/* =========================================
   1. CUSTOM CURSOR LOGIC
   ========================================= */
const cursor = document.querySelector('.cursor');

// Move the custom cursor with the mouse
document.addEventListener('mousemove', (e) => {
    // Only update if the cursor element exists (prevents errors on mobile)
    if (cursor) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }
});

// Enlarge cursor when hovering over clickable items
document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseover', () => {
        if (cursor) {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'; // Faint green glow
        }
    });
    item.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'transparent';
        }
    });
});

/* =========================================
   2. DARK/LIGHT MODE TOGGLE
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        // Toggle the 'light-mode' class on the body
        document.body.classList.toggle('light-mode');
        
        // React Dynamically: Swap the Moon and Sun icons
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.remove('fa-sun'); // Fallback clean up
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.remove('fa-moon'); // Fallback clean up
            themeIcon.classList.add('fa-moon');
        }
    });
}

/* =========================================
   3. SCROLL REVEAL ANIMATION
   ========================================= */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Triggers animation when 100px of the element is visible
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Trigger the function on initial load to show elements already in view
reveal();
