// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  const body = document.body;

  // Create backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'nav__backdrop';
  document.body.appendChild(backdrop);

  function closeMenu() {
    toggle.classList.remove('active');
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
    body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('active');
    navLinks.classList.add('active');
    backdrop.classList.add('active');
    body.style.overflow = 'hidden';
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('.nav__link');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking backdrop
    backdrop.addEventListener('click', closeMenu);
  }
});
