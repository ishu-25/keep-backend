const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ishika25:ishika5724@keep-cluster.ehghwtu.mongodb.net/?retryWrites=true&w=majority&appName=keep-cluster')
.then(()=>{
    console.log('Connection Successful')
}).catch((e)=>{
    console.log(' No Connection.')
})

