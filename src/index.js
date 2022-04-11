const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sunil31:tempUranium@newcluster.wm6qg.mongodb.net/sunil_db?retryWrites=true&w=majority',{
    useNewurlParser:true
}).then(()=>{
    console.log("Moongoose is connected")
}).catch(err=>console.log(err));

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
