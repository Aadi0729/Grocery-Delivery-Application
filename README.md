## General Info

This project is a simple full stack application that connects to a MongoDB database. Node.js and Express were used to code the server. React and Redux were used for the front-end. The Client folder was bootstrapped using [Create React App](https://github.com/facebook/create-react-app). Simple styling was done with the Materialize CSS package. To try this project out, clone this repository and then add your MongoURI and jwtSecret to the default.json file in the config folder.

## Available Scripts

In the main project directory, you can run:

### `npm run start`

Runs the server code once using Node.

### `npm run server`

Runs the server continuously using the nodemon package. The server will automatically restart when you change a file in the server code.

### `npm run dev`

Uses concurrently to run both the server and the client at the same time. The client-side code (React) runs on Port 3000. The server-side code (Node) runs on Port 5000.
