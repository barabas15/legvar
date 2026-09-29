(function () {
  var designs = [
    ['puff.html', 'Puff'],
    ['ugri.html', 'Ugri'],
    ['holdudvar.html', 'Holdudvar'],
    ['ovikert.html', 'Ovikert'],
    ['cirkusz.html', 'Parádé'],
    ['zonamester.html', 'Zónamester'],
    ['hetvege.html', 'Hétvége']
  ];
  var here = location.pathname.split('/').pop() || 'index.html';
  var h = 40;

  var css = document.createElement('style');
  css.textContent =
    '.dsw{position:fixed;top:0;left:0;right:0;height:' + h + 'px;z-index:2147483000;display:flex;align-items:center;gap:12px;padding:0 12px;background:#0d0d10;color:#fff;font:600 13px/1 system-ui,-apple-system,"Segoe UI",sans-serif;box-shadow:0 1px 0 rgba(255,255,255,.08)}' +
    '.dsw-label{opacity:.6;white-space:nowrap}' +
    '.dsw-list{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;margin:0;padding:0;list-style:none}' +
    '.dsw-list::-webkit-scrollbar{display:none}' +
    '.dsw a{display:block;color:#fff;text-decoration:none;padding:7px 11px;border-radius:999px;white-space:nowrap;opacity:.78}' +
    '.dsw-n{opacity:.5;margin-right:6px}' +
    '.dsw a:hover{opacity:1;background:rgba(255,255,255,.1)}' +
    '.dsw a[aria-current="page"]{background:#fff;color:#0d0d10;opacity:1}' +
    '.dsw a:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
    'html{scroll-padding-top:' + h + 'px}' +
    'body{margin-top:' + h + 'px!important}' +
    '@media (max-width:560px){.dsw-label{display:none}}';
  document.head.appendChild(css);

  var bar = document.createElement('nav');
  bar.className = 'dsw';
  bar.setAttribute('aria-label', 'Design váltó');
  bar.innerHTML = '<span class="dsw-label">Design</span><ul class="dsw-list">' + designs.map(function (d, i) {
    return '<li><a href="' + d[0] + '"' + (d[0] === here ? ' aria-current="page"' : '') + '><span class="dsw-n">' + (i + 1) + '</span>' + d[1] + '</a></li>';
  }).join('') + '</ul>';
  document.body.insertBefore(bar, document.body.firstChild);

  var cur = bar.querySelector('[aria-current]');
  if (cur) cur.scrollIntoView({ inline: 'center', block: 'nearest' });
  document.documentElement.style.setProperty('--dsw-h', h + 'px');
  try { localStorage.setItem('legvar-design', here); } catch (e) {}
})();
