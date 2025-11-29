// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background =
      window.scrollY > 100 ? 'rgba(44,62,80,0.95)' : 'linear-gradient(135deg,#2c3e50,#1a252f)';
  });
  
  // Dropdown open on mobile click
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggle.nextElementSibling.classList.toggle('show');
      }
    });
  });
  
  // Active nav link highlight
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });
  
  // Animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('.vision-card, .mission-card, .values-card, .project-card, .service-card');
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  });
  
  // Close navbar after link click (mobile)
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse.classList.contains('show')) new bootstrap.Collapse(collapse, { toggle: true });
    });
  });
  