from django.urls import path
from doctors.views import *

urlpatterns=[
    path("",doctor_list),
    path("<int:id>/",doctor_detail),
]