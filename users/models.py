from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(blank=False, max_length=254, verbose_name="email address")

    # Campos extras que o Django padrão não tem
    phone = models.CharField(max_length=15, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.username