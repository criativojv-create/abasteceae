// Auditoria de tipografia, espaçamento e controles contra o Livro de Regras.
// Rodar no console da página (ou via ferramenta). Retorna um resumo em JSON.
(() => {
  const vis = el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity) > 0; };
  const own = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  const secOf = el => { const s = el.closest('section,header,footer'); return s ? (s.id || s.className.split(' ').filter(c => c !== 'sec')[0] || s.tagName) : '?'; };
  const txt = el => el.textContent.trim().replace(/\s+/g, ' ').slice(0, 42);
  const zoomOf = el => { let z = 1, e = el; while (e) { const v = parseFloat(getComputedStyle(e).zoom || 1); z *= v; e = e.parentElement; } return z; };

  // cor e contraste
  const parse = c => { const m = c.match(/[\d.]+/g); return m ? m.map(Number) : [0,0,0,1]; };
  const lum = ([r,g,b]) => { const f = v => { v /= 255; return v <= .03928 ? v/12.92 : ((v+.055)/1.055)**2.4; }; return .2126*f(r)+.7152*f(g)+.0722*f(b); };
  const bgOf = el => { let e = el; let acc = null; while (e) { const cs = getComputedStyle(e); const c = parse(cs.backgroundColor); if (cs.backgroundImage !== 'none' && !cs.backgroundImage.includes('url')) { const m = cs.backgroundImage.match(/rgba?\([^)]+\)/); if (m) return parse(m[0]); } if (c[3] === undefined || c[3] > .5) return c; e = e.parentElement; } return [252,253,255]; };
  const blend = (fg, bg) => { const a = fg[3] ?? 1; return [0,1,2].map(i => fg[i]*a + bg[i]*(1-a)); };

  const texts = [...document.querySelectorAll('body *')].filter(el => own(el) && vis(el) && !el.closest('script,style,.footer-mark,[aria-hidden=true]'));
  const rows = texts.map(el => {
    const cs = getComputedStyle(el); const z = zoomOf(el);
    const fs = parseFloat(cs.fontSize) * z; const lh = cs.lineHeight === 'normal' ? 1.2 * fs : parseFloat(cs.lineHeight) * z;
    const lines = Math.max(1, Math.round(el.getBoundingClientRect().height / lh));
    const clipped = cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)' || cs.color === 'rgba(0, 0, 0, 0)';
    const bg = bgOf(el.parentElement); const fg = blend(parse(cs.color), bg);
    const L1 = lum(fg), L2 = lum(bg); const cr = (Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
    return { sec: secOf(el), t: txt(el), fs: +fs.toFixed(1), lhPct: Math.round(lh/fs*100), w: +cs.fontWeight, ls: +(parseFloat(cs.letterSpacing)/parseFloat(cs.fontSize) || 0).toFixed(3), fam: cs.fontFamily.split(',')[0].replace(/"/g,''), lines, cr: clipped ? null : +cr.toFixed(2), tag: el.tagName };
  });

  const below14 = rows.filter(r => r.fs < 14);
  const sizes = {}; rows.forEach(r => { sizes[r.fs] = (sizes[r.fs] || 0) + 1; });
  const heavyTitles = rows.filter(r => r.fs >= 32 && r.w >= 500);
  const lhBad = rows.filter(r => (r.lines >= 2 && r.fs < 32 && (r.lhPct < 140 || r.lhPct > 150)) || (r.lines >= 2 && r.fs >= 32 && (r.lhPct < 100 || r.lhPct > 115)));
  const lowContrast = rows.filter(r => r.cr !== null && r.cr < (r.fs >= 24 || (r.fs >= 18.66 && r.w >= 700) ? 3 : 4.5));
  const fams = [...new Set(rows.map(r => r.fam))];
  const headings = [...document.querySelectorAll('h1,h2,h3')].filter(vis).map(h => { const cs = getComputedStyle(h); const z = zoomOf(h); return { tag: h.tagName, sec: secOf(h), t: txt(h), fs: +(parseFloat(cs.fontSize)*z).toFixed(1), w: +cs.fontWeight, lines: Math.round(h.getBoundingClientRect().height / ((cs.lineHeight==='normal'?1.2*parseFloat(cs.fontSize):parseFloat(cs.lineHeight))*z)) }; });

  // controles
  const ctrls = [...document.querySelectorAll('a.btn-pill, a.btn-grad, .nav-burger, a.btn, .burger, summary, .nav a')].filter(vis).map(el => { const r = el.getBoundingClientRect(); return { sec: secOf(el), t: txt(el), h: Math.round(r.height), w: Math.round(r.width) }; });
  // raios
  const radii = {}; [...document.querySelectorAll('body *')].filter(vis).forEach(el => { const r = parseFloat(getComputedStyle(el).borderTopLeftRadius) * zoomOf(el); if (r > 0 && r < 500) { const k = Math.round(r); radii[k] = (radii[k] || 0) + 1; } });
  // sombras
  const shadows = [...document.querySelectorAll('body *')].filter(el => vis(el) && (getComputedStyle(el).boxShadow !== 'none' || getComputedStyle(el).filter.includes('drop-shadow'))).length;

  // respiro vertical entre seções/blocos
  const secs = [...document.querySelectorAll('main > section')].map(s => { const r = s.getBoundingClientRect(); const kids = [...s.querySelectorAll('.cv > *, .wrap > *')].filter(vis).map(k => k.getBoundingClientRect()); const top = Math.min(...kids.map(k => k.top)) - r.top; const bot = r.bottom - Math.max(...kids.map(k => k.bottom)); return { sec: s.id || s.className, h: Math.round(r.height), padTop: Math.round(top), padBot: Math.round(bot) }; });

  return { vw: innerWidth, families: fams, totalTexts: rows.length, sizes, below14: below14.map(r => `${r.fs}px · ${r.sec} · ${r.t}`), heavyTitles: heavyTitles.map(r => `${r.fs}px w${r.w} · ${r.sec} · ${r.t}`), lhBad: lhBad.map(r => `${r.fs}px lh${r.lhPct}% (${r.lines} linhas) · ${r.sec} · ${r.t}`), lowContrast: lowContrast.map(r => `${r.cr}:1 ${r.fs}px · ${r.sec} · ${r.t}`), headings, ctrls, radii, shadows, secs };
})();
