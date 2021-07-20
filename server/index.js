const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const users = [];
let id = 1;

// endpoints
app.post('/auth/users', function(req, res) {
    console.log(req.body);
    const { username, password } = req.body;

    const newUser = {
        id, username, password
    }

    users.push(newUser);
    id++;

    res.status(200).send(users)
})

const PORT = 5050;
app.listen(PORT, () => { console.log(`Server running on ${PORT}`)})