const Todo = require('../models/Todo');

exports.addTodo = async ({ title }) => {
  if (!title) throw new Error('Title is required');
  return await Todo.create({ title });
};

exports.editTodo = async (id, { title }) => {
  const todo = await Todo.findByPk(id);
  if (!todo) throw new Error('Todo not found');
  todo.title = title;
  await todo.save();
  return todo;
};

exports.deleteTodo = async (id) => {
  const todo = await Todo.findByPk(id);
  if (!todo) throw new Error('Todo not found');
  await todo.destroy();
};