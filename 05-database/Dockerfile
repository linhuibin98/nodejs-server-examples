FROM node:16.13.1

WORKDIR /usr/app/05-database
COPY . .
RUN npm config set registry https://registry.npmmirror.com
RUN npm config set node_sqlite3_binary_host_mirror https://npm.taobao.org/mirrors
RUN npm config set sqlite3-binary-site https://npm.taobao.org/mirrors/sqlite3
RUN npm i -g pnpm
RUN pnpm i

EXPOSE 9000
CMD pnpm run start
