# bb9

## Lista de conteúdos

- [Sobre](#about)
- [Instalação](#installation)
  - [Requisitos](#requirements)
  - [Docker e Docker-compose](#docker)

<a id="about"></a>
## Sobre
bb9 é um bot para enviar tópicos a serem respondidos para os moderadores do fórum Alura bem como sugestões de alterações. 
<!-- Aqui pode melhorar a descrição -->

<a id="installation"></a>
## Instalação

<a id="requirements"></a>
### Requisitos

- Para executar o projeto é preciso ter apenas o **[Docker](https://www.docker.com/get-started)** e o **[Docker-compose](https://docs.docker.com/compose/)** instalado na máquina.

- Para adicionar novas dependencias ao projeto é necessário ter o **Node.JS** e o **npm** instalado na máquina.

<a id="docker"></a>
## Docker e Docker-compose

Existem 2 docker-files disponíveis para utilizar o projeto:

- `docker-compose.yml`: Para executar e subir o servidor
- `docker-compose.test.yml`: Para executar os testes do projeto

Com o docker-compose instalado só é preciso clonar o repositório e executar o comando no terminal dentro da pasta do projeto:
```
docker-compose up
```
O comando acima irá executar o **docker-compose.yml** e irá deixar o terminal com os logs dos containers (travado), se quiser executar os container em segundo plano você deve adicionar a flag `-d` ao comando acima.

Para rodar os testes em watch mode:
```
docker-compose --file docker-compose.test.yml up
```

Para derrubar o container é bem simples, basta pressionar `Ctrl + C` caso não tenha passado a flag `-d` ao subir, caso contrário basta digitar:
```
docker-compose down
```

**Cuidado! caso queira remover também os volumes, você pode passar a flag `-v` para que seja deletado.**