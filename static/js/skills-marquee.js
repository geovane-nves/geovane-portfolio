(function () {
  var faixa = document.querySelector('.skills-faixa');
  if (!faixa) return;

  var consulta = window.matchMedia('(max-width: 1199px)');
  var originais = Array.prototype.slice.call(faixa.children);

  function limpar() {
    faixa.querySelectorAll('[data-clone]').forEach(function (el) { el.remove(); });
  }

  function atualizar() {
    limpar();
    if (!consulta.matches) return;

    originais.forEach(function (item) {
      var copia = item.cloneNode(true);
      copia.setAttribute('aria-hidden', 'true');
      copia.setAttribute('data-clone', '');
      faixa.appendChild(copia);
    });
  }

  atualizar();
  if (consulta.addEventListener) consulta.addEventListener('change', atualizar);
  else consulta.addListener(atualizar);
})();