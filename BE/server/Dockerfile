FROM node:14
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm i cors mysql2 dotenv
CMD ["node", "./server/server.js"]