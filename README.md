
<p align="center">
  <img src="https://github.com/hpbonfim/megahack-2020/blob/master/mideal-logo-black.png"/>
</p>
<p align="center">
  <a href="https://github.com/hpbonfim/megahack-2020#readme">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"/>
  </a>

  <a href="https://github.com/hpbonfim/megahack-2020#readme">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hpbonfim/megahack-2020"/>
  </a>

  <a href="https://github.com/hpbonfim/megahack-2020#readme">
    <img alt="size" src="https://img.shields.io/github/repo-size/hpbonfim/megahack-2020"/>
  </a>

  <a href="https://github.com/hpbonfim/megahack-2020/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hpbonfim/megahack-2020">
  </a>

  <a href="https://github.com/hpbonfim/megahack-2020#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="https://github.com/hpbonfim/megahack-2020#readme" />
  </a>

  <a href="https://github.com/hpbonfim/megahack-2020/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="https://github.com/hpbonfim/megahack-2020#readme" />
  </a>
</p>


Projeto desenvolvido especialmente para o evento [MegaHack 2020](https://www.megahack.com.br/).

Plataforma [Mideal](http://ec2-54-207-61-98.sa-east-1.compute.amazonaws.com/) visa **assegurar os deveres e obrigações de ambas as partes de um acordo firmado em contrato digital**, tudo isso dentro de um **ambiente seguro e criptografado** garantido pela tecnologia de **blockchains aplicada aos smart contracts**.
Isso traz diversos benefícios aos usuários:
  - ***Segurança para Acordos e Negociações***
  - ***Confiabilidade e Garantias***
  - ***Automatização Simplificada de Contratos Seguros***
  - ***Assistência Pessoal Personalizada***

### EQUIPE

|NOME            |LINKEDIN                       |WORK                         |
|----------------|-------------------------------|-----------------------------|
|Henrique Bonfim |[Henrique Bonfim](https://www.linkedin.com/in/hpbonfim)| Desenvolvedor Back-end      |
|Larissa Pissurno|[Larissa Pissurno](https://www.linkedin.com/in/larissa-de-oliveira-pissurno-64783372/)          | Desenvolvedora Front-end     |
|Gabriel Ferre   |[Gabriel Ferre](https://www.linkedin.com/in/gabriel-ferre-963a9617b/)| Marketing                   |
|Marcus Vinícius |[Marcus Vinícius](https://www.linkedin.com/in/marcus-zanato-4494a1195/)| Gestor / Negócios           |
|Jonathan Batista|[Jonathan Batista](https://www.linkedin.com/in/jonathan-batista-ferreira-1b951b150/)| Designer UX/UI              |

# Ferramentas Utilizadas

### FRONT-END:
* **[Angular](https://angular.io/)** - PWA - Usado para criar o HTML no estilo PWA *(Progressive Web App)*.
*  **[Angular Material](https://material.angular.io/)** - Componentes modernos de UI *(Design de interface de usuário)* para Angular.
* **[Font Awesome](https://fontawesome.com/)** - Banco de Ícones Pagos/Gratuitos


### BACK-END:

* **[NodeJS](https://nodejs.org/en/)** - JavaScript Runtime I/O assíncrono orientado a eventos.
* **[Docker](https://www.docker.com/)** - Plataforma de código aberto para criação de ambientes isolados via container.
* **[Express](https://expressjs.com/)** - Framework utilizado para criar APIs.
* **[MongooseJS](https://mongoosejs.com/)** - Elegante script para criar conexões com [MongoDB](https://www.mongodb.com/) .
* **[MongoDB](https://www.mongodb.com/)** - Software de banco de dados orientado a documentos, de código aberto e multiplataforma.
  ##### API's do TWILIO:  
* **[Phone Numbers ](https://www.twilio.com/docs/phone-numbers)**(*API para disponibilizar números de telefone para comunicação em massa, utilizado junto com o Programmable SMS*);
* **[Verify](https://www.twilio.com/docs/verify)** (*API para verificação de usuários via sms*);
* **[Programmable SMS](https://www.twilio.com/docs/sms)** (*API de envio SMS programável, onde o utilizamos para enviar o número e a senha do contrato para os usuários)*; 
* **[Notify ](https://www.twilio.com/docs/notify)**(*API para notificações, onde usamos para avisar o usuário sobre qualquer ação que possa prejudicar sua conta*).


## Instalação

#### Front-end requer [Node.js](https://nodejs.org/) v10+ para ser executado.

Instale as dependências and devDependencies antes de iniciar.

```sh
$ cd frontend
$ npm ou yarn install
$ npm install @angular/cli
$ ng serve
```
#### Back-end requer [Node.js](https://nodejs.org/) v12+ para ser executado.

Instale as dependências and devDependencies antes de iniciar.

```sh
$ cd backend
$ npm install
$ node start
```
##### Navegue pelo aplicativo:
    Endereço: http://localhost:4200/

## Produção


#### Front-end requer **[Docker](https://www.docker.com/)** e uma conta no [Docker Hub](https://hub.docker.com/) para colocar em produção.

##### Instale as dependências and devDependencies antes de iniciar.
> **[Repositório Mideal Front-End no DockerHub](https://hub.docker.com/r/megahack/frontend)**

```sh
$ docker pull megahack/frontend:latest
$ docker run -d -p 80:80 --restart="always" megahack/frontend:latest
```
#### Back-end requer **[Docker](https://www.docker.com/)** e uma conta no [Docker Hub](https://hub.docker.com/) para colocar em produção.

##### Instale as dependências and devDependencies antes de iniciar.
> **[Repositório Mideal Back-End no DockerHub](https://hub.docker.com/r/megahack/backend)**

```sh
$ docker pull megahack/backend:latest
$ docker run -d -p 3000:3000 --restart="always" megahack/backend:latest
```

##### Navegue pelo aplicativo:
    Endereço: http://127.0.0.1/

License
----

**Open Source, be my guest!!** 


