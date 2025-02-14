const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');
import { insertUser, getUser} from './dbOperation'

app.use(bodyParser())

app.post('/registration', (req, res, next) => {
    const body = req.body;
    const userName = body.username;
    const password = body.password
    insertUser(userName, password);
    res.send("Welcome")
})


app.get('/login', (req, res, next) =>{
    const user = req.query;
    const userName = user.userName
    const password = user.password;
    console.log(userName, password)
    const userValid = getUser(user, password)
    res.send(userValid)  
})

app.get('/importChatHistory', (req, res, next) => {
    fs.readFile("chatHistory.xlsx", (err, data)=> {
        console.log(data.toString())
        res.json({"status": 200, "history": data.toString()})
    })
})


app.listen(3000, ()=>{
    console.log("server listening in 3000" )
})