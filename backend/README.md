<h1 align="center">
  OZmap-challenge
</h1>
<h3 align="center">Projeto de RESTFUL API criado para realização de teste técnico para a empresa OZmap.</h3>
<br/>
<p>
Seu objetivo é a criação de um CRUD básico de usuários.
</p>  

<br/>

## **Tecnologias utilizadas:**
- Node.js
- Koa
- MongoDB
- Mongoose
- Chai e Mocha (testes)
  
<br/>

A API tem, em seu total, 6 endpoints, permeando entre criação, login, atualização, listagens e deleção de usuários. <br/>

O url base da API é https://localhost: + o número da PORT declarada no env. Caso seja deixada por default, será 3333.

<br/>
<hr/>

Para rodar a aplicação, é necessário:
- npm install (para baixar as estruturas necessárias da aplicação, contida no package.json)
- npm run dev (para rodar a aplicação)

Para rodar os testes da aplicação:
- npm test

Para testar os endpoints da API em sua documentação:
- http://localhost:3333/swagger