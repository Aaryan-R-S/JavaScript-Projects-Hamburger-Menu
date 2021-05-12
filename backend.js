const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');
const port = 5000;

  
//EXPRESS SPECIFIC
app.use('/files', express.static('files')) ; //serve files
app.use(express.urlencoded()) ;

//PUG SPECIFIC
app.set('view engine', 'pug')//Set pug engine
app.set('views', path.join(__dirname, 'views'))//Location of pug file
//Dont change name of folder other than views default

//PUG ENDPOINTS
app.get('/', (req, res) => {
    const x = {}
    res.status(200).render('html.pug', x)
})


// START THE SERVER
app.listen(port, ()=>{
     console.log(`Burger site has started on port ${port}`)
});

