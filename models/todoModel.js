const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        status: {
            type: Boolean,
            default: true
        }
    }
)

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo