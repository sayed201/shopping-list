const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const items = require ('./models/routes/api/itme');

const app = express( );

// mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
{ useNewUrlParser: true }

//Bodyparser Midleware
app.use(bodyParser.json());

app.get('/api/items', (req, res)=>{
    res.json({message:'hello'})
})

app.get('api/items',items)
//DB Config
const db = require ('./config/key').mongoURI;
const { mongoURI } = require('./config/key');

//Connect to mongo
mongoose
    .connect(db)
    .then(()=>console.log('MondoDB Connected..'))
    .catch(err => console.log(err));

//Use Routers

app.use('/api/items', items)
    const port =process.env.port || 9000;

    app.listen(port,( ) =>console.log(`Server start on port ${port}`));