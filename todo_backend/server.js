const express = require('express');
const app = express();
app.use(express.json());
const {v4: uuidv4} = require('uuid')



const todo = [
    {
        todo: "spray down",
        description: "spray windows",
        completed: false,
        _id: uuidv4()
    },
    {
        todo: "clean",
        description: "sweep all rooms",
        completed: false,
        _id: uuidv4()
    },
    {
        todo: "mop floors",
        description: "put water in bucket, add soap",
        completed: false,
        _id: uuidv4()
    }
];
let newTodo = []
// gets all
app.get("/todo", (request, response) =>{
response.send(todo)
});
//get one
app.get("/todo/:todoId", (request, response) => {
    console.log(request.params.todoId)
    const todoId = request.params.todoId
    const foundTodo = todo.find(list => list._id === todoId)
    response.send(foundTodo)
    console.log("success")
})

// posts 
app.post("/todo", (request, response) => {
    const newTodo = request.body;
    newTodo._id = uuidv4();
     todo.push(newTodo);
    response.send("successful post")
    
});
// put/update
app.put("/todo/:todoId", (request, response) => {
const todoId = request.params.todoId
const todoIndex = todo.findIndex(updateTodo => updateTodo._id === todoId)
const updateTodo = Object.assign(todo[todoIndex], request.body)
response.send(updateTodo)
});

// delete
app.delete("/todo/:todoId", (request, response) => {
    const todoId = request.params.todoId
    const todoIndex = todo.findIndex(todoDelete => todoDelete._id === todoId)
    todo.splice(todoIndex, 1)
response.send("delete successful")
});




app.listen(3100, () => {
    console.log("Server 3100 is running")
})