const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/api/rowdycrew', (req, res) =>{
    const rowdycrew = [
        {id: 1, firstName: 'Notorious', lastName: 'One'},
        {id: 2, firstName: 'Loud', lastName: 'Packs'},
        {id: 3, firstName: 'Dirk', lastName: 'Diggler'}
    ];
    res.json(rowdycrew);
});


//Server
app.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
});
