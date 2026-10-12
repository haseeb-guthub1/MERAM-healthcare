from rest_framework import serializers
from medicines.models import *

class medicineserializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields="__all__"