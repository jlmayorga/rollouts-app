FROM node:18 as build

COPY ./src /workspace/src
COPY ./public /workspace/public
COPY package.json /workspace
WORKDIR /workspace
RUN npm install 
RUN npm run build

FROM nginx:1.23
COPY --from=build /workspace/build /usr/share/nginx/html