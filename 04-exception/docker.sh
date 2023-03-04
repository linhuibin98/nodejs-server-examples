docker build -t 04-exception:1.0.0 .

docker run -p 9090:9000 -d --restart always --name 04-exception 04-exception:1.0.0
