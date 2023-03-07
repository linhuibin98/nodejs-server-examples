# 构建容器镜像，命名为 10-log，标签为 1.0.0
docker build -t 10-log:1.0.0 .

# 以镜像 10-log:1.0.0 运行容器，命名为 10-log
# 挂载 database 存放数据库文件
# 重启策略为无条件重启
docker run -p 9090:9000 -v /${PWD}/database:/usr/app/10-log/database -d --restart always --name 10-log 10-log:1.0.0
