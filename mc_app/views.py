from django.shortcuts import render
from mc_app.models import WebSiteList, GraphicDesign, EmailGet
import time
# Create your views here.
def Home(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        email = req.POST.get('email')
        text = req.POST.get('text')
        mass = EmailGet(name = name, email=email, text=text)
        mass.save()
        
        weblist = WebSiteList.objects.all()
        graphic = GraphicDesign.objects.all()
        return render(req, 'mc_home.html',{'weblist':weblist, 'graphic':graphic})
    else:
        weblist = WebSiteList.objects.all()
        graphic = GraphicDesign.objects.all()
        return render(req, 'mc_home.html',{'weblist':weblist, 'graphic':graphic})
