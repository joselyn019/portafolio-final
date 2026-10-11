document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(
  ".hero > div, .section h2, .section > p, .cards article, .project, .contact"
);

items.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

items.forEach((el) => observer.observe(el));