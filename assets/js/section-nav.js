(function () {
  const links = Array.from(document.querySelectorAll('.section-nav a'));
  const entries = links.map(function (link) {
    return { link: link, target: document.getElementById(link.hash.slice(1)) };
  }).filter(function (entry) { return entry.target; });
  let scheduled = false;

  function update() {
    let current = null;
    let closest = -Infinity;
    entries.forEach(function (entry) {
      const top = entry.target.getBoundingClientRect().top;
      if (top <= 120 && top > closest) {
        current = entry;
        closest = top;
      }
    });
    entries.forEach(function (entry) {
      if (entry === current) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    });
    scheduled = false;
  }

  function schedule() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  update();
}());
