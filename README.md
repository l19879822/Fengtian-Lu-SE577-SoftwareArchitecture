## Dockerfile is available under the root of the repository

## start docker container by running following command

docker build -t <project-name> .
docker run -it -p 8000:80 --rm <project-name>(here I set host as 8000)

## for example - poject-name: my_docker

docker build -t my_docker .
docker run -it -p 8000:80 --rm my_docker

After the docker container is started, lanuch browser and go to localhost:8000 to start the web application

### If you just want to run application without docker then you could use the following command to run the application

quasar dev
