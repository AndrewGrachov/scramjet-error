FROM node:12.16
ADD . /app
WORKDIR /app
RUN yarn install
RUN yarn build