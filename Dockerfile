#FROM docker.io/library/nginx:1.23
FROM registry.access.redhat.com/ubi9/nginx-120@sha256:1ac853d72c993ede9cae5ba4da4c25dc865d502587925aa170bc8b2c9abe78c7
COPY build /usr/share/nginx/html