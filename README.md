# Customer Manager API
## 💭 Introdução
Essa API rest faz a comunição entre o [Client](https://github.com/drewdomi/CustomerManager-client) com o Banco de Dados.



## 🖥️ Como baixar e rodar!
- Primeiro baixe o repositório (seja pelas por `git clone` ou através de um arquivo .zip pelo Github).
- Com o projeto já **baixado** e descompactado entre na pasta e **rode o comando** `npm install` para baixar e instalar todas as dependencias!!
- Agora dê o comando `npm run server` para iniciar a API.
- A API estará disponível para acesso no Endpoint `http://localhost:3000/customers`.

## Funcionalidades

## Como usar a API?
- Chame as rotas 

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /customers | Recebe todos os clientes cadastrados |
| GET | /customer:id | Busca um cliente por ID |
| POST | /api/user/login | To login an existing user account |
| POST | /api/causes | To create a new cause |
| GET | /api/causes/:causeId | To retrieve details of a single cause |
| PATCH | /api/causes/:causeId | To edit the details of a single cause |
| DELETE | /api/causes/:causeId | To delete a single cause |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### Authors
* [Black Developa](https://github.com/blackdevelopa)
* ![alt text](https://avatars0.githubusercontent.com/u/29962968?s=400&u=7753a408ed02e51f88a13a5d11014484bc4d80ee&v=4)
### License
This project is available for use under the MIT License.
