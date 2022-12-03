const express = require('express')



const main = (req ,res) =>{

    res.send('<h1>Welcome Home</h1>')
}
const profile = (req ,res) =>{

    res.send('<h1>Proifle Page</h1>')
}
const market = (req ,res) =>{

    res.send('<h1>Market Place</h1>')
}
const education = (req ,res) =>{

    res.send('<h1>Welcome to the university</h1>')
}
const signin = (req ,res) =>{

    res.send('<h1>Login Page</h1>')
}
const signup = (req ,res) =>{

    res.send('<h1>Register Page</h1>')
}

const server = express()
server.get('/profile' , profile)
server.get('/market' , market)
server.get('/edu' , education)
server.post('/login' , signin)
server.post('/register' , signup)
server.get('/' , main)





server.listen(3000 , 'localhost' , () =>{
    console.log('server listening at port 3000')
})