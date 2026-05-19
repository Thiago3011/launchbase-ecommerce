# 🛒 E-commerce Launchbase

Projeto de e-commerce desenvolvido durante o curso Launchbase, com foco
em construção de aplicações web completas utilizando boas práticas de
desenvolvimento.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   Node.js
-   Express
-   PostgreSQL (ou banco utilizado)
-   HTML, CSS, JavaScript
-   Nunjucks (templates)

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    ecommerce_project/
    │   ├── launchbase-ecommerce-master/
    │   │   └── .gitignore
    │   │   └── database.sql
    │   │   └── package-lock.json
    │   │   └── package.json
    │   │   └── seed.js
    │   │   └── yarn.lock
    │   │   ├── .vscode/
    │   │   │   └── launch.json
    │   │   ├── public/
    │   │   │   └── 14651-error-animation.json
    │   │   │   └── 1708-success.json
    │   │   │   └── 433-checked-done.json
    │   │   │   └── lottie.min.js
    │   │   │   └── script.js
    │   │   │   ├── images/
    │   │   │   │   └── 1593787497234-03.jpg
    │   │   │   │   └── 1593787497236-06a962922157b1bdf0184106cb5e4e5e - Copia.jpg
    │   │   │   │   └── 1593787497236-06a962922157b1bdf0184106cb5e4e5e.jpg
    │   │   │   │   └── 1593787497238-47_2.jpg
    │   │   │   │   └── 1593787497239-1920x1200_wallpaper (1).jpg
    │   │   │   │   └── 1593789088318-27067355_911054872407230_6886580052654060294_n.jpg
    │   │   │   │   └── 1593790359577-1920x1200_wallpaper (1).jpg
    │   │   │   │   └── 1594133843586-Screenshot_1.png
    │   │   │   │   └── placeholder.png
    │   │   │   ├── styles/
    │   │   │   │   └── card.css
    │   │   │   │   └── index.css
    │   │   │   │   └── menu-accounts.css
    │   │   │   │   └── messages.css
    │   │   │   │   └── orders.css
    │   │   │   │   └── products.css
    │   │   │   │   └── session.css
    │   │   │   │   └── users.css
    │   │   ├── src/
    │   │   │   └── server.js
    │   │   │   ├── app/
    │   │   │   │   ├── controllers/
    │   │   │   │   │   └── HomeController.js
    │   │   │   │   │   └── OrderController.js
    │   │   │   │   │   └── ProductController.js
    │   │   │   │   │   └── SearchController.js
    │   │   │   │   │   └── SessionController.js
    │   │   │   │   │   └── UserController.js
    │   │   │   │   ├── middlewares/
    │   │   │   │   │   └── multer.js
    │   │   │   │   │   └── session.js
    │   │   │   │   ├── models/
    │   │   │   │   │   └── Base.js
    │   │   │   │   │   └── Category.js
    │   │   │   │   │   └── File.js
    │   │   │   │   │   └── Product.js
    │   │   │   │   │   └── User.js
    │   │   │   │   ├── services/
    │   │   │   │   │   └── LoadProductService.js
    │   │   │   │   ├── validators/
    │   │   │   │   │   └── product.js
    │   │   │   │   │   └── session.js
    │   │   │   │   │   └── user.js
    │   │   │   │   ├── views/
    │   │   │   │   │   └── layout.njk
    │   │   │   │   │   ├── home/
    │   │   │   │   │   │   └── index.njk
    │   │   │   │   │   ├── orders/
    │   │   │   │   │   │   └── error.njk
    │   │   │   │   │   │   └── success.njk
    │   │   │   │   │   ├── parts/
    │   │   │   │   │   │   └── card.njk
    │   │   │   │   │   │   └── footer.njk
    │   │   │   │   │   │   └── header.njk
    │   │   │   │   │   │   └── messages.njk
    │   │   │   │   │   │   └── section-products.njk
    │   │   │   │   │   │   └── styles.njk
    │   │   │   │   │   ├── products/
    │   │   │   │   │   │   └── create.njk
    │   │   │   │   │   │   └── edit.njk
    │   │   │   │   │   │   └── fields.njk
    │   │   │   │   │   │   └── show.njk
    │   │   │   │   │   ├── search/
    │   │   │   │   │   │   └── index.njk
    │   │   │   │   │   ├── session/
    │   │   │   │   │   │   └── fields.njk
    │   │   │   │   │   │   └── forgot-password.njk
    │   │   │   │   │   │   └── login.njk
    │   │   │   │   │   │   └── password-reset.njk
    │   │   │   │   │   │   └── reset-fields.njk
    │   │   │   │   │   ├── user/
    │   │   │   │   │   │   └── ads.njk
    │   │   │   │   │   │   └── fields.njk
    │   │   │   │   │   │   └── index.njk
    │   │   │   │   │   │   └── register.njk
    │   │   │   ├── config/
    │   │   │   │   └── db.js
    │   │   │   │   └── session.js
    │   │   │   ├── lib/
    │   │   │   │   └── mailer.js
    │   │   │   │   └── utils.js
    │   │   │   ├── routes/
    │   │   │   │   └── index.js
    │   │   │   │   └── products.js
    │   │   │   │   └── users.js

------------------------------------------------------------------------

## ⚙️ Como executar

### 1. Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/seu-repo.git
cd launchbase-ecommerce
```

### 2. Instalar dependências

``` bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` (se necessário):

    DATABASE_URL=your_database_url

### 4. Rodar o projeto

``` bash
npm start
```

A aplicação estará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

## 🧠 Funcionalidades

-   Cadastro de produtos
-   Listagem de produtos
-   Página de detalhes
-   Carrinho de compras (se implementado)
-   Integração com banco de dados

------------------------------------------------------------------------

## 📈 Objetivo do projeto

-   Aprender desenvolvimento full stack
-   Trabalhar com banco de dados relacional
-   Aplicar padrão MVC no backend

------------------------------------------------------------------------

## 📈 Melhorias futuras

-   [ ] Implementar autenticação de usuários
-   [ ] Sistema de pagamento
-   [ ] Upload de imagens
-   [ ] Deploy em produção
-   [ ] Testes automatizados

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por **Thiago** 🚀
