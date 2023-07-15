FROM node:18.13.0

RUN npm install pm2 -g

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "pm2-runtime","start", "src/app.js","-i","max" ]
