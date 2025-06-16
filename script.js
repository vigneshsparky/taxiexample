// === script.js ===

// custom cursor 
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});





// loading spinner 
window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.style.display = 'none';
});




// Carousel Controls
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.right');
const prevBtn = document.querySelector('.carousel-btn.left');

let currentIndex = 0;

function updateCarousel(index) {
    track.style.transform = 'translateX(-' + index * 100 + '%)';
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});


// car move 

const leftBtn = document.querySelector('.carousel-btn.left i');
const rightBtn = document.querySelector('.carousel-btn.right i');

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    leftBtn.classList.add('animate');
    setTimeout(() => leftBtn.classList.remove('animate'), 500);
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    rightBtn.classList.add('animate');
    setTimeout(() => rightBtn.classList.remove('animate'), 500);
});


// Scroll To Top Button Animation
const carButton = document.querySelector('.scroll-car');

carButton.addEventListener('click', () => {
    carButton.classList.add('clicked');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => carButton.classList.remove('clicked'), 1000);
});

// Animate on scroll
const animatedElements = document.querySelectorAll('.animated');

function handleScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Flip Card Effect on Hover
const flipCards = document.querySelectorAll('.card.flip');
flipCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});

// Button ripple effect
const rippleButtons = document.querySelectorAll('.ripple-btn');
rippleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Booking form validation
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = bookingForm.querySelector('[name="name"]');
        const phone = bookingForm.querySelector('[name="phone"]');
        const date = bookingForm.querySelector('[name="date"]');
        const location = bookingForm.querySelector('[name="location"]');

        if (
            name.value.trim() === '' ||
            phone.value.trim() === '' ||
            date.value.trim() === '' ||
            location.value.trim() === ''
        ) {
            alert('Please fill in all required fields.');
        } else {
            alert('Booking submitted successfully!');
            bookingForm.reset();
        }
    });
}

// Modal Booking Form (Optional if modal is used)
const openModalBtn = document.querySelector('#open-booking-modal');
const bookingModal = document.querySelector('#booking-modal');
const closeModalBtn = document.querySelector('#close-booking-modal');

if (openModalBtn && bookingModal && closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
        bookingModal.classList.add('visible');
    });

    closeModalBtn.addEventListener('click', () => {
        bookingModal.classList.remove('visible');
    });

    window.addEventListener('click', e => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('visible');
        }
    });
}


// home page form 

document.getElementById("taxiBookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    // Collect values
    const name = this.customer_name.value.trim();
    const phone = this.phone_number.value.trim();

    if (!/^[6-9]\d{9}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number starting with 6-9.");
        return;
    }

    alert(`Thank you ${name}! We will contact you shortly.`);
    this.reset(); // Clear the form
});

// Optional: Log clicks or show alert
document.querySelectorAll('.whatsapp-button, .call-button').forEach(button => {
    button.addEventListener('click', function () {
        console.log(`${this.textContent.trim()} button clicked`);
        // Example enhancement:
        // alert("Connecting to our team...");
    });
});



// You can add booking logic here
document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Car booking requested!");
    });
});

// hamburger menu

const menubtn = document.getElementById('menu-btn');
const nav =  document.getElementById('links');

menubtn.addEventListener('click', ()=>
{
    nav.classList.toggle("active");
})