// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const orb1 = document.querySelector('.orb1');
    const orb2 = document.querySelector('.orb2');
    const orb3 = document.querySelector('.orb3');
    if (orb1) orb1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (orb2) orb2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    if (orb3) orb3.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
});

// Add stagger effect to skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger effect to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Add stagger effect to timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});
