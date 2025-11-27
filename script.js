const bars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills'); 
const form = document.getElementById('contactForm');
const error = document.getElementById('Check');

// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let message = document.getElementById("message");
function showProgress() {
    bars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = `${value}%`;
    });
}

window.addEventListener('scroll', () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionHeight = skillsSection.getBoundingClientRect().height;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - sectionHeight/2) {
        showProgress();
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        error.textContent = "Please fill all fields!";
        
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        error.textContent = "Please enter a valid email address!";
        
    }
    else if(message.length < 10){
        error.textContent = "Message should be at least 10 characters long!";
        
    }
    else {error.textContent = "Thank You for contacting me!"; 
        alert("Form submitted successfully!");

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("message", message);

        window.location.href = "form-details.html";
        
    }   
});

const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.style.cursor = "pointer";   
        card.addEventListener('click',() => {
            const url = card.getAttribute('data-url');
            window.location.href = url;
        });
});

const canvas = document.getElementById("myCanvas");
const ct = canvas.getContext("2d");
    
    ct.beginPath();
    ct.moveTo(10, 140);
    ct.lineTo(100, 40);
    ct.lineTo(190, 110);
    ct.lineTo(280, 10);
    ct.strokeStyle = "gold";
    ct.shadowColor = "rgba(255, 255, 255, 1)";
    ct.shadowBlur = 10;
    ct.lineWidth = 6;
    ct.stroke();
    ct.font = "16px Arial";
    ct.fillText("Keep Climbing", 100, 145);



const slides = document.querySelectorAll('.slide-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Function to show the slide at currentIndex
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Initial display
showSlide(currentIndex);

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});



const toggleBtn = document.getElementById('theme-toggle');
softModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('soft-mode');

    if(document.body.classList.contains('soft-mode')){
        softModeToggle.textContent = '🌞'; 
    } else {
        softModeToggle.textContent = '💡'; 
    }
});

const backToTopBtn = document.getElementById('Topbtn');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




