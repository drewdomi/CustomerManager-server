# Customer Manager API
## 💭 Introdução
Essa API rest faz a comunição entre o [Client](https://github.com/drewdomi/CustomerManager-client) com o Banco de Dados.

## Funcionalidades
- Buscar por todos os Clientes no Base de Dados
- Cadastrar novos Clientes
- Editar informações de um Cliente
- Excluir um Cliente
- Validação de documento CPF

## Como usar a API?
### Configuração do ambiente do Banco de Dados
- Primeiro baixe o repositório (seja pelas por `git clone` ou através de um arquivo .zip pelo Github).
- Após baixar você deve configurar o "environment", para isso crie um arquivo chamado `.env` na raiz do projeto, e edit ele adicionando a linha `DATABASE_URL=postgresql://test:test@localhost:5432/test` se for por exemplo banco PostgreSQL, para mais informações [acesse aqui](https://www.prisma.io/docs/guides/development-environment/environment-variables)

### Baixe e instale as dependências
- Com o projeto já **baixado** e o .env configurado **rode o comando** `npm install` para baixar e instalar todas as dependencias!!
- Note que ele roda o comando `prisma generate` para justamente configurar o banco com o `.env`
- Agora dê o comando `npm run server` para iniciar a API.
- A API estará disponível para acesso no Endpoint `http://localhost:3000/customers`.

### API Endpoints
| HTTP Verbs | Endpoints | Ações |
| --- | --- | --- |
| GET | /customers | Recebe todos os clientes cadastrados |
| GET | /customers/:id | Busca um cliente por ID |
| GET | /customers/find:queryParams | Busca um cliente por parametros ex: `?name=joao` |
| POST | /customers | Cria um novo Cliente na base de dados |
| PUT | /customers/:id | Altera um Cliente na base de dados |

### Tecnologias Usadas
- **NodeJS**: uma plataforma de desenvolvimento backend de código aberto construída sobre o motor V8 do Google Chrome. Ele permite executar código JavaScript no lado do servidor, o que facilita a construção de aplicativos de alto desempenho e escaláveis. Com o Node.js, é possível criar servidores web, APIs REST, serviços de rede e outras aplicações backend.

- **TypeScript**: um superset JavaScript que adicionando tipagem estática opcional e recursos avançados de programação orientada a objetos. Ao usar o TypeScript, você pode identificar erros de forma mais rápida durante o desenvolvimento, melhorar a manutenção do código e obter recursos avançados, como interfaces, enums e tipos personalizados.

- **Express**:  um framework web minimalista para Node.js. Ele facilita a criação de aplicativos e APIs RESTful de forma rápida e simples. Com uma estrutura de middleware flexível, o Express permite o processamento de solicitações HTTP, gerenciamento de rotas e muito mais, tornando-o uma escolha popular para a construção de servidores web.

- **Prisma**: uma ferramenta de mapeamento objeto-relacional (ORM) moderna e poderosa para Node.js e TypeScript. Ela facilita a interação com o banco de dados, permitindo que você modele seus dados usando uma linguagem de definição de esquema declarativa e, em seguida, gere automaticamente consultas SQL para interagir com o banco de dados. Prisma oferece suporte para PostgreSQL, MySQL e SQLite, permitindo que você crie aplicativos escaláveis e seguros com facilidade.
