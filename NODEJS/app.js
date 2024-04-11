const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.write('<h1>Hello ki haaaaaaal aaaaaaa g</h1>')
} )

app.get('/about',(req,res)=>{
    res.send('<h2>About us</h2>')
})

app.listen(1699,()=>{
    console.log('Server started on port 1699')
})