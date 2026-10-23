from django.shortcuts import render
from .models import Skill, Experience, Project, Post
from django.contrib import messages
from django.shortcuts import redirect
from django.views.decorators.http import require_POST
from .services.email_service import enviar_email_contato


def home(request):
    context = {
        'skills': Skill.objects.filter(active=True).order_by('order'),
        'experiences': Experience.objects.filter(active=True).order_by('order'),
        'projects': Project.objects.filter(active=True).order_by('order'),
        'posts': Post.objects.filter(published=True).order_by('-created_at'),
    }

    return render(request, 'pages/home.html', context)


def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, published=True)

    return render(request, 'pages/post_detail.html', {
        'post': post
    })

@require_POST
def contato(request):
    nome = request.POST.get("nome", "").strip()
    email = request.POST.get("email", "").strip()
    telefone = request.POST.get("telefone", "").strip()
    mensagem = request.POST.get("mensagem", "").strip()

    if not nome or not email or not mensagem:
        messages.error(request, "Preencha os campos obrigatórios.")
        return redirect("/#contato")

    try:
        enviar_email_contato(nome, email, telefone, mensagem)
        messages.success(request, "Mensagem enviada com sucesso!")
    except Exception as erro:
        print(f"ERRO AO ENVIAR EMAIL: {erro}")
        messages.error(request, "Não foi possível enviar. Verifique o terminal.")

    return redirect("/#contato")