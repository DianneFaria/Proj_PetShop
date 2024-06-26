<h1 align="center"> Projeto PetShop </h1>

Repositório para o projeto PetShop da disciplina Programação Orientada a Objetos.

Ministrada pelo professor: **[Doutor Gerson da Penha Neto](https://github.com/gerson-pn)**

## 📌 Lista I


**A lista I do projeto PL PetShop é do tipo cli (command-line interface), tem o objetivo de desenvolver o CRUD dos clientes e seus respectivos pets, produtos, serviços e listagens do consumos gerais dos clientes e produtos/serviços.**

Para rodar o programa deve usar os comandos:

```jsx
cd atvi-pl-typescript-master
npm install
tsc
node out/app/main.js
```

## 📌 Lista II

**A lista II do projeto PL PetShop tem o objetivo de desenvolver interfaces gráficas, sem vínculo com o back-end, por enquanto. O front-end é desenvolvido em TypeScript utilizando classes.**

Para rodar o programa deve usar os comandos:

```jsx
cd atvii-pl-typescript-master
npm install
npm run start
```

## 📌 **Lista III**

**A lista III do projeto PL PetShop tem o objetivo de desenvolver interfaces gráficas, sem vínculo com o back-end, por enquanto. O front-end é desenvolvido em TypeScript utilizando funções.**

Para rodar o programa deve usar os comandos:

```jsx
cd atviii-pl-typescript-master
npm install
npm run start
```

## 📌Lista IV

**A lista IV do projeto PL PetShop tem o objetivo de fazer a integração da interface gráfica desenvolvida na lista III com um back-end.**

Para rodar o front-end do programa deve usar os comandos:

```jsx
cd atviv-pl-typescript-master\frontend
npm install
npm run start
```

Para rodar o back-end do programa deve usar os comandos:

```jsx
cd atviv-pl-typescript-master\executavel
java -jar pl.jar
```

## 📌 Lista V

**A lista V do projeto PL PetShop tem o objetivo de finalizar o projeto iniciado na lista I, criando uma interface gráfica e integrando com um back-end.**

Para rodar o front-end do programa deve usar os comandos:

```jsx
cd atvv-pl-typescript-master\frontend
npm install
npm run start
```

Para rodar o back-end do programa deve usar os comandos:

Instale mysql e crie um banco de dados com nome "petshop". Na pasta backend\src\database, edite o arquivo chamado "data-source.ts" com as informações de seu banco.
Existe um arquivo com o nome "banco" que está em backend\banco, ele possui os inserts que você deve adicionar em seu banco de dados.

```jsx
cd atvv-pl-typescript-master\backend
npm install
npm run typeorm -- -d ./src/database/data-source.ts migration:run
//Adicione os inserts no banco de dados
npm run dev:server
```
