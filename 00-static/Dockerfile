FROM node:16.13.1-slim

WORKDIR /usr/app/00-static
COPY . .
RUN npm i -g pnpm --registry=https://registry.npmmirror.com
RUN pnpm i

EXPOSE 9000
CMD pnpm run start
