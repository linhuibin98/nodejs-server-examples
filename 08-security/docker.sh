# 构建容器镜像，命名为 08-security，标签为 1.0.0
docker build -t 08-security:1.0.0 .

# 以镜像 08-security:1.0.0 运行容器，命名为 08-security
# 挂载 database 存放数据库文件
# 重启策略为无条件重启
docker run -p 9090:9000 -v /${PWD}/database:/usr/app/08-security/database -d --restart always --name 08-security 08-security:1.0.0
