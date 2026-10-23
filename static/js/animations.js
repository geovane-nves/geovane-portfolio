(function () {
  const cv = document.getElementById('mao');
  if (!cv) return;
  const ctx = cv.getContext('2d');

  const GRID = ["                    :=+-----=+=--:", "                :--::-::-----=+=+-=-=-=..", "         ::..--=-=--...:.:--===----=--=-=+==--=:..:.", "    .:=-::::::=--=+--=====-==:::=====:..::==-=+*+*+++:", " :-=:::-:=---==+%+**#@***#=-::...:==-:...:.::::::===**=", "==---=-=-=%=++@**#***@******=:-...:---:...:---=...--=*++=::", "-=----=+=+%++*@#**#**@+****#%-::....--==:==++--=::.--==+@+*#+=                                                                 ::::..:::.:-::-", "===-=--=+@++*#@***###@*#**###-===-.:--====+**#*--*---=======+=%%-                                                    .....-.-:....-.----------", "-=--=-=@+*#***@#***#%@****=- ====-:::....:@*#**#@@#++##+=-:::--++-                                       ..::..::--::-:....:.:...::::=:-::::::", "---=*@++**##*#@**#**#@+:      :--=*=+-:...=+**##=@**###@@*###*==##=                                .::..:.....:.::=:::::====*-==-=--=-==-==:=:", "-=%+=+#@******@***#**:          :=++++::::=+***: @*#*#%#@***%#%+-=+%:           .::::=:=:==-:::::::::::::::::::::-==::=+++++++++++++=-==::::::", "++*****@#*****@**#+:               .-==--==--=*##@****#%@***##@:+=*=%.    :--:-:---=+------:::::=--==----:------=-++#%#**+++++%+++*--==-------", "%*****#@****#*@*+=                       .----==++#*#= :@*#*#%%+.*=+#+   ===-++###%@###%#%+-:.:.-+#%%+-:.:::--::-++@@##%%%++++++++----=--=-:--", "*******@******#:                            .-+--=*+#=. -***#%#@: -++#+   ::----....  ..--++--++--##=...=---=:--++####%%#@%%%#%######++++-+-+=", "*#*****@***+=.                                .==@**#*-  =*#*#%#=    .                      :+#%#@+:.::=-#%+=--+##%##%##%#%%%%%%##%#++*++++=++", "******#@+-.                                    :#@*=*+@  .**##%@+                           :#%-:.::=+@#%%#%@%%%@%%%##@%%%%##%@%@#%@##@##+%%#+", "#***++.                                        .%@+*+==   =*#%@@=.                       ..-=::-=-+%#%%%@%#@@###%#@%##%%@=:..=+@%###@%@#%#%##@", "++:                                             :.         -+.:*+.                     =-===-=++#@%%+==+#@##@#%%%%%@%@%:          :.:=++#%###@", "                                                                                       -=--=-=+@#+*#%*--=+@*-+@##@%#.", "                                                                                        .-@@@%@--+%%%+%%%++@@+++#+.", "                                                                                         :=+#%=+%%@-.==+@#=+-=:", "                                                                                        .=+%@==+@+..+%%%+.", "                                                                                         =+%#**@+: .+@#%-", "                                                                                        .:=%#-+@-  .-==+:", "                                                                                         :-#@-+@:   .-=+.", "                                                                                         :++.:-.      ."];

  const COLS = 142, ROWS = GRID.length;
  const LOOP = 11000;                       // duração do loop (ms)
  const FPS = 14;                          // 98 quadros por loop
  const FRAMES = LOOP / 1000 * FPS;
  const POOL = "@%#*+=-:.01/\\|<>[]{}()$&~^;!?abcdefxyz";
  const FONTE = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  const reduzir = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function hash(n) { n = (n ^ 61) ^ (n >>> 16); n += n << 3; n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); n ^= n >>> 15; return (n >>> 0) / 4294967296; }
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => `rgb(${a[0] + (b[0] - a[0]) * t | 0},${a[1] + (b[1] - a[1]) * t | 0},${a[2] + (b[2] - a[2]) * t | 0})`;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  // só as células que têm caractere
  const cells = [];
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const ch = GRID[r][c];
    if (ch && ch !== ' ') cells.push({ r, c, ch, seed: hash(r * 977 + c * 131 + 7) });
  }

  let cw = 8, chh = 14;
  function redimensionar() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = cv.parentElement.clientWidth;
    cw = w / COLS; chh = cw * 1.666;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(chh * ROWS * dpr);
    cv.style.width = w + 'px';
    cv.style.height = (chh * ROWS) + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `400 ${cw / 0.6}px ${FONTE}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
  }

  let TINTA = hex('#262629'), BRILHO = hex('#8d8d98');
  function lerCores() {
    const a = css('--mao-tinta'), b = css('--mao-brilho');
    if (/^#[0-9a-f]{6}$/i.test(a)) TINTA = hex(a);
    if (/^#[0-9a-f]{6}$/i.test(b)) BRILHO = hex(b);
  }

  function desenhar(tms) {
    const t = ((tms % LOOP) + LOOP) % LOOP / LOOP;      // 0..1, periódico
    const f = Math.floor(t * FRAMES);                    // quadro atual
    ctx.clearRect(0, 0, cv.width, cv.height);

    const band = 30;
    const frente = -band + sm(0, 0.78, t) * (COLS + band * 2);     // onda principal (esq. -> dir.)
    const frente2 = ROWS + 6 - sm(0.45, 0.95, t) * (ROWS + 12);    // onda curta (baixo -> cima)

    for (const k of cells) {
      const d = (k.c + k.r * 0.9) - frente;
      let w = d < 0 ? Math.exp(d / (band * 0.9)) : Math.exp(-d / 5);
      const d2 = k.r - frente2;
      w = Math.max(w, Math.exp(-(d2 * d2) / 10) * 0.85);
      const amb = hash(k.seed * 4096 + Math.floor(f / 3) * 13) > 0.985 ? 1 : 0;   // cintilação

      const p = Math.min(1, w) * (0.35 + 0.65 * k.seed);
      const troca = hash(k.seed * 8191 + f * 31) < p * 0.9 || amb;
      let ch = k.ch, brilho = 0;
      if (troca) {
        ch = POOL[Math.floor(hash(k.seed * 65537 + f * 101) * POOL.length)];
        brilho = amb ? 0.55 : Math.min(1, 0.35 + p);
      } else {
        brilho = Math.min(0.28, p * 0.35);
      }
      ctx.fillStyle = mix(TINTA, BRILHO, brilho);
      ctx.fillText(ch, (k.c + 0.5) * cw, (k.r + 0.5) * chh);
    }
  }

  let inicio = performance.now(), ultimo = -1, visivel = true;
  function tick(agora) {
    if (!reduzir && visivel) {
      const t = agora - inicio;
      const q = Math.floor((t % LOOP) / 1000 * FPS);
      if (q !== ultimo) { ultimo = q; desenhar(t); }
    }
    requestAnimationFrame(tick);
  }

  function comecar() {
    lerCores();
    redimensionar();
    desenhar(reduzir ? 3500 : 0);
    if ('IntersectionObserver' in window) {          // não gasta processador com a capa fora da tela
      new IntersectionObserver(e => { visivel = e[0].isIntersecting; }).observe(cv);
    }
    requestAnimationFrame(tick);
  }

  addEventListener('resize', () => { redimensionar(); desenhar(performance.now() - inicio); });
  (document.fonts && document.fonts.load ? document.fonts.load('400 14px "JetBrains Mono"') : Promise.resolve()).then(comecar, comecar);
}
)();


// 2) Menu: o item da seção que está na tela fica com o fundo escuro (.ativo).
const links = document.querySelectorAll('.navbar__links a');
const secoes = [...links]
  .map(a => document.getElementById(a.hash.slice(1)))
  .filter(Boolean);

if (secoes.length && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.toggle('ativo', a.hash === '#' + e.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secoes.forEach(s => observador.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("mensagem-overlay");

    if (!modal) return;

    setTimeout(() => {
        modal.classList.add("mensagem-fechar");

        setTimeout(() => {
            modal.remove();
        }, 200);
    }, 3000);
});
