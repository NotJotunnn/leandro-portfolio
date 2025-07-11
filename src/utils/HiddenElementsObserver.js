const runObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate");
        }, 300 * index);
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");

  hiddenElements.forEach((el) => observer.observe(el));
};

export default runObserver;
