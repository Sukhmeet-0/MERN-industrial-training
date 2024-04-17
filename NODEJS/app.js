const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
})
connection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Db connected')
    }
})

app.get('/',(req,res)=>{
    // res.write('<h1>Hello ki haaaaaaal aaaaaaa g</h1>')
    res.sendFile(path.join(__dirname)+'/Pages/HomePage.html')
    // res.setHeader('Content-Type','text/html')
    // res.write('<h1>Hello </h1>')
    // res.write('<p>lorem100 </p>')
    // res.end()
} )

app.get('/about',(req,res)=>{
    // res.send('<h2>About us</h2>')
    res.sendFile(path.join(__dirname)+'/Pages/HomePage.html')
})

app.get('/signin',(req,res)=>{
    console.log(req.query)
})

app.post('/signin',(req,res)=>{
    console.log(req.body)
})
let studId=1002
let fullname='harmeet singh'
let mobile='9815161041'
app.get('/insert',(req,res)=>{
    // const insertQuery = 'Insert into students(studId,fullname,mobile) values(1001,"sukhmeet singh","9988899879")';
    const insertQuery = `Insert into students(studId,fullname,mobile) values(${studId},'${fullname}','${mobile}')`
    connection.query(insertQuery,(error)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Inserted value into table')
        }
    })
})

app.listen(1699,()=>{
    console.log('Server started on port 1699')
})