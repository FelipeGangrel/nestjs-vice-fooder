
## Description

Vice Fooder - uma aplicação batuta para lancherias, pizzarias e venda de guloseimas mil

## Instalação

```bash
$ yarn install
```

## Rodando o app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testando

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Database MySQL + Adminer

```bash
$ docker-compose up [-d]
```

- Vá para a url *http://[seu-ip]:8080*
- Acesso o bando com o usuário *root* a senha definida no arquivo *docker-compose.yml*
