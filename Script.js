//home page
window.onload = function(event) {
    if (event.target.URL.endsWith('index.html')) {
        alert('Welcome to my Portfolio!, feel free to navigate through the pages to get to know me better.');
    }
};

//about page
function handleSurprise() {
    alert('Surprise! I was born in 2007, and I\'m a big fan of web development and learning about new tech trends!');
}


//form validation
$(document).ready(function() {
    // Clear errors when user starts typing
    $('input, textarea').on('input', function() {
        $(this).removeClass('has-error');
        $(`#${this.id}-error`).html('').hide();
    });

    // Click handler for submit button
    $('#submitBtn').click(function() {
        let isValid = true;

        // Clear previous errors
        $('.error-message').html('').hide();
        $('.has-error').removeClass('has-error');

        // Name validation
        if ($('#name').val() === '') {
            $('#name-error').html('Name is required').show();
            $('#name').addClass('has-error');
            isValid = false;
        }

        // Email validation
        const email = $('#email').val();
        if (email === '') {
            $('#email-error').html('Email is required').show();
            $('#email').addClass('has-error');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $('#email-error').html('Please enter a valid email').show();
            $('#email').addClass('has-error');
            isValid = false;
        }

        // Phone validation
        const phone = $('#contact_number').val();
        if (phone === '') {
            $('#contact_number-error').html('Phone number is required').show();
            $('#contact_number').addClass('has-error');
            isValid = false;
        } else if (!/^\+356\d{8}$/.test(phone)) {
            $('#contact_number-error').html('Format: +356 followed by 8 digits').show();
            $('#contact_number').addClass('has-error');
            isValid = false;
        }

        // Message validation
        const message = $('#message').val();
        if (message === '') {
            $('#message-error').html('Message is required').show();
            $('#message').addClass('has-error');
            isValid = false;
        } else if (message.length < 10) {
            $('#message-error').html('Minimum 10 characters required').show();
            $('#message').addClass('has-error');
            isValid = false;
        }

        // Form submission
        if (isValid) {
            alert('Thank you! Your message has been sent.');
            $('#contactForm')[0].reset();
        }
    });
});



//show more button
$("#P").hide();

$("#toggle").on("click", function(){
    $("#P").toggle();
});

//image gallery with jquery
$(document).ready(function() {
    $('#gallery').lightGallery({
        selector: 'a',
        download: false,
        counter: false,
        thumbnail: true,
        zoom: true,
        autoplay: false
    });
});


// Add this to your existing Script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Get all project buttons
    const projectBtns = document.querySelectorAll('.project-btn');
    
    // Add click event to each button
    projectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get the description from data attribute
            const description = this.getAttribute('data-desc');
            // Find the description container (next sibling of the button)
            const descContainer = this.nextElementSibling;
            
            // Toggle display
            if (descContainer.style.display === 'block') {
                descContainer.style.display = 'none';
                this.textContent = 'View Details';
            } else {
                // Set the description text
                descContainer.textContent = description;
                // Show the description
                descContainer.style.display = 'block';
                this.textContent = 'Hide Details';
            }
        });
    });
});




// Improved Back to Top Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {  // Reduced from 600px to show earlier
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});