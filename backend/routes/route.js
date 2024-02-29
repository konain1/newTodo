
const {getAllTodos,makeTodo,completedTodo} = require('../controller/indexfn')

const express = require('express')
const Router = express.Router();


Router.get('/todos',getAllTodos)
Router.post('/make',makeTodo)
Router.put('/completed/:id',completedTodo)


module.exports = {Router}