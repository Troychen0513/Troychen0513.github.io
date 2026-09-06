(() => {
  const navigation = document.querySelector('.site-nav');
  if (!navigation) return;

  const list = navigation.querySelector('.site-nav-links');
  const entries = Array.from(list.querySelectorAll('a[href^="#"]'))
    .map(link => ({ link, heading: document.getElementById(link.hash.slice(1)) }))
    .filter(entry => entry.heading);
  if (!entries.length) return;

  let currentLink;
  let scheduled = false;

  function updateCurrentSection() {
    scheduled = false;
    const threshold = navigation.getBoundingClientRect().bottom + 25;
    let current = entries[0];
    for (const entry of entries) {
      if (entry.heading.getBoundingClientRect().top <= threshold) current = entry;
    }

    // The final section may be too short to reach the top of the viewport.
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = entries[entries.length - 1];
    }

    if (current.link === currentLink) return;
    if (currentLink) currentLink.removeAttribute('aria-current');
    currentLink = current.link;
    currentLink.setAttribute('aria-current', 'location');

    const linkBounds = currentLink.getBoundingClientRect();
    const listBounds = list.getBoundingClientRect();
    if (linkBounds.left < listBounds.left || linkBounds.right > listBounds.right) {
      list.scrollLeft += linkBounds.left - listBounds.left - (listBounds.width - linkBounds.width) / 2;
    }
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateCurrentSection);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  if (document.fonts) document.fonts.ready.then(scheduleUpdate);
  updateCurrentSection();
})();
