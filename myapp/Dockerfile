FROM node:12

WORKDIR /app

COPY ./package.json .

RUN npm install sequelize-cli -g \
    npm install
    
COPY . .

EXPOSE 3000

CMD npm start