const {MongoClient, ConnectionCheckOutFailedEvent} = require('mongodb')
const uri = 'mongodb://0.0.0.0:27017'

const client = new MongoClient(uri)

async function connectToDatabase(){
    try{
        await client.connect()
        console.log('DB connected')
    }catch(eroor){
        console.log(error)
    }
}
connectToDatabase().then()
let dbname = 'demo'
let db=client.db(dbname)

module.exports=db