import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';


//Routes define how your server responds to client requests at different URLs and HTTP methods. A route connects an HTTP method (like GET, POST, PUT, DELETE) with a URL path, and tells the server what to do when that path is accessed.
//when someone visits that URL or sends a request to it, express runs the function you define for that route
const router = express.Router();

//get data from the server, get users
router.get('/', getUsers);

//sends data to the server, create a new user
router.post('/', createUser);

//getting a specific user using the id
router.get('/:id', getUser);

//deleting a user
router.delete('/:id', deleteUser);

//partially updating a user details
router.patch('/:id', updateUser);

export default router;