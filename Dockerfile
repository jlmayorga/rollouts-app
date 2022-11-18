FROM node:lts-alpine@sha256:67373bd5d90ea600cb5f0fa58d7a5a4e6ebf50b6e05c50c1d1cc22df5134db43 as build

COPY ./src /workspace/src
COPY ./public /workspace/public
COPY package.json /workspace
COPY .npmrc /workspace
WORKDIR /workspace
RUN npm install 
RUN npm run build

FROM nginx:1.23
COPY --from=build /workspace/build /usr/share/nginx/html