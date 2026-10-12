from django.contrib import admin
from medicines.models import *
from doctors.models import *

admin.site.register(Medicine)
admin.site.register(Doctor)


