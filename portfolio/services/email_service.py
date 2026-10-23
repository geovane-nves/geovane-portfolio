import resend
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags


def enviar_email_contato(nome, email, telefone, mensagem):
    resend.api_key = settings.RESEND_API_KEY

    contexto = {
        "nome": nome,
        "email": email,
        "telefone": telefone or "Não informado",
        "mensagem": mensagem,
    }

    from pathlib import Path

    caminho = Path(__file__).resolve().parents[2] / "templates" / "emails" / "contato.html"
    print("TEMPLATE EXISTE:", caminho.exists())
    print("CAMINHO:", caminho)

    html = render_to_string("emails/contato.html", contexto)

    resend.Emails.send({
        "from": settings.DEFAULT_FROM_EMAIL,
        "to": [settings.CONTACT_EMAIL],
        "reply_to": email,
        "subject": f"Contato pelo portfólio: {nome}",
        "html": html,
        "text": strip_tags(html),
    })