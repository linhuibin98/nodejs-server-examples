# 构建容器镜像，命名为 07-authentication，标签为 1.0.0
docker build -t 07-authentication:1.0.0 .

# 以镜像 07-authentication:1.0.0 运行容器，命名为 07-authentication
# 挂载 database 存放数据库文件
# 重启策略为无条件重启
docker run -p 9090:9000 -v /${PWD}/database:/usr/app/07-authentication/database -d --restart always --name 07-authentication 07-authentication:1.0.0
