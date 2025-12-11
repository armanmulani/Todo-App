const express = require ('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {

})

app.post('./todo', (req,res) => {

})

app.post('./completed', (req,res) => {

})
app.delete('./drop', (req, res) => {

})