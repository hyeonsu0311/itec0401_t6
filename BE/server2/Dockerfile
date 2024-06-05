FROM node:14
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm i axios express cors mysql2 dotenv
CMD ["node", "./server2/server.js"]