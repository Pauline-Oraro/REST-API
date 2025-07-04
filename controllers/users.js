import { v4 as uuid } from 'uuid';

let users = [];

//a function to get all users
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

//a function to create a new user
export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User ${user.firstName} added to the database.`);
};


//a function to get a user with a specific id
export const getUser = (req, res) => {
    res.send(req.params.id)
};


//a function to delete a user with a specific id
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};


//a function to update user details
export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.firstName = req.body.firstName;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
};