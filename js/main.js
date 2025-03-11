// Smooth scroll para navbar con compensación de altura por navbar fixed-top
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      const offset = 80; // Ajusta según el tamaño de tu navbar
  
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    };
  });
  
