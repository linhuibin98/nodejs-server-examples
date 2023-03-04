FROM node:16.13.1-slim

WORKDIR /usr/app/04-exception
COPY . .
RUN npm i -g pnpm --registry=https://registry.npmmirror.com
RUN pnpm i --registry=https://registry.npmmirror.com

EXPOSE 9000
CMD pnpm run start
