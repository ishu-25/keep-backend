const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Gkeep-Notes')
.then(()=>{
    console.log('Connection Successful')
}).catch((e)=>{
    console.log(' No Connection.')
})

