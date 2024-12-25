const todoService = require('../services/todoService');

exports.addTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = await todoService.addTodo({ title });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.editTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedTodo = await todoService.editTodo(id, { title });
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await todoService.deleteTodo(id);
    const response = "Item Deleted";
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};