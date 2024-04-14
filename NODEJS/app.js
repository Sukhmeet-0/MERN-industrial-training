const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.write('<h1>Hello ki haaaaaaal aaaaaaa g</h1>')
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Hello </h1>')
    res.write('<p>lorem100 </p>')
    res.end()
} )

app.get('/about',(req,res)=>{
    // res.send('<h2>About us</h2>')
    res.sendFile(path.join(__dirname)+'/Pages/HomePage.html')
})

app.listen(1699,()=>{
    console.log('Server started on port 1699')
})