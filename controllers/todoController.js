const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json({
            status: "success",
            data: todos,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: error,
        });
    }
};

const createTodo = async (req, res) => {
    try {
        const { title, status } = req.body;

        if (!title) {
            return res.status(500).json({
                status: "fail",
                message: "title is required",
            });
        }

        const newTodo = await Todo.create({ title, status });

        res.status(200).json({
            status: "success",
            data: newTodo,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: error,
        });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        res.status(200).json({
            status: "success",
            data: todo,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: error,
        });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndRemove(id);

        res.status(204).json({
            status: "success",
            message: "Deleted",
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: error,
        });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
