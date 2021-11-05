FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json  ./
RUN npm config set package-lock false

RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve