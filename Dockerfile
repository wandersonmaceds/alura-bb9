FROM node:12.19.0-alpine3.12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . .

RUN npm install -g nodemon

RUN npm install

EXPOSE 3000

CMD ["npm","run","start:dev"]

