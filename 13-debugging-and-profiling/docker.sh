# 构建容器镜像，命名为 13-debugging-and-profiling，标签为 1.0.0
docker build -t 13-debugging-and-profiling:1.0.0 .

# 以镜像 13-debugging-and-profiling:1.0.0 运行容器，命名为 13-debugging-and-profiling
# 挂载 database 存放数据库文件
# 重启策略为无条件重启
docker run -p 9090:9000 -v /${PWD}/database:/usr/app/13-debugging-and-profiling/database -d --restart always --name 13-debugging-and-profiling 13-debugging-and-profiling:1.0.0
