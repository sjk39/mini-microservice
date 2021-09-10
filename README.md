# mini-microservice
A small node.js and React microservice blog for practice with Microservice concepts. Uses memory to replicate storage.

Allows for the creation of posts and comments, as well as comment moderation via comment statuses, rejecting any comment that uses the word 'orange'.
Uses an aync event bus for event driven communication between the services, able to facilitate event syncing as history is stored. Nodemon is used in the default run scripts.
Uses a query service as a strategy to help minimize the number of requests.
Handles CORS errors and unhandled promise rejections.

For each folder within the 'blog' folder, run npm install within each to add all of the node modules, before using npm start within each to start their services. 
