// BREACH: Zero Hour — small progressive enhancements. Every page still works with JS off.
(() => {
  document.documentElement.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Keep the copyright year current
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Fade sections in as they scroll into view
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  }

  // Press kit: highlight the section you're reading in the sticky sub-nav
  const subnav = document.querySelector('.subnav-inner');
  if (subnav) {
    const links = [...subnav.querySelectorAll('a[href^="#"]')];
    const sections = links
      .map((a) => document.getElementById(a.hash.slice(1)))
      .filter(Boolean);
    const header = document.querySelector('.site-header');
    let current = null;

    const setActive = (id) => {
      if (id === current) return;
      current = id;
      for (const a of links) {
        const on = a.hash === `#${id}`;
        a.classList.toggle('is-active', on);
        // On narrow screens the pill bar scrolls sideways: keep the active pill visible
        if (on) {
          subnav.scrollTo({
            left: a.offsetLeft - (subnav.clientWidth - a.offsetWidth) / 2,
            behavior: reduceMotion ? 'auto' : 'smooth',
          });
        }
      }
    };

    const update = () => {
      const line = header.offsetHeight + subnav.offsetHeight + 40;
      let active = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) active = s.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length) active = sections[sections.length - 1].id;
      setActive(active);
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; update(); });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
