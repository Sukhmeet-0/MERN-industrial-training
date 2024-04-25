const express = require('express')
const app = express()
const db = require('./connection')
// const ejs = require('ejs')

app.set('view engine','ejs')

app.get('/',async (req,res)=>{
    let collection = 'staff'
    let documents = await db.collection(collection).find().toArray()
    // res.send('Response from server')
    // res.send(documents)
    // console.log(documents)
    // res.json({documents:documents})
    res.render('index')
})
const port = 3000


app.listen(port,(error)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log('Node server server running...')
    }
})