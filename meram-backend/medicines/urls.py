from django.urls import path
from medicines.views import *
urlpatterns=[
    path("",medicine_list),
    path("<int:id>/",medicine_detail)
]