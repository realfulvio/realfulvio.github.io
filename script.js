(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var raf = 0, last = null;
  document.addEventListener('pointermove', function (e) {
    var el = e.target.closest && e.target.closest('.d-card, .d-hero');
    if (!el) return;
    last = { el: el, x: e.clientX, y: e.clientY };
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = 0;
      var r = last.el.getBoundingClientRect();
      last.el.style.setProperty('--mx', (last.x - r.left) + 'px');
      last.el.style.setProperty('--my', (last.y - r.top) + 'px');
    });
  }, { passive: true });
})();
