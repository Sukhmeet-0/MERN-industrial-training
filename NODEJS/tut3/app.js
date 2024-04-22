const express = require('express')
const db  = require('./connection')
const path=require('path')
const indexController = require('./controllers/index.controller')


const app = express()
app.use(express.json())

app.set('view engine','ejs')

// app.get('/', async(req,res)=>{
//     let collection = 'staff'
//     let documents = await db.collection(collection).find().toArray()
//     console.log(documents)
//     // res.send({documents:documents})
//     // res.send('welcome to node')
//     res.render('index')
//     // res.closed()
// })
app.get('/',indexController.renderHome)
app.post('/staff',indexController.addNewStaff)




app.listen(3000,(error)=>{
    if(error) console.log(error)
    else console.log('server running')
})