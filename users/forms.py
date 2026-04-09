from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class MyCustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        # Adicione aqui os campos que quer que apareçam no HTML
        fields = UserCreationForm.Meta.fields + ("email", "first_name", "last_name", "phone", "city", "state")