//first cread index.js -> than in git bash in the folder module_2 npm init ->
//package json is created -> next npm install express -> 
//node modules and express dependesis are in package.json integrated!

//start -> in folder module_2 -> node index.js

const express = require('express'); // able to use express
const { isEmptyObject } = require('jquery');

const sockedIO = require('socket.io');
const http = require('http');
const port = process.env.PORT||3000;

const Datastore = require('nedb');

let app = express();
let server = http.createServer(app);
let io = sockedIO(server);

server.listen(port, () => console.log("Listening on Port: " + port));

// app.listen(3000, () => console.log('Listening Port: 3000'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('C:/Users/me/YouTubeTutorial/thesis/public/bubble.html');
});
