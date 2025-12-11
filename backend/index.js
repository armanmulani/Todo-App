const express = require ('express');
const {createTodo} = require('./types')

const app = express();
const port = 3000;


app.use(express.json());


app.get('/todos', (req, res) => {
   
})

app.post('./todo', async function (req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"Invalid input data"
        })
        return;
    }

    await todo.create({
        title:createPayload.create,
        description:createPayload.create
    })
    res.json({
        msg:"Todo created"
    })
})

app.get('./todos', async (req, res) => {
    const todos = await todos.find({

    })
    res.json({
        todos
    })
})

app.put('./completed', (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"Invalid input data"
        })
        return;
    }
})
app.delete('./drop', (req, res) => {

})