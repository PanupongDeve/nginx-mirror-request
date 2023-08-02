FROM node:18.12.1-slim
RUN mkdir /app
WORKDIR /app
COPY /package.json /app
RUN cat package.json
RUN yarn install
COPY . /app

CMD ["node", "server.js"]