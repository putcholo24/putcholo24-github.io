document.addEventListener("DOMContentLoaded", () => {
  // === AOS Initialization ===
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // === Typewriter Effect ===
  const roles = [
    "WordPress Developer",
    "Frontend Developer",
    "Tech Support Specialist",
    "Fullstack Developer"
  ];
  let i = 0, j = 0, isDeleting = false;
  const el = document.getElementById("typewriter");

  function type() {
    if (!el) return;
    const current = roles[i];
    el.textContent = current.substring(0, j);
    if (!isDeleting && j++ === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && j-- === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  type();

  // === Project 3D Hover Effect ===
  document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });
});
