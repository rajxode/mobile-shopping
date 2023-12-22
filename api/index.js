
// express
const express = require('express');
// for cross-origin 
const cors = require('cors');
// products data
const products = require('./data');

// app
const app = express();
// port
const PORT = process.env.PORT || 5000;

// cors middleware
app.use(cors());


// get list of products
app.get('/products',(req,res) => {
    // return list of products
    return res.status(200).send(
        products
    )
})


// start server
app.listen(PORT,() => console.log(`Server is running on PORT:${PORT}`));