(function () {
  var KEY = 'realhcok-lang';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  // Una scelta esplicita col selettore IT | EN viene ricordata.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-lang]');
    if (a) set(a.getAttribute('data-lang'));
  });

  // Redirect automatico solo dalla home italiana e solo se non c'è già una scelta.
  if (document.documentElement.lang !== 'it') return;
  var want = get();
  if (want !== 'it' && want !== 'en') {
    var l = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    want = l && !/^it(-|$)/i.test(l) ? 'en' : 'it';
  }
  if (want === 'en') location.replace('/en/' + location.hash);
})();
