const db = require("../connection")

function renderHome(req,res){
    res.render('index')
}

async function addNewStaff(req,res){
    console.log(req.body)
    const {name,age,gender}=req.body
    const collection = 'staff'
    const document={
        name:name,
        age:age,
        gender:gender
    }
    try{
        await db.collection(collection).insertOne(document)
        
        res.json({error:'',message:'data inserted'})
    }catch(eroor){
        
        res.json({error:error,message:''})
    }
}

module.exports = {
    renderHome,
    addNewStaff
}