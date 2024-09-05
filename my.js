

document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-scale, .animate-on-scroll-left');

  // Create the intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (element.classList.contains('animate-on-scroll')) {
          element.classList.add('animated');
        } else if (element.classList.contains('animate-on-scroll-scale')) {
          element.classList.add('animated-scale');
        } else if (element.classList.contains('animate-on-scroll-left')) {
          element.classList.add('animated-left');
        }
        // Unobserve the element after animation class is added
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  // Observe each element
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});







var typed = new Typed('#element', {
    strings: ['Web Developer', 'Programmer', 'Web Designer'],
    typeSpeed: 50,
}); 




