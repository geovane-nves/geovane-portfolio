from django.contrib import admin
from .models import Skill, Experience, Project, Post


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'level', 'active')
    list_editable = ('level', 'active')
    list_filter = ('category', 'active')
    search_fields = ('name',)
    list_display = ('name', 'category', 'icon', 'level', 'active')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'organization', 'start_date', 'current', 'active')
    list_filter = ('current', 'active')
    search_fields = ('title', 'organization')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'active')
    list_editable = ('order', 'active')
    search_fields = ('title', 'description')
    list_filter = ('active',)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'published')
    list_editable = ('published',)
    search_fields = ('title', 'summary', 'content')
    list_filter = ('published',)
