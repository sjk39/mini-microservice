# mini-microservice
A small node.js and React microservice blog for practice with Microservice concepts. Uses memory to replicate storage.

Allows for the creation of posts and comments, as well as comment moderation via comment statuses, rejecting any comment that uses the word 'orange'.
Uses an aync event bus for event driven communication between the services, able to facilitate event syncing as history is stored. Nodemon is used in the default run scripts.
Uses a query service as a strategy to help minimize the number of requests.
Handles CORS errors and unhandled promise rejections.

It is set up for the microservices to run on docker and kubenetes, and is also set up to run with Skaffold. Previous commits have versions that can be run seperately without these.

Docker, kubenetes and Skaffold are required, the build can be run with the command 

```
skaffold dev

```

FOr windows you must update the C:\Windows\System32\drivers\etc\hosts file to include 127.0.0.1 posts.com at the bottom and on Mac update the equivalent.

This project helped with my knowledge of the following:
- node.js packages
- React
- MicroService architecture
- postman testing
- creating Docker images
- posting Docker images to DockerHub
- use of .gitignore and .dockerignore files
- creating kubernetes pods
- dealing with ImagePullBackoff errors
- common kubectl commands
- k8s deployments, commands and updating deployments
- services within k8s inc NodePort and Cluster IP
- Ingress-Nginx (including requiring unique route names)
- Skaffold for ease of build

