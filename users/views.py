from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import logout, login, authenticate
from .forms import MyCustomUserCreationForm

def logout_view(request):
    """Faz um logout do usuário."""
    logout(request)
    return HttpResponseRedirect(reverse('index'))

def register(request):
    """Faz o cadastro do novo usuário."""
    if request.method !='POST':
        # Exibe o formulário de cadastro em branco
        form = MyCustomUserCreationForm()

    else:
        # Processa o formulário preenchido
        form = MyCustomUserCreationForm(data=request.POST)

        if form.is_valid():
            new_user = form.save()
            # Faz o login do usuário e o redireciona para a página inicial
            authenticated_user = authenticate(username=new_user.username, password=form.cleaned_data.get('password1'))
            login(request, authenticated_user)
            return HttpResponseRedirect(reverse('index'))
    
    context = {'form':form}

    return render(request, 'users/register.html', context)