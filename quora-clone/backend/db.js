const mongoose =  require('mongoose')

const url = "mongodb://KalashJain1010:Kalash@9754@ac-iqztluf-shard-00-00.46uutt7.mongodb.net:27017,ac-iqztluf-shard-00-01.46uutt7.mongodb.net:27017,ac-iqztluf-shard-00-02.46uutt7.mongodb.net:27017/?ssl=true&replicaSet=atlas-u1llao-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect =() =>{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('mango connected');
    }).catch((error) => console.log("error:", error))
}