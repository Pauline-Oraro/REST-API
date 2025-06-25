import express from "express";
//take incoming post request bodies
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

//initializing the express application
const app = express();
//port of the application. the localhost
const PORT = 5000;

///using json data in the application
app.use(bodyParser.json());

app.use('/users', usersRoutes)


//get request to home route and the function runs once the route is visited
app.get("/", (req, res) => res.send("Welcome to the users API"))

//listen for incoming requests and a callback function which is going to be executed once we run the server.

app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));