
from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, blank=True)
    level = models.PositiveSmallIntegerField(default=50)
    order = models.PositiveIntegerField(default=0)
    icon = models.CharField(max_length=100, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    title = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    current = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} - {self.organization}"


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    repository_url = models.URLField(blank=True)
    project_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True)
    order = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    summary = models.CharField(max_length=250)
    content = models.TextField()
    image = models.ImageField(upload_to='posts/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
