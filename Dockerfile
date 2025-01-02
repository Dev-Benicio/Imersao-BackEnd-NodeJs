FROM node:23.5.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "--watch", "--env-file=.env", "server.js"] 