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

- Para executar o projeto é preciso ter apenas o **Docker** e o **Docker-compose** instalado na máquina.

- Para adicionar novas dependencias ao projeto é necessário ter o **Node.JS** e o **npm** instalado na máquina.

<a id="docker"></a>
## Docker e Docker-compose

- Com o docker-compose instalado só é preciso clonar o repositório e executar o comando no terminal dentro da basta do projeto:
```
docker-compose up
```
O comando acima deixa o terminal com os logs dos containers (travado), se quiser executar os container em segundo plano você deve adicionar a flag `-d` ao comando acima.