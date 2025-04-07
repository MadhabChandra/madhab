from django.contrib import admin
from mc_app import models

# Register your models here.
class websiteadmin(admin.ModelAdmin):
    list_display = ['id','category', 'position','description','technology','views','link', 'image']

admin.site.register(models.WebSite, websiteadmin)