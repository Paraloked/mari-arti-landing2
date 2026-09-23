document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Лайтбокс для портфолио
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-src');
      const title = item.getAttribute('data-title');
      modalImg.src = imgSrc;
      modalCaption.textContent = title;
      modal.classList.add('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  // Обработка формы заявки
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
});