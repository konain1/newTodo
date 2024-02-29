
const {todoModel} = require('../db/models')


async function getAllTodos(req,res){

    let todos = await todoModel.find()
    res.json({msg:todos})
}

async function makeTodo(req,res){

    let {title,description} = req.body;
    await todoModel.create({title:title,description:description}).then(()=>console.log('todo created'))

    res.json({msg:"new todo added"})
}
async function completedTodo(req,res){
    let id = req.params.id;
    let todoExist =  await todoModel.findByIdAndUpdate(id,{completed:true})
    console.log(todoExist)

   if(!todoExist){
    return res.json({msg:'invalid id'})
   }


   return res.json({msg : 'todo marked as completed'})
}


module.exports = {getAllTodos,makeTodo,completedTodo}