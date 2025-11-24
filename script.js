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

