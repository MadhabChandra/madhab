from django.db import models


# Create your models here.

    

class WebSiteList(models.Model):
    image   = models.URLField(default="https://raw.githubusercontent.com/MadhabChandra/image2/main/")
    link    = models.URLField(default="#")
    title   = models.CharField(null=True, blank=True, max_length = 20 )
    desc    = models.CharField(null=True, blank=True, max_length = 50 )
    position= models.IntegerField(blank=True, null = True, default='0')
    
    
class GraphicDesign(models.Model):
    image   = models.URLField(default="https://raw.githubusercontent.com/MadhabChandra/image2/main/")
    position= models.IntegerField(blank=True, null = True, default='0')
    
    
class EmailGet(models.Model):
    name = models.CharField(max_length=30, null=True, blank=True,)
    email= models.TextField(null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    