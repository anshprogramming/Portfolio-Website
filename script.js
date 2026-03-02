// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.getElementById('skills');

const animateSkillBars = () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }
};

window.addEventListener('scroll', animateSkillBars);

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.right = '20px';
        navLinks.style.background = 'rgba(17, 24, 39, 0.98)';
        navLinks.style.padding = '30px';
        navLinks.style.borderRadius = '12px';
        navLinks.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
        navLinks.style.border = '1px solid rgba(139, 92, 246, 0.2)';
        navLinks.style.backdropFilter = 'blur(10px)';
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navLinks.style.display = 'none';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            isMenuOpen = false;
            navLinks.style.display = 'none';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Typing Effect for Hero Section (Optional Enhancement)
const tagline = document.querySelector('.tagline');
const originalText = tagline.textContent;
const texts = ['I build things for the web.', 'I create amazing experiences.', 'I code with passion.'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        tagline.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        tagline.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Uncomment below to enable typing effect
// typeEffect();

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
    
    orbs.forEach((orb, index) => {
        const speed = 0.2 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Counter Animation for Achievements
const counters = document.querySelectorAll('.achievement-card');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            counter.style.opacity = '1';
            counter.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateCounters);

// Initialize counters
counters.forEach(counter => {
    counter.style.opacity = '0';
    counter.style.transform = 'translateY(20px)';
    counter.style.transition = 'all 0.6s ease';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message for developers
console.log('%c👋 Hello, Developer!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cInterested in my code? Feel free to explore!', 'color: #9ca3af; font-size: 12px;');
console.log('%cBuilt with ❤️ by Ansh Kumar Vashishtha', 'color: #3b82f6; font-size: 12px;');