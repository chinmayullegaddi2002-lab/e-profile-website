// Typing animation
const roles = [
    "B.Tech CSE Student",
    "IoT Developer",
    "Data Analyst",
    "Embedded Systems Engineer",
    "Full-Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Plotly Dashboard Demo
function createDashboard() {
    // Sample IoT sensor data
    const hours = Array.from({length: 24}, (_, i) => `${i}:00`);
    const temperature = [22, 21, 20, 19, 18, 17, 16, 15, 16, 18, 20, 22, 24, 25, 26, 27, 26, 25, 24, 23, 22, 21, 20, 19];
    const humidity = [65, 67, 70, 72, 75, 78, 80, 82, 80, 75, 70, 65, 60, 58, 55, 52, 50, 52, 55, 58, 60, 62, 63, 64];
    
    const trace1 = {
        x: hours,
        y: temperature,
        name: 'Temperature (°C)',
        type: 'scatter',
        mode: 'lines+markers',
        line: { color: '#FF6B6B', width: 2 },
        marker: { size: 6 }
    };
    
    const trace2 = {
        x: hours,
        y: humidity,
        name: 'Humidity (%)',
        type: 'scatter',
        mode: 'lines+markers',
        yaxis: 'y2',
        line: { color: '#4ECDC4', width: 2 },
        marker: { size: 6 }
    };
    
    const layout = {
        title: {
            text: 'IoT Sensor Data - 24 Hour Monitoring',
            font: { color: 'white', size: 20 }
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        xaxis: {
            title: 'Time (Hours)',
            color: 'white',
            gridcolor: 'rgba(255,255,255,0.1)'
        },
        yaxis: {
            title: 'Temperature (°C)',
            color: '#FF6B6B',
            gridcolor: 'rgba(255,255,255,0.1)'
        },
        yaxis2: {
            title: 'Humidity (%)',
            overlaying: 'y',
            side: 'right',
            color: '#4ECDC4'
        },
        legend: {
            font: { color: 'white' }
        },
        margin: { t: 50, r: 50 }
    };
    
    const config = { responsive: true };
    
    Plotly.newPlot('plotly-chart', [trace1, trace2], layout, config);
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Initialize
window.onload = function() {
    typeEffect();
    createDashboard();
};