from django.db import models

# Create your models here.
class WebSite(models.Model):
    image       = models.ImageField(upload_to = 'image', blank=True, null=True)
    type        = models.CharField(max_length=50, choices =(("Live","Live"), ("Demo","Demo"), ("Draft","Draft")), default="Draft")
    category    = models.CharField(max_length=50, choices=(("Web-Applications","Web-Applications"),("E-commerce","E-commerce"),("Portfolio","Portfolio"), ("News","News"),("Educational","Educational"),("Forums","Forums"),("Streaming","Streaming"),("Real-Estate","Real-Estate")),default="Web-Application")
    position    = models.IntegerField(blank=True, null = True)
    description = models.CharField(max_length = 200)
    technology  = models.CharField(max_length = 200)
    link        = models.URLField(default="#")
    views       = models.IntegerField()