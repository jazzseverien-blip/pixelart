/**
 * Pixel Craft — Freelance Services
 * Replace CALENDLY_LINK with your Calendly (or other) booking URL.
 * Formspree form ID: get it at https://formspree.io — create a form with jazzseverien@gmail.com.
 */

const CALENDLY_LINK = 'https://calendly.com/your-link'; // Replace with your booking URL

// Formspree: submissions go to jazzseverien@gmail.com — replace with your form ID from formspree.io
const FORMSPREE_FORM_ID = 'xkoqnnen';

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) return;

    contactMessage.textContent = 'Sending…';
    contactMessage.style.color = 'var(--text-muted)';

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok) {
        contactMessage.textContent = 'Thanks! I\'ll get back to you within 24 hours.';
        contactMessage.style.color = 'var(--success)';
        contactForm.reset();
      } else {
        contactMessage.textContent = 'Something went wrong. Please try again or email jazzseverien@gmail.com.';
        contactMessage.style.color = '#ef4444';
      }
    } catch (err) {
      contactMessage.textContent = 'Something went wrong. Please try again or email jazzseverien@gmail.com.';
      contactMessage.style.color = '#ef4444';
    }
  });
}

// Book a call modal
const bookCallModal = document.getElementById('book-call-modal');
const bookCallForm = document.getElementById('book-call-form');
const bookCallMessage = document.getElementById('book-call-message');

function openBookModal() {
  if (bookCallModal) {
    bookCallModal.classList.add('is-visible');
    bookCallModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookModal() {
  if (bookCallModal) {
    bookCallModal.classList.remove('is-visible');
    bookCallModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('[data-open-book-modal]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    openBookModal();
  });
});

document.querySelectorAll('[data-close-book-modal]').forEach(el => {
  el.addEventListener('click', closeBookModal);
});

if (bookCallModal) {
  bookCallModal.addEventListener('click', (e) => {
    if (e.target === bookCallModal) closeBookModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookCallModal.classList.contains('is-visible')) closeBookModal();
  });
}

if (bookCallForm) {
  bookCallForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(bookCallForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const preferred_date = formData.get('preferred_date');
    const message = formData.get('message') || '';

    const fullMessage = `[Call booking request]\nPreferred date: ${preferred_date}\n\n${message}`.trim();

    bookCallMessage.textContent = 'Sending…';
    bookCallMessage.style.color = 'var(--text-muted)';

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: fullMessage })
      });

      if (res.ok) {
        bookCallMessage.textContent = 'Thanks! I\'ll confirm your call time by email.';
        bookCallMessage.style.color = 'var(--success)';
        bookCallForm.reset();
        setTimeout(closeBookModal, 2000);
      } else {
        bookCallMessage.textContent = 'Something went wrong. Please try again or email jazzseverien@gmail.com.';
        bookCallMessage.style.color = '#ef4444';
      }
    } catch (err) {
      bookCallMessage.textContent = 'Something went wrong. Please try again or email jazzseverien@gmail.com.';
      bookCallMessage.style.color = '#ef4444';
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
