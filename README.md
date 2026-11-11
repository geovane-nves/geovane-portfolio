 <div align="center">

# Geovane Neves — Portfólio

### Desenvolvimento web, tecnologia e soluções digitais.

**Portfólio pessoal desenvolvido para apresentar minha trajetória, experiências, habilidades e projetos na área de desenvolvimento de software.**

[![Python](https://img.shields.io/badge/Python-Linguagem-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-Framework-092E20?style=flat-square&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Estrutura-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Estilização-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Interatividade-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Banco%20de%20dados-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[Visão geral](#visão-geral) · [Funcionalidades](#funcionalidades) · [Tecnologias](#tecnologias) · [Arquitetura](#arquitetura-do-projeto) · [Estrutura](#estrutura-de-diretórios) · [Como executar](#como-executar) · [Deploy](#publicação)

</div>

---

## Visão geral

O **Geovane Neves — Portfólio** é uma aplicação web pessoal desenvolvida para apresentar minha trajetória acadêmica e profissional, experiências, conhecimentos técnicos e projetos desenvolvidos na área de tecnologia.

A aplicação foi construída utilizando Python e Django no backend, com uma interface desenvolvida em HTML, CSS e JavaScript.

O projeto possui integração com um painel administrativo, permitindo gerenciar informações e atualizar conteúdos sem a necessidade de modificar diretamente os arquivos da aplicação.

Além da apresentação profissional, o portfólio também funciona como um espaço para compartilhar conhecimentos, registrar minha evolução como desenvolvedor e reunir projetos em um único ambiente.

## Funcionalidades

| Recurso | Descrição |
| --- | --- |
| **Página inicial** | Apresentação pessoal e introdução ao portfólio. |
| **Sobre mim** | Informações sobre minha trajetória, formação e interesses na tecnologia. |
| **Habilidades** | Apresentação das tecnologias e ferramentas com as quais trabalho. |
| **Experiências** | Registro de experiências acadêmicas e profissionais. |
| **Projetos** | Exibição de projetos desenvolvidos, com descrições e informações técnicas. |
| **Blog** | Publicações relacionadas à tecnologia, desenvolvimento e aprendizado. |
| **Painel administrativo** | Gerenciamento dos conteúdos por meio do Django Admin. |
| **Layout responsivo** | Adaptação da interface para diferentes tamanhos de tela. |

## Tecnologias

### Backend

- **Python:** linguagem utilizada no desenvolvimento da aplicação.
- **Django:** framework responsável pela estrutura da aplicação, roteamento, processamento de requisições, modelos e painel administrativo.
- **Django ORM:** gerenciamento e consulta dos dados por meio dos modelos.

### Frontend

- **HTML5:** estruturação das páginas utilizando templates Django.
- **CSS3:** estilização e organização visual das interfaces.
- **JavaScript:** implementação de funcionalidades interativas.

### Banco de dados e armazenamento

- **PostgreSQL:** banco de dados utilizado em produção.
- **Neon:** serviço de hospedagem do banco de dados PostgreSQL.
- **Cloudinary:** armazenamento e gerenciamento de imagens e arquivos de mídia.

### Infraestrutura e publicação

- **Gunicorn:** servidor WSGI utilizado na publicação da aplicação.
- **WhiteNoise:** gerenciamento e disponibilização de arquivos estáticos.
- **Render:** plataforma utilizada para hospedagem da aplicação.
- **Git e GitHub:** versionamento e hospedagem do código-fonte.

## Arquitetura do projeto

A aplicação utiliza uma estrutura baseada no padrão MVT (Model-View-Template) do Django, separando responsabilidades entre modelos, visualizações e templates.

### Projeto principal — `config`

Responsável pelas configurações gerais e inicialização da aplicação.

Entre suas responsabilidades estão:

- Configurações do Django.
- Registro das aplicações.
- Configuração do banco de dados.
- Gerenciamento de arquivos estáticos e de mídia.
- Configurações de segurança e variáveis de ambiente.
- Roteamento principal.

### Aplicação — `portfolio`

Responsável pelas funcionalidades e pelo gerenciamento das informações apresentadas no portfólio.

A aplicação contempla os seguintes recursos:

- Cadastro e gerenciamento de habilidades.
- Registro de experiências.
- Gerenciamento de projetos.
- Gerenciamento de publicações.
- Apresentação das informações pessoais e profissionais.

Os conteúdos são organizados por meio de modelos Django e disponibilizados nas páginas através das visualizações e templates.

## Painel administrativo

O projeto utiliza o Django Admin para facilitar o gerenciamento dos conteúdos.

Por meio dele, é possível administrar informações como:

- Habilidades e tecnologias.
- Experiências acadêmicas e profissionais.
- Projetos desenvolvidos.
- Publicações do blog.

Essa abordagem permite atualizar o portfólio sem precisar alterar manualmente os templates sempre que uma informação for modificada.

## Templates e identidade visual

A aplicação utiliza o sistema de templates do Django para organizar e reutilizar estruturas HTML.

O arquivo `templates/base.html` funciona como estrutura-base das páginas, centralizando os elementos compartilhados e permitindo a utilização de herança entre templates.

### Identidade visual

A interface segue uma proposta visual clássica e moderna, com predominância de preto e laranja.

A tipografia utiliza diferentes famílias para estabelecer hierarquia visual e personalidade:

- **Poppins:** textos e elementos da interface.
- **Quattrocento:** elementos tipográficos complementares.
- **Playfair Display:** destaques e títulos.
- **JetBrains Mono:** elementos relacionados à programação.
- **Red Rose:** elementos visuais específicos.

A proposta busca equilibrar identidade profissional, legibilidade e simplicidade, mantendo o foco na apresentação dos projetos e experiências.

## Estrutura de diretórios

Estrutura principal do projeto:

```text
geovane-portfolio/
│
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── portfolio/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── migrations/
│
├── templates/
│   └── base.html
│
├── static/
│   ├── css/
│   ├── js/
│   └── img/
│
├── manage.py
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

## Como executar

### Pré-requisitos

- Python instalado.
- Git instalado.
- Ambiente virtual Python.
- Dependências definidas em `requirements.txt`.

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd geovane-portfolio
```

### 2. Criar o ambiente virtual

Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

### 3. Instalar as dependências

```bash
pip install -r requirements.txt
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias para o funcionamento da aplicação.

As configurações devem contemplar as credenciais do Django, conexão com o banco de dados e armazenamento de mídia.

**Atenção:** não compartilhe informações sensíveis, como chaves secretas e credenciais de serviços externos.

### 5. Executar as migrações

```bash
python manage.py migrate
```

### 6. Criar um superusuário

```bash
python manage.py createsuperuser
```

### 7. Coletar arquivos estáticos

```bash
python manage.py collectstatic
```

### 8. Iniciar o servidor

```bash
python manage.py runserver
```

A aplicação estará disponível em:

`http://127.0.0.1:8000/`

O painel administrativo poderá ser acessado em:

`http://127.0.0.1:8000/admin/`

## Banco de dados e armazenamento

### PostgreSQL — Neon

Em produção, a aplicação utiliza PostgreSQL hospedado na plataforma Neon.

A conexão é configurada por meio das variáveis de ambiente, evitando o armazenamento de credenciais diretamente no código-fonte.

### Cloudinary

O Cloudinary é utilizado para armazenar imagens e arquivos de mídia.

Essa integração permite manter os arquivos enviados pela aplicação em um serviço externo, evitando depender do armazenamento local da plataforma de hospedagem.

## Publicação

A aplicação está hospedada na plataforma Render, utilizando PostgreSQL no Neon e Cloudinary para armazenamento de mídia.

<https://geovane-portfolio.onrender.com>

## Desenvolvimento e manutenção

A organização do projeto permite adicionar novas funcionalidades e atualizar conteúdos sem comprometer a estrutura existente.

Algumas práticas utilizadas no desenvolvimento:

- Separação entre modelos, visualizações e templates.
- Utilização do Django ORM para operações com o banco de dados.
- Gerenciamento de conteúdo pelo painel administrativo.
- Uso de variáveis de ambiente para configurações sensíveis.
- Separação de arquivos estáticos e arquivos de mídia.
- Utilização de migrações para evolução do banco de dados.
- Versionamento do código utilizando Git.

---

## Desenvolvedor

<div align="center">

<a href="https://github.com/geovane-nves">
  <img src="https://github.com/geovane-nves.png" width="120" height="120" alt="Geovane Neves"/>
</a>

<br/>

**Geovane Neves**

Desenvolvedor Web Full Stack

[GitHub](https://github.com/geovane-nves) · [LinkedIn](https://www.linkedin.com/) · [Portfólio](https://geovane-portfolio.onrender.com)

</div>

---

<div align="center">
  <sub>Geovane Neves · Portfólio pessoal</sub>
</div>
