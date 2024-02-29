
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        completed:{
            type:Boolean,
            default:false
        }
    }
)

const todoModel = mongoose.model('todo2',todoSchema)

module.exports  = { todoModel}