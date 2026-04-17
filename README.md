# 🚀 Site Premium Caminhões
> Versão Alpha
## Descrição
Um site para venda de veículos seguindo um modelo de vitrine virtual para exposição de produtos de uma loja física em Vitória da Conquista.

## 🛠️ Tecnologias Utilizadas

- Linguagem: Python 3.14.3

- Framework: Django 6.0.3

- Banco de Dados: SQLite (Desenvolvimento) / MySQL (Produção)

- Frontend: JavaScript / HTML5 / CSS3

## ⚙️ Como rodar o projeto localmente

**1. Clonar o seu repositório**

    git clone https://github.com/Jefferson-Antonio/premium-caminhoes.git
    cd premium-caminhoes

**2. Criar e ativar o ambiente virtual**

**No Windows:**

    python -m venv venv
    .\venv\Scripts\activate

**No Linux/Mac:**

    python3 -m venv venv
    source venv/bin/activate

**3. Instalar as dependências**

    pip install -r requirements.txt

**4. Rodar as migrações do banco de dados**

    python manage.py migrate

**5. Criar um superusuário (Admin)**

    python manage.py createsuperuser

**6.Iniciar o servidor**

    python manage.py runserver
    
