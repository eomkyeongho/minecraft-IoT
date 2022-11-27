from django.urls import path, include
from minecraftapp import views

urlpatterns = [
    path('block', views.block)
]
