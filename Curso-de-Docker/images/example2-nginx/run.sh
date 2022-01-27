#!/bin/bash
docker rm -f nginx
docker run -d --rm -p 8000:80 --name nginx nginx:v1
