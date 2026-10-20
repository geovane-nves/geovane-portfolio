from django.shortcuts import render
from .models import Skill, Experience, Project, Post


def home(request):
    context = {
        'skills': Skill.objects.filter(active=True).order_by('order'),
        'experiences': Experience.objects.filter(active=True).order_by('order'),
        'projects': Project.objects.filter(active=True).order_by('order'),
        'posts': Post.objects.filter(published=True).order_by('-created_at'),
    }

    return render(request, 'pages/home.html', context)
