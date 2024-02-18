FROM openresty/openresty:1.19.9.1-14-centos7-amd64
COPY ./dist/   /usr/local/openresty/nginx/html
