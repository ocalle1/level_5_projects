const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://127.0.0.1:27017/test');

const Dog = mongoose.model('Dog', { name: String });

const doggy = new Dog({ name: 'mio' });
doggy.save().then(() => console.log('woof'));

app.use("/inventory", require('./routes/inventoryRouter.js'))

app.get('/', (request, response) => {
    response.send("Hello World")
})

app.use((error, request, response, next) => { 
    console.log(error)
    return response.send({errMsg: error.message})
    })

app.listen(3500, () => {
    console.log("App is listening on port 3500")
})