# docker-image-node-express-app

Build a docker image for node-express app

## Build a docker image

docker build . -t avinash/node-web-app:latest

## To list available docker images

docker images

## To run the docker image-> instantiate image container

docker run -p 3001:3000 -d avinash/node-web-app

## To list available docker container

docker ps

## To list the logs for specific container

docker logs <container id>

## To run the node js app, instantiated docker container

http://localhost:3001/
