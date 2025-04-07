from django.urls.conf import path
from mc_app import views
urlpatterns = [
    path('', views.Home),
    path('mc_about/', views.About),
    path('mc_skill/', views.Skill),
    path('mc_demo/', views.Demo),
    path('mc_contact/', views.Contact),
]