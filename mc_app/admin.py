from django.contrib import admin
from mc_app import models

# Register your models here.
class websiteadmin(admin.ModelAdmin):
    list_display = ['id','position','title', 'desc', 'image', 'link']
    
class graphic(admin.ModelAdmin):
    list_display = ['id','position','image',]

class email(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'text']
    
    
    
admin.site.register(models.WebSiteList, websiteadmin)
admin.site.register(models.GraphicDesign, graphic)
admin.site.register(models.EmailGet, email)
