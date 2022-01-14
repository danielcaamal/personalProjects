FROM nginx

RUN useradd daniel

COPY ./templatemo_550_diagoona /usr/share/nginx/html

ENV file docker

WORKDIR /usr/share/nginx/html

EXPOSE 90

LABEL version=1

USER daniel

RUN echo "I am $(whoami)" > /tmp/me.html

USER root

RUN mv /tmp/me.html /usr/share/nginx/html/docker.html

RUN echo "$file" >>  /usr/share/nginx/html/env.html

VOLUME /var/log/nginx

CMD ["nginx","-g","daemon off;"]
