from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField()
    location = models.CharField()
    bio= models.TextField(blank=True)

    def __str__(self):
        return self.name


