
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#blog-modal');
    const corpo = document.querySelector('#blog-modal-corpo');
    const botaoVoltar = document.querySelector('.blog-modal__voltar');
    const dados = document.querySelector('.blog__dados-container');

    if (!modal || !corpo || !botaoVoltar || !dados) {
        return;
    }

    const fecharModal = () => {
        modal.classList.remove('blog-modal--aberto');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('blog-modal-aberto');
        corpo.replaceChildren();
    };

    document.querySelectorAll('.card-b[data-post-id]').forEach(card => {
        card.addEventListener('click', event => {
            event.preventDefault();

            const id = card.dataset.postId;
            const publicacao = dados.querySelector(
                `.blog__dados[data-post-id="${id}"]`
            );

            if (!publicacao) {
                return;
            }

            corpo.replaceChildren(publicacao.cloneNode(true));
            corpo.firstElementChild.classList.remove('blog__dados');

            modal.classList.add('blog-modal--aberto');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('blog-modal-aberto');
            botaoVoltar.focus();
        });
    });

    botaoVoltar.addEventListener('click', fecharModal);

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            fecharModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            modal.classList.contains('blog-modal--aberto')
        ) {
            fecharModal();
        }
    });
});
