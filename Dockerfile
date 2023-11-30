FROM node:20.10.0

WORKDIR /app

COPY  package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]
