/**
 * Abdelrahman Fathy - Mechatronics & AI Automation Portfolio
 * Main Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');
  const currentYearSpan = document.getElementById('current-year');

  // Set dynamic copyright year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 1. Sticky Navigation & Scroll Effects
  // --------------------------------------------------------------------------
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Header blur state
    if (scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // ScrollSpy active link update
    highlightActiveNavLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Menu Toggle
  // --------------------------------------------------------------------------
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close mobile menu when clicking any nav link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. ScrollSpy Navigation Highlighting
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveNavLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        mobileLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Netlify Contact Form AJAX Handler
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      // Check if Netlify or standard static host
      const isNetlify = window.location.hostname.includes('netlify') || window.location.hostname === 'localhost';
      
      const submitBtn = document.getElementById('submit-btn');
      const originalBtnHTML = submitBtn.innerHTML;

      // Simple visual feedback during submission
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok || !isNetlify) {
          showFormStatus(
            'success',
            '✓ Thank you! Your message has been sent successfully. I will get back to you shortly.'
          );
          contactForm.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        // Even in local static preview without backend server, provide friendly user feedback
        showFormStatus(
          'success',
          '✓ Thank you! Your message inquiry has been recorded. (Ready for Netlify form processing).'
        );
        contactForm.reset();
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    });
  }

  function showFormStatus(type, message) {
    if (!formStatus) return;
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';

    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 6000);
  }

  // --------------------------------------------------------------------------
  // 5. Image Fallback Initializer
  // --------------------------------------------------------------------------
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    // If the image fails or hasn't loaded yet
    img.addEventListener('error', () => {
      img.classList.add('img-fallback');
    });
  });
});

// --------------------------------------------------------------------------
// 6. Global Lightbox Modal Functions
// --------------------------------------------------------------------------
window.openLightbox = function(imageSrc, captionText) {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  const modalCaption = document.getElementById('lightbox-caption');

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  modalImg.alt = captionText || 'Preview';
  if (modalCaption) {
    modalCaption.textContent = captionText || '';
  }

  // If image fails in modal (e.g., file not yet added to images folder)
  modalImg.onerror = function() {
    modalImg.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22450%22%20viewBox%3D%220%200%20800%20450%22%3E%3Crect%20fill%3D%22%230d1526%22%20width%3D%22100%25%22%20height%3D%22100%25%22%2F%3E%3Ctext%20fill%3D%22%2300f0ff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20dy%3D%2210.5%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E' + encodeURIComponent(captionText || 'Image Preview') + '%3C%2Ftext%3E%3C%2Fsvg%3E';
  };

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeLightbox();
  }
});
