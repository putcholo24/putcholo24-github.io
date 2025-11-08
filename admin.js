document.addEventListener("DOMContentLoaded", () => {
  // === AOS Initialization ===
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic"
  });

  // === Dynamic Typewriter Role Effect ===
  const roles = [
    "WordPress Developer",
    "Frontend Developer",
    "Fullstack WordPress Developer"
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
  const projects = document.querySelectorAll(".project");
  projects.forEach(card => {
    card.style.transition = "transform 0.2s ease-out";

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateY = x / 25;
      const rotateX = -y / 25;
      card.style.transform = `perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    });
  });

  // === Subtle Mouse Glow Background Effect ===
  const body = document.body;
  const glow = document.createElement("div");
  glow.id = "cursor-glow";
  body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.pageX}px`;
    glow.style.top = `${e.pageY}px`;
  });
});
