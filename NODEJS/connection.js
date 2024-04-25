const {MongoClient} = require('mongodb')

const dbURI = 'mongodb://0.0.0.0:27017'
const client = new MongoClient(dbURI)

async function connectToDatabase(){
    try{
        await client.connect()
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDatabase()
let dbname= 'demo'
let db = client.db(dbname)

module.exports = db