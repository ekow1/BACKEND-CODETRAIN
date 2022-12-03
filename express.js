const http = require('express')

const server = express((req,res) => {
  const url = req.url

  if (url === '/'){
    res.write('<h1> Home Page</h1>')
  }
  else if (url === '/register'){
    res.write('<h1> Sign-up Page</h1>')
  }
  if (url === '/login'){
    res.write('<h1> Login Page</h1>')
  }
  if (url !== '/' && url !== '/register' && url !=='/login'){
    res.write('<h1> Error 404 Page Not  Found </h1>')
  }

    res.end("")
})

server.listen(3000, 'localhost' , () =>{
    console.log('Server is listening at port 3000')
})