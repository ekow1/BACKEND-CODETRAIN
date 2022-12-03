
const express = require('express')


const home = (req , res) =>{
    res.send('<h1>Home Page </h1>')
}
const login = (req , res) =>{
    res.send('<h1>Login Page</h1>')
} 
const register = (req , res) =>{
    res.send('<h1>Register Page </h1>')
}
const dashboard = (req , res) =>{
    res.send('<h1>Dashboard</h1>')
}


const server = express()
server.use ('/signin' , login);
server.use ('/signup' , register);
server.use ('/main' , dashboard);
server.use ('/' , home);



server.listen(3000, 'localhost' , () =>{
    console.log('Server is listening at port 3000')
})