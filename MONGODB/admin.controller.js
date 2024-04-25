// const connection = require("./connection")
const connection = require("../connection")
const {sign} = require('jsonwebtoken')

function AddCategory(req, res){
    const {categoryName}= req.body;
    console.log(req.body);
    let insertCommand =`INSERT INTO category(categoryName) VALUES ('${categoryName}')`;
    connection.query(insertCommand,(error)=>{
        if(error){
            res.json({error:error.message, message:""});
        }else{
            res.json({error:"", message:"Category Added"});
        }
    })
}

function ReadCategory(req, res){
    let readCommand = `SELECT * FROM category`;
    connection.query(readCommand, (error, records)=>{
        if(error){
            res.json({error:error.message, message:"", records:[]});
        } else{
            res.json({error:"", records:records});

        }
    })
}

function DeleteCategory(req, res){
    let {id}= req.params;
    let deleteCommand = `DELETE FROM category WHERE id=${id}`;
    connection.query(deleteCommand, (error)=>{
        if(error){
            res.json({error: error.message, message:""})
        }else{
            res.json({error:"", message:"category deleted"});
        }
    });
}

function AdminLogin(req, res){
    // console.log(req.body);
let {email, password}=req.body
    if(email == "" || password == ""){
        res.json({error:'All fields are required', message:''})
    }else{
        //authenticate
        let checkUser=`SELECT * FROM admin WHERE email='${email}' and password='${password}'`
        connection.query(checkUser,(error, record)=>{
            if(error){
                res.json({error:error.message, message:""});
            }else{
                if(record.length== 0){
                    res.json({error:"Invalid Email or Password", message: ""})
                }else{
                    let payload = {
                        id: record[0].id,
                        email: record[0].email,
                        fullName: record[0].fullName
                    }
                    let secret = "abc@123"
                    let expiry = 60 * 60 // 1 minute

                    // create token
                    let token = sign(payload, secret, {expiresIn: expiry})
                    console.log(token)
                    res.cookie('customerToken', token, {
                        expires: new Date(Date.now() + expiry * 1000) // 1 minute
                    })
                    res.json({error:"", message:"Login Success"});

                }
            }
        })
    }
}

module.exports={
    AddCategory, ReadCategory, DeleteCategory, AdminLogin
}