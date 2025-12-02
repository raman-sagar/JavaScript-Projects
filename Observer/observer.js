const section = document.getElementById("my-work");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("show");
    } else {
      entries[0].target.classList.remove("show");
    }
  },
  { threshold: 0.5 }
);

observer.observe(section);
