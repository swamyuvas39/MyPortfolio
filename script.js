// the respective navigation bar items as active while scrolling.
//add or remove the "active" class dynamically based on the scroll position and the current section in view.

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(function(navItem) {
    navItem.classList.remove('active');
    if (navItem.getAttribute('href').substring(1) === currentSection) {
      navItem.classList.add('active');
    }
  });
}); 

// Smooth scrolling
/* const navLinks = document.querySelectorAll(".navbar a");

for (const link of navLinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
} */ 

// Intersection Observer configuration
const options = {
  rootMargin: '0px',
  threshold: 0.2 // Adjust the threshold as needed
};


//toggle menu

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
});


