from django.shortcuts import render
from mc_app.models import WebSite

# Create your views here.
def Home(req):
    s="shadow-bw"
    n="nowork"
    live_website = WebSite.objects.filter(position__isnull=False).order_by('position')
    return render(req, 'mc_home.html', {'hs':s,'hn':n, 'lw':live_website})

def About(req):
    s="shadow-bw"
    n="nowork"
    return render(req, 'mc_about.html', {'as':s,'an':n,})

def Skill(req):
    s="shadow-bw"
    n="nowork"
    return render(req, 'mc_skill.html', {'ss':s,'sn':n,})

def Demo(req):
    s="shadow-bw"
    n="nowork"
    live_website = WebSite.objects.all().order_by('-id')
    return render(req, 'mc_demo.html', {'ds':s,'dn':n, 'lw':live_website})

def Contact(req):
    s="shadow-bw"
    n="nowork"
    return render(req, 'mc_contact.html', {'cs':s,'cn':n})