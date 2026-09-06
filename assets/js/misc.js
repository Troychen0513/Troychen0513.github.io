(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.misc-disclosure').forEach(disclosure => {
    const summary = disclosure.querySelector('summary');
    const gallery = disclosure.querySelector('.misc-gallery');
    const viewport = gallery.querySelector('.misc-viewport');
    const slides = Array.from(viewport.querySelectorAll('.misc-slide'));
    const dots = Array.from(gallery.querySelectorAll('.misc-dot'));
    const previous = gallery.querySelector('.misc-prev');
    const next = gallery.querySelector('.misc-next');
    const status = gallery.querySelector('.misc-status');
    let selectedIndex = 0;
    let scrollScheduled = false;

    function updateControls() {
      previous.disabled = selectedIndex === 0;
      next.disabled = selectedIndex === slides.length - 1;
      slides.forEach((slide, index) => {
        slide.inert = index !== selectedIndex;
        slide.setAttribute('aria-hidden', String(index !== selectedIndex));
        if (index === selectedIndex) dots[index].setAttribute('aria-current', 'true');
        else dots[index].removeAttribute('aria-current');
      });
    }

    function select(index) {
      viewport.scrollTo({
        left: Math.max(0, Math.min(index, slides.length - 1)) * viewport.clientWidth,
        behavior: reducedMotion.matches ? 'instant' : 'smooth'
      });
    }

    function restorePosition() {
      if (!disclosure.open || !viewport.clientWidth) return;
      viewport.scrollLeft = selectedIndex * viewport.clientWidth;
    }

    // Native scroll snapping handles touch and trackpad gestures.
    viewport.addEventListener('scroll', () => {
      if (scrollScheduled) return;
      scrollScheduled = true;
      window.requestAnimationFrame(() => {
        scrollScheduled = false;
        if (!disclosure.open || !viewport.clientWidth) return;
        const index = Math.max(0, Math.min(slides.length - 1,
          Math.round(viewport.scrollLeft / viewport.clientWidth)));
        if (index === selectedIndex) return;
        selectedIndex = index;
        updateControls();
        status.textContent = `Photo ${index + 1} of ${slides.length}`;
      });
    }, { passive: true });

    previous.addEventListener('click', () => select(selectedIndex - 1));
    next.addEventListener('click', () => select(selectedIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => select(index)));
    gallery.addEventListener('keydown', event => {
      const destinations = { ArrowLeft: selectedIndex - 1, ArrowRight: selectedIndex + 1,
        Home: 0, End: slides.length - 1 };
      if (event.altKey || event.ctrlKey || event.metaKey || !(event.key in destinations)) return;
      event.preventDefault();
      select(destinations[event.key]);
    });

    disclosure.addEventListener('toggle', () => {
      summary.title = `${disclosure.open ? 'Hide' : 'Show'} ${disclosure.dataset.label} photos`;
      if (disclosure.open) window.requestAnimationFrame(restorePosition);
    });
    if ('ResizeObserver' in window) new ResizeObserver(restorePosition).observe(viewport);
    else window.addEventListener('resize', restorePosition);

    slides.forEach(slide => {
      const image = slide.querySelector('img');
      const showError = () => {
        image.hidden = true;
        slide.querySelector('.misc-image-error').hidden = false;
      };
      image.addEventListener('error', showError);
      if (image.complete && image.naturalWidth === 0) showError();
    });

    gallery.classList.add('is-enhanced');
    gallery.querySelector('.misc-controls').hidden = slides.length < 2;
    updateControls();
  });
})();
