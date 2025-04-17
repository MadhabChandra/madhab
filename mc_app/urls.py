from django.urls.conf import path
from mc_app import views
urlpatterns = [
    path('', views.Home),

]