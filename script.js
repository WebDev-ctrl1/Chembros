  // Tab switching
  function showTab(name) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    const btns = document.querySelectorAll('.tab-btn');
    const map = { small: 0, medium: 1, bulk: 2 };
    btns[map[name]].classList.add('active');
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // FAQ accordion
  function toggleFaq(el) {
    el.classList.toggle('open');
  }

  // Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Form submissions (simulate — in production connect to backend/email service)
  function submitBulkForm() {
    const name = document.getElementById('bf-name').value.trim();
    const phone = document.getElementById('bf-phone').value.trim();
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
    const product = document.getElementById('bf-product').value;
    const biz = document.getElementById('bf-biz').value;
    const msg = document.getElementById('bf-msg').value;
    const text = encodeURIComponent(`Hi ChemBros, I'd like a bulk quote.\n\nName: ${name}\nPhone: ${phone}\nBusiness: ${biz}\nProduct: ${product}\nNotes: ${msg}`);
    window.open(`https://wa.me/27677391209?text=${text}`, '_blank');
    document.getElementById('bulk-success').style.display = 'block';
    setTimeout(() => document.getElementById('bulk-success').style.display = 'none', 5000);
  }

  function submitContactForm() {
    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
    const type = document.getElementById('cf-type').value;
    const msg = document.getElementById('cf-msg').value;
    const text = encodeURIComponent(`Hi ChemBros!\n\nName: ${name}\nPhone: ${phone}\nEnquiry type: ${type}\nMessage: ${msg}`);
    window.open(`https://wa.me/27677391209?text=${text}`, '_blank');
    document.getElementById('contact-success').style.display = 'block';
    setTimeout(() => document.getElementById('contact-success').style.display = 'none', 5000);
  }

  // Smooth nav highlight on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 80;
    sections.forEach(s => {
      const top = s.offsetTop;
      const bottom = top + s.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + s.id ? 'var(--accent)' : '';
        });
      }
    });
  });
