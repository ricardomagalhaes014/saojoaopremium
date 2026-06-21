/* ====== SAO JOAO PREMIUM · dps Imobiliário ====== */
(function () {
  'use strict';

  // Header scroll state
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Gallery filters
  const filters = document.querySelectorAll('.filter');
  const items = Array.from(document.querySelectorAll('.g-item'));
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => it.classList.toggle('hide', f !== 'all' && !it.classList.contains(f)));
  }));

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  let current = 0;
  const visible = () => items.filter(it => !it.classList.contains('hide'));
  function open(i) {
    const list = visible();
    current = i;
    lbImg.src = list[current].dataset.src;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  }
  function step(d) {
    const list = visible();
    current = (current + d + list.length) % list.length;
    lbImg.src = list[current].dataset.src;
  }
  items.forEach((it) => it.addEventListener('click', () => open(visible().indexOf(it))));
  document.getElementById('lbClose').addEventListener('click', () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); });
  document.getElementById('lbNext').addEventListener('click', () => step(1));
  document.getElementById('lbPrev').addEventListener('click', () => step(-1));
  lb.addEventListener('click', (e) => { if (e.target === lb) { lb.classList.remove('open'); } });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();
})();

// Lead form -> WhatsApp
function enviarWhatsApp(ev) {
  ev.preventDefault();
  const f = ev.target;
  const txt =
    `Olá dps Imobiliário! Tenho interesse no empreendimento *São João Premium*.%0A%0A` +
    `*Nome:* ${encodeURIComponent(f.nome.value)}%0A` +
    `*Telefone:* ${encodeURIComponent(f.telefone.value)}%0A` +
    `*Email:* ${encodeURIComponent(f.email.value || '-')}%0A` +
    `*Tipologia:* ${encodeURIComponent(f.tipologia.value)}%0A` +
    `*Mensagem:* ${encodeURIComponent(f.mensagem.value || '-')}`;
  window.open(`https://wa.me/351925610864?text=${txt}`, '_blank');
  return false;
}
