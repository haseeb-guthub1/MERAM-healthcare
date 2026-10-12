from django.urls import path
from  accounts.views  import *

urlpatterns = [
    path("register/", register_user),
    path("<int:id>/",get_user_by_id)
]
