import express from "express";

const router = express.Router();
router.get('/', (req, res) => {
    res.send(users);
})

router.post("/", (req, res)=>{
    const user = req.body;

    users.push(user);

    res.send("user with name ${user.firstName} added to the db")
})

export default router;