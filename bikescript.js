// Basic interactivity: mobile nav toggle + contact form validation + year
document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // contact form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMsg');

    if(!name || !email || !msg){
      formMsg.style.color = 'crimson';
      formMsg.textContent = 'সব ঘর পূরণ করুন।';
      return;
    }
    // simple email check
    if(!/^\S+@\S+\.\S+$/.test(email)){
      formMsg.style.color = 'crimson';
      formMsg.textContent = 'সঠিক ইমেইল দিন।';
      return;
    }

    // success (no backend) — show message and reset
    formMsg.style.color = 'green';
    formMsg.textContent = 'ধন্যবাদ! আপনার বার্তা পাওয়া গেছে (প্রোটোটাইপ)।';
    form.reset();
  });
});
